import { createSelector } from "@reduxjs/toolkit";

export const getGoods = state => state.goods.items;
export const getFilter = state => state.filter;
export const getError = state => state.goods.error;
export const getIsLoading = state => state.goods.isLoading;
export const getActiveCategory = state => state.activeCategory;

export const filteredGoods = createSelector(
  [getGoods, getFilter],
  (goods, filter) => {
    return goods.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const getGoodsByActiveCategory = createSelector(
  [getGoods, getActiveCategory],
  (goods, activeCategory) => {
    if (activeCategory) {
      return goods.filter(item => item.category === activeCategory);
    }
    return goods;
  }
);
