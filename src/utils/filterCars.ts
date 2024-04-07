import { FiltersPropType } from 'types/filters.types';
import { CarPropType } from 'types/cars.types';

interface FilterCarsPropTypes {
    filters: FiltersPropType;
    cars: CarPropType[];
}

interface SortByPropTypes {
    data: CarPropType[];
    property: string;
}

function sortBy({ data, property }: SortByPropTypes) {
    return data.sort((a, b) => {
        const aVal = a[property];
        const bVal = b[property];

        return aVal === bVal ? 0 : aVal < bVal ? -1 : 1;
    });
}

export default function filterCars({
    filters,
    cars,
}: FilterCarsPropTypes): CarPropType[] {
    let carsArray: CarPropType[] = cars;

    if (filters.make) {
        carsArray = carsArray.filter((car) => car.make == filters.make);
    }

    if (filters.model) {
        carsArray = carsArray.filter((car) => car.model == filters.model);
    }

    if (filters.favourites) {
        carsArray = carsArray.filter((car) => car.favourite == true);
    }

    if (filters.minimumBid) {
        carsArray = carsArray.filter(
            (car) => car.startingBid >= filters.minimumBid,
        );
    }

    if (filters.maximumBid) {
        carsArray = carsArray.filter(
            (car) => car.startingBid <= filters.maximumBid,
        );
    }

    carsArray = sortBy({
        data: carsArray,
        property: filters.orderBy,
    });

    return carsArray;
}
