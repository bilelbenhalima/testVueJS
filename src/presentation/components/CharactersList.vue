<template>
  <div class="character-list-container">
    <div
      v-for="character in characters"
      :key="character.id"
      class="character-item"
      @click="navigateToCharacter(character.id)"
    >
      <img :src="character.image" :alt="character.name" />
      <div class="character-item-details">
        <b>{{ character.name }}</b>
        <span
          :class="`character-item-status-${character.status}`"
          style="position: absolute; top: 5px; right: 5px"
          >{{ character.status }}</span
        >
        <div style="font-size: small; margin-top: 5px">Location :</div>
        <b style="font-size: small">{{ character.location.name }}</b>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

interface Character {
  id: number
  name: string
  image: string
}

export default defineComponent({
  props: {
    characters: {
      type: Array as () => Character[],
    },
  },
  setup(props) {
    const router = useRouter()

    const navigateToCharacter = (characterId: number) => {
      router.push({
        path: `/characters/${characterId}`,
      })
    }

    return { navigateToCharacter }
  },
})
</script>

<style>
.character-list-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 2em;
  grid-auto-rows: minmax(100px, auto);
  padding: 2em;
}
.character-item-status-Alive {
  background-color: green;
  padding: 2px;
  border-radius: 2px;
  width: 70px;
  text-align: center;
  color: white;
}
.character-item-status-Dead {
  background-color: red;
  padding: 2px;
  border-radius: 2px;
  width: 70px;
  text-align: center;
  color: white;
}
.character-item-status-unknown {
  background-color: grey;
  padding: 2px;
  border-radius: 2px;
  width: 70px;
  text-align: center;
  color: white;
}

.character-item {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  justify-content: center;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
    margin-right: 10px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  h3 {
    font-size: 18px;
  }
}
.character-item:hover {
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
}
.character-item-details {
  padding: 5px;
  height: 60px;
}
</style>
