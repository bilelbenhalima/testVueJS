import { useQuery } from '@tanstack/vue-query'
import { EpisodeRepositoryImpl } from '../../../infrastructure/repositories/EpisodeRepositoryImpl'

const repository = new EpisodeRepositoryImpl()

export const useEpisodeDetailsQuery = (id: number) => {
  return useQuery({
    queryKey: ['episode', id],
    queryFn: () => repository.getEpisodeById(id),
    staleTime: 5000,
  })
}
