import type { EpisodeRepository } from '../../domain/episodes/EpisodeRepository'
import { Episode } from '../../domain/episodes/Episode'
import { api } from '../http/AxiosInstance'

export class EpisodeRepositoryImpl implements EpisodeRepository {
  async getCharacterById(id: number): Promise<Episode> {
    const response = await api.get(`episode/${id}`)
    const item = response.data

    return new Episode(item.id, item.name)
  }
}
