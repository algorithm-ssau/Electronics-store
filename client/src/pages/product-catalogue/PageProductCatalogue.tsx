import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ProductList } from "../../ui/product-list/ProductList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchProductList } from "../../store/action-creators/productListActionCreator";

export const PageProductCatalogue: React.FC = () => {
  const { products, error, loading } = useTypedSelector((state) => state.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductList());
  }, [dispatch]);

  const [filterText, setFilterText] = useState("");
  const [filterPriceMore, setFilterPriceMore] = useState("");
  const [filterPriceLess, setFilterPriceLess] = useState("");

  const [displayedProducts, setDisplayedProducts] = useState(products);
  useEffect(() => {
    if (filterText === "") {
      setDisplayedProducts(products);
      return;
    }
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(filterText.toLowerCase())
    );
    setDisplayedProducts(filteredProducts);
  }, [filterText, products]);

  useEffect(() => {
    if (filterPriceLess === "" && filterPriceMore === "") {
      setDisplayedProducts(products);
      return;
    }

    let valueLess = Number.MAX_VALUE;

    if (filterPriceLess !== "") {
      valueLess = Number(filterPriceLess);
    }

    const filteredProducts = products
      .filter((product) => product.price >= Number(filterPriceMore))
      .filter((product) => product.price <= valueLess);
    setDisplayedProducts(filteredProducts);
  }, [filterPriceLess, filterPriceMore, products]);

  const onChangeFilterText = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  const onChangeFilterPriceMore = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterPriceMore(e.target.value);
  };

  const onChangeFilterPriceLess = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterPriceLess(e.target.value);
  };

  if (loading) {
    return <h1>Загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <div>
        <p>TODO ЗНАЧОК_ПОИСКА</p>
        <p>Фильтр:</p>
        <input type="text" value={filterText} onChange={onChangeFilterText} placeholder="Фильтр" />
        <p>Ценовой фильтр</p>
        От <input type="text" value={filterPriceMore} onChange={onChangeFilterPriceMore} placeholder="0" />
        До <input type="text" value={filterPriceLess} onChange={onChangeFilterPriceLess} placeholder="∞" />
      </div>
      <div>
        <ProductList products={displayedProducts} />
      </div>
    </>
  );
};
