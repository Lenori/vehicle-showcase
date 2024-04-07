export interface FilterSelectorPropTypes {
    placeholder: string;
    data: string[];
    initialValue?: string | null;
    saveFilter?: (value: string | null) => void;
}
