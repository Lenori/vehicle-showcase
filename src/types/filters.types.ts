export interface FiltersPropType {
    make: null | string;
    model: null | string;
    minimumBid: null | number;
    maximumBid: null | number;
    favourites: boolean;
}

export interface BrandsPropType {
    make: string;
    models: string[];
}
