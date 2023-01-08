import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
   [selectShop],
   (shop) => shop.collections
);

export const selectArrayShopData = createSelector(
   [selectShopData],
   (collections) => (collections ? Object.values(collections) : [])
);

export const selectCollections = createSelector(
   [selectShopData],
   (shop) => shop.collections
);
