import { FiltersPropType } from 'types/filters.types';
import { CarPropType } from 'types/cars.types';

interface PaginateCarsPropTypes {
    filters: FiltersPropType;
    cars: CarPropType[];
}

interface SliceWithOffsetPropTypes {
    data: CarPropType[];
    itemsCount: number;
    offset: number;
}

function getSliceWithOffset({
    data,
    itemsCount,
    offset,
}: SliceWithOffsetPropTypes) {
    if (offset < 0) {
        offset = 0;
    } else if (offset >= data.length) {
        offset = data.length - itemsCount;
    }

    const endIndex = Math.min(offset + itemsCount, data.length);

    return data.slice(offset, endIndex);
}

export default function paginateCars({
    filters,
    cars,
}: PaginateCarsPropTypes): CarPropType[] {
    let carsArray: CarPropType[] = cars;

    carsArray = getSliceWithOffset({
        data: carsArray,
        itemsCount: filters.itemsPerPage,
        offset: (filters.page - 1) * filters.itemsPerPage,
    });

    return carsArray;
}
