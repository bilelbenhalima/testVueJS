import { Episode } from './Episode'

export interface EpisodeRepository {
  getEpisodeById(id: number): Promise<Episode>
}
