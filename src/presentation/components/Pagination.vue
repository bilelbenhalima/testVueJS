<template>
  <div class="pagination">
    <button :disabled="page === 1" @click="goToPage(page - 1)">Previous</button>
    <span>Page {{ page }} of {{ totalPages }}</span>
    <button :disabled="page === totalPages" @click="goToPage(page + 1)">Next</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    page: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  methods: {
    goToPage(newPage: number) {
      this.$emit('page-change', newPage)
    },
  },
})
</script>

<style>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  button {
    padding: 10px 15px;
    margin: 0 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  span {
    font-size: 18px;
  }
}
</style>
