interface BidPropTypes {
    minimumBid: number | null;
    maximumBid: number | null;
}

export interface FilterRangePropTypes {
    id: string;
    initialValue?: BidPropTypes;
    saveFilter: ({ minimumBid, maximumBid }: BidPropTypes) => void;
}
