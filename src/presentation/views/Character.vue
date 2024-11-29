<template>
  <div>
    <div class="btn-go-back" @click="goBack">
      <div class="arrow left"></div>
    </div>

    <div v-if="isLoading">Loading...</div>
    <div v-if="isError">Error: {{ error.message }}</div>

    <div v-if="data">
      <CharacterDetail :character="data" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import CharacterDetail from '../components/CharacterDetail.vue'
import { CharacterService } from '../../application/characters/CharacterService'

export default defineComponent({
  components: { CharacterDetail },

  setup() {
    const characterService = new CharacterService()

    const route = useRoute()
    const router = useRouter()
    const id = Number(route.params.id)

    const { data, isLoading, isError, error } = characterService.getCharacterDetails(id)

    const goBack = () => {
      router.push('/characters')
    }

    return { data, isLoading, isError, error, goBack }
  },
})
</script>
<style>
.btn-go-back {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}
</style>
