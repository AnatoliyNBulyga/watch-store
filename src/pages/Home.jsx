import React, { useCallback } from "react";
import { Categories, SortPopup, WatchBlock } from "../components";
import { useSelector, useDispatch } from 'react-redux';
import { fetchWatch } from '../redux/actions/watch';
import { addWatchToCart } from '../redux/actions/cart';

import { setCategory, setSortBy } from '../redux/actions/filters';
import Preload from '../components/Preload';

const categoryNames = ['Все', 'SE', 'Series 6', 'Series 5', 'Series 4', 'Series 3'];

const sortArray = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавиту', type: 'name', order: 'asc' }
];

export default function Home() {

    const dispatch = useDispatch();

    const { items, isLoaded } = useSelector((state) => state.watch);
    const { category, sortBy } = useSelector((state) => state.filters);
    const cartItems = useSelector(({ cart }) => cart.items);

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index))
        // eslint-disable-next-line
    }, []);

    const onClickAddWatch = (obj) => dispatch(addWatchToCart(obj));

    const onClickSortType = (type) => dispatch(setSortBy(type));

    React.useEffect(() => {
        dispatch(fetchWatch(category, sortBy));
        // eslint-disable-next-line
    }, [category, sortBy]);

    return (
        <div className="container">
            <div className="content__top">

                <Categories activeCategory={category} onClickCategory={onSelectCategory} items={categoryNames} />
                <SortPopup activeSortType={sortBy.type} sortItems={sortArray} onClickSortType={onClickSortType} />

            </div>
            <h2 className="content__title">{categoryNames[category]}</h2>
            <div className="content__items">


                {
                    isLoaded
                        ? items && items.map(((watchItem, i) => {
                            return (
                                <WatchBlock
                                    onClickAddWatch={onClickAddWatch}
                                    key={`${watchItem}_${i}`}
                                    addedCount={cartItems[watchItem.id] && cartItems[watchItem.id].items.length}
                                    {...watchItem} />
                            )
                        }))
                        : Array(12).fill(0).map((_, i) => <Preload key={i} />)

                }

            </div>
        </div>
    )
}