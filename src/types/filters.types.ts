export interface FiltersPropType {
    make: null | string;
    model: null | string;
    minimumBid: null | number;
    maximumBid: null | number;
    favourites: boolean;
    itemsPerPage: null | number;
    page: null | number;
    orderBy: null | string;
}

export interface BrandsPropType {
    make: string;
    models: string[];
}
