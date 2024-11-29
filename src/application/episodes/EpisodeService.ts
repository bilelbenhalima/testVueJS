import { useEpisodeDetailsQuery } from './useCases/useEpisodeDetailsQuery'

export class EpisodeService {
  getEpisodeDetails(id: number) {
    return useEpisodeDetailsQuery(id)
  }
}
