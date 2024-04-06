interface SaveFilterPropTypes {
    minimumBid: number | null;
    maximumBid: number | null;
}

export interface FilterRangePropTypes {
    saveFilter: ({ minimumBid, maximumBid }: SaveFilterPropTypes) => void;
}
