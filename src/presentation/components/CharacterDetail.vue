<template>
  <div class="character-card">
    <div class="header">
      <img :src="character.image" :alt="character.name" class="avatar" />
      <div>
        <h1>{{ character.name }}</h1>
        <p class="status">
          <span :class="statusClass">{{ character.status }}</span> - {{ character.species }}
        </p>
      </div>
    </div>

    <div class="info">
      <p><strong>Gender:</strong> {{ character.gender }}</p>
      <p><strong>Type:</strong> {{ character.type || 'N/A' }}</p>
      <p>
        <strong>Origin:</strong>

        {{ character.origin.name }}
      </p>
      <p>
        <strong>Location:</strong>

        {{ character.location.name }}
      </p>
    </div>

    <div class="episodes">
      <h2>Episodes</h2>
      <div class="episodes-list-container">
        <div v-for="(episode, index) in character.episode" :key="index">
          <div>
            <a :href="episode" target="_blank"> Episode {{ index + 1 }} </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterDetail',
  props: {
    character: {
      type: Object,
      required: true,
    },
  },

  computed: {
    statusClass() {
      return (
        {
          Alive: 'status-alive',
          Dead: 'status-dead',
          unknown: 'status-unknown',
        }[this.character.status] || 'status-unknown'
      )
    },
  },
}
</script>

<style scoped>
.episodes-list-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); /* see notes below */
  grid-gap: 1em;
}
.character-card {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #f9f9f9;
  font-family: Arial, sans-serif;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #ddd;
}

h1 {
  font-size: 1.5rem;
  margin: 0;
}

.status {
  margin: 5px 0 0;
  font-size: 0.9rem;
}

.info {
  margin-bottom: 20px;
}

.info p {
  margin: 5px 0;
}

.episodes {
  margin-top: 20px;
}

.episodes h2 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}


.episodes a {
  color: #007bff;
  text-decoration: none;
}

.episodes a:hover {
  text-decoration: underline;
}

.status-alive {
  color: green;
  font-weight: bold;
}

.status-dead {
  color: red;
  font-weight: bold;
}

.status-unknown {
  color: gray;
  font-weight: bold;
}
</style>
