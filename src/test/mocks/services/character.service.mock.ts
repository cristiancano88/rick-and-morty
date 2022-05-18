import { of } from 'rxjs';
import { characterMock } from '../models/character.mock';

export const CharacterServiceMock = () => ({
    getAllCharacters: () => of([characterMock]),
    getCharacterById: () => of(characterMock)
});