import { CarPropType } from 'types/cars.types';

export interface CarPagePropTypes {
    car: CarPropType;
    toggleCarFavourite: () => void;
}
