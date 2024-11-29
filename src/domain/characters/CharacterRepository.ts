import { Character } from './Character'

export interface CharacterRepository {
  getCharacters(
    page: number,
    search: string,
    status: string,
  ): Promise<{ characters: Character[]; totalPages: number }>

  getCharacterById(id: number): Promise<Character>
}
