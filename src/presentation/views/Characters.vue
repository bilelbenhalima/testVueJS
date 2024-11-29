<template>
  <div>
    <div class="filter-container">
      <input v-model="search" type="text" placeholder="Search characters..."  />
      <select v-model="status" >
        <option value="">All</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>

    <CharactersList :characters="characters?.characters" />
    <div v-if="isLoading" >
      <Loder/>
    </div>
    <div v-if="isError" >
      <NoData/>
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
import Loder from '../components/Loder.vue'
import NoData from '../components/NoData.vue'

export default defineComponent({
  components: { CharactersList, Pagination, Loder,NoData },
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

</style>
