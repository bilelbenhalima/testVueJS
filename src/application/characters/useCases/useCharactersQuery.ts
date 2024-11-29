import { useQuery } from '@tanstack/vue-query'
import { CharacterRepositoryImpl } from '../../../infrastructure/repositories/CharacterRepositoryImpl'
import type { Ref } from 'vue'

const repository = new CharacterRepositoryImpl()

export const useCharactersQuery = (page: Ref<number>, search: Ref<string>, status: Ref<string>) => {
  return useQuery({
    queryKey: ['characters', page, search, status],
    queryFn: () => repository.getCharacters(page.value, search.value, status.value),
    staleTime: 5000,
  })
}
