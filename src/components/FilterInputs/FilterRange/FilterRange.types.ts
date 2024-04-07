interface BidPropTypes {
    minimumBid: number | null;
    maximumBid: number | null;
}

export interface FilterRangePropTypes {
    initialValue?: BidPropTypes;
    saveFilter: ({ minimumBid, maximumBid }: BidPropTypes) => void;
}
