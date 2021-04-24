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

  const onChangeFilterText = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
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
      </div>
      <div>
        <ProductList products={displayedProducts} />
      </div>
    </>
  );
};
