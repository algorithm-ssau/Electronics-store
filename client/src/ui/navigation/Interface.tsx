enum PageType {
  SHOPPING_CART,
  USER_CABINET,
  PRODUCT_CATALOGUE,
  OTHER
}

export interface INavigation {
  activePage: PageType
}