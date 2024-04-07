export interface FilterSelectorPropTypes {
    id: string;
    placeholder: string;
    data: string[];
    initialValue?: string | null;
    saveFilter?: (value: string | null) => void;
}
