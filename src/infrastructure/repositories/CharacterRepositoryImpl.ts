import type { CharacterRepository } from '../../domain/characters/CharacterRepository'
import { Character } from '../../domain/characters/Character'
import { api } from '../http/AxiosInstance'

export class CharacterRepositoryImpl implements CharacterRepository {
  async getCharacters(
    page: number,
    search: string,
    status: string,
  ): Promise<{ characters: Character[]; totalPages: number }> {
    const response = await api.get('character', {
      params: {
        page,
        name: search || undefined,
        status,
      },
    })

    return {
      characters: response.data.results.map(
        (item: any) =>
          new Character(
            item.id,
            item.name,
            item.status,
            item.species,
            item.gender,
            item.origin,
            item.location,
            item.image,
          ),
      ),
      totalPages: response.data.info.pages,
    }
  }

  async getCharacterById(id: number): Promise<Character> {
    const response = await api.get(`character/${id}`)
    const item = response.data

    return new Character(
      item.id,
      item.name,
      item.status,
      item.species,
      item.gender,
      item.origin,
      item.location,
      item.image,
      item.episode,
    )
  }
}
