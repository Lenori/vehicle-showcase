import { BrandsPropType } from 'types/filters.types';

interface BrandArrayBuilderPropTypes {
    brands: BrandsPropType[];
}

interface ModelArrayBuilderPropTypes {
    brands: BrandsPropType[];
    make: string | null;
}

export function brandArrayBuilder({
    brands,
}: BrandArrayBuilderPropTypes): string[] {
    const array: string[] = [];

    brands.map((brand) => {
        array.push(brand.make);
    });

    return array;
}

export function modelArrayBuilder({
    brands,
    make,
}: ModelArrayBuilderPropTypes): string[] {
    const array: string[] = [];

    brands.map((brand) => {
        if (make && brand.make == make) {
            brand.models.map((model) => {
                array.push(model);
            });
        } else if (!make) {
            brand.models.map((model) => {
                array.push(model);
            });
        }
    });

    return array;
}
