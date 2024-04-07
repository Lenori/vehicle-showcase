import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useFilters } from 'context/FiltersContext';

import filterUrlBuilder from 'utils/filterUrlBuilder';

import * as S from './ListControls.styles';

export default function ListControls() {
    const filters = useFilters();
    const navigate = useNavigate();

    const itemsOptions = [
        { name: 5, value: 5 },
        { name: 10, value: 10 },
        { name: 15, value: 15 },
        { name: 20, value: 20 },
    ];

    const orderOptions = [
        { name: 'Starting bid', value: 'startingBid' },
        { name: 'Make', value: 'make' },
        { name: 'Mileage', value: 'mileage' },
        { name: 'Auction date', value: 'auctionDateTime' },
    ];

    useEffect(() => {
        navigate(
            filterUrlBuilder({
                base: 'showcase',
                filters: filters.data,
            }),
        );
    }, [filters.data]);

    return (
        <S.MainContainer>
            <S.PaginationControl>
                <p>Items per page:</p>

                <select
                    id="items-per-page"
                    onChange={(e) =>
                        filters.setFilters({
                            ...filters.data,
                            itemsPerPage: Number(e.target.value),
                        })
                    }
                    defaultValue={filters.data.itemsPerPage}
                >
                    {itemsOptions.map((item) => (
                        <option value={item.value} key={item.value}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </S.PaginationControl>

            <S.OrderControl>
                <p>Order by:</p>

                <select
                    id="order-by"
                    onChange={(e) =>
                        filters.setFilters({
                            ...filters.data,
                            orderBy: e.target.value,
                        })
                    }
                    defaultValue={filters.data.orderBy}
                >
                    {orderOptions.map((item) => (
                        <option value={item.value} key={item.value}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </S.OrderControl>
        </S.MainContainer>
    );
}
