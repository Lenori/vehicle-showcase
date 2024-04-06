import { CarPropType } from 'types/cars.types';

export default function randomCarSlicer(
    array: CarPropType[],
    length: number,
): CarPropType[] {
    const randomizedArray = array.sort(() => Math.random() - 0.5);

    return randomizedArray.slice(0, length);
}
