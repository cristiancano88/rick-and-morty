import { of } from 'rxjs';
import { locationMock } from './../models/location.mock';

export const LocationServiceMock = () => ({
    getAllLocation: () => of([locationMock]),
    getLocationById: () => of(locationMock)
});