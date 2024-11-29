import { useCharactersQuery } from './useCases/useCharactersQuery'
import { useCharacterDetailsQuery } from './useCases/useCharacterDetailsQuery'
import type { Ref } from 'vue'

export class CharacterService {
  getCharacters(page: Ref<number>, search: Ref<string>, status: Ref<string>) {
    return useCharactersQuery(page, search, status)
  }

  getCharacterDetails(id: number) {
    return useCharacterDetailsQuery(id)
  }
}
