export interface FilterSelectorPropTypes {
    placeholder: string;
    data: string[];
    saveFilter?: (value: string | null) => void;
}
