import { useQuery } from '@tanstack/vue-query'
import { CharacterRepositoryImpl } from '../../../infrastructure/repositories/CharacterRepositoryImpl'

const repository = new CharacterRepositoryImpl()

export const useCharacterDetailsQuery = (id: number) => {
  return useQuery({
    queryKey: ['character', id],
    queryFn: () => repository.getCharacterById(id),
    staleTime: 5000,
  })
}
