import { FiltersPropType } from 'types/filters.types';

interface FilterUrlBuilderPropTypes {
    base: string;
    filters: FiltersPropType;
}

interface UrlParamPropType {
    key: string;
    value: string;
}

export default function filterUrlBuilder({
    base,
    filters,
}: FilterUrlBuilderPropTypes): string {
    const params: UrlParamPropType[] = [];

    Object.entries(filters).map(([key, value]) => {
        params.push({ key, value });
    });

    const searchParams = new URLSearchParams();

    params.map((param) => {
        searchParams.append(param.key, param.value);
    });

    return `/${base}?${searchParams.toString()}`;
}
