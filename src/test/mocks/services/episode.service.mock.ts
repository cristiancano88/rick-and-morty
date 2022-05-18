import { of } from 'rxjs';
import { episodeMock } from '../models/episode.mock';

export const EpisodeServiceMock = () => ({
    getAllEpisodes: () => of([episodeMock]),
    getEpisodeById: () => of(episodeMock)
});