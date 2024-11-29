<template>
  <div>
    <div class="filter-container">
      <input v-model="search" type="text" placeholder="Search characters..." @input="refetch" />
      <select v-model="status" @change="refetch">
        <option value="">All</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>

    <CharactersList :characters="characters?.characters" />
    <div v-if="isLoading" class="loader-container">
      <div class="loader"></div>
    </div>
    <div v-if="isError" class="error-container">
      <img src="../../assets/noData.jpg" alt="no-data" />
    </div>
    <div v-if="!(isError || isLoading)">
      <Pagination :page="page" :total-pages="characters?.totalPages" @page-change="onPageChange" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from 'vue'
import CharactersList from '../components/CharactersList.vue'
import Pagination from '../components/Pagination.vue'
import { CharacterService } from '../../application/characters/CharacterService'

export default defineComponent({
  components: { CharactersList, Pagination },
  setup() {
    const characterService = new CharacterService()

    const page = ref(1)
    const search = ref('')
    const status = ref('')

    const {
      data: characters,
      isLoading,
      isError,
      error,
      refetch,
    } = characterService.getCharacters(page, search, status)

    watch([search, status], () => {
      page.value = 1
    })

    const onPageChange = (newPage: number) => {
      page.value = newPage
      refetch()
    }

    return {
      page,
      search,
      status,
      characters,
      isLoading,
      isError,
      error,
      onPageChange,
      refetch,
    }
  },
})
</script>

<style>
input,
select {
  margin: 10px 10px;
  padding: 10px;
  font-size: 16px;
  width: 400px;
}
.filter-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid black;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loader-container {
  display: flex;
  justify-content: center;
  height: 400px;
}
.error-container {
  display: flex;
  justify-content: center;
  img {
    width: 400px;
    height: auto;
  }
}
</style>
