import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
})

const app = createApp(App)

app.use(router)
app.use(VueQueryPlugin, { queryClient })
app.mount('#app')
