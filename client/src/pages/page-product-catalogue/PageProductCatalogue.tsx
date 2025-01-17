import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ProductList } from "../../ui/product-list/ProductList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchProducts } from "../../store/action-creators/productListActionCreator";
import { LoadingLayout } from "../../ui/loading-layout/LoadingLayout";

export const PageProductCatalogue: React.FC = () => {
  const { products, loading, message } = useTypedSelector((state) => state.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [filterText, setFilterText] = useState("");
  const [filterPriceMore, setFilterPriceMore] = useState("");
  const [filterPriceLess, setFilterPriceLess] = useState("");

  const [displayedProducts, setDisplayedProducts] = useState(products);
  useEffect(() => {
    if (filterPriceLess === "" && filterPriceMore === "" && filterText === "") {
      setDisplayedProducts(products);
      return;
    }

    let valueLess = Number.MAX_VALUE;

    if (filterPriceLess !== "") {
      valueLess = Number(filterPriceLess);
    }

    const filteredProducts = products
      .filter((product) => product.name.toLowerCase().includes(filterText.toLowerCase()))
      .filter((product) => product.price >= Number(filterPriceMore))
      .filter((product) => product.price <= valueLess);
    setDisplayedProducts(filteredProducts);
  }, [filterText, filterPriceLess, filterPriceMore, products]);

  const onChangeFilterText = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  const onChangeFilterPriceMore = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterPriceMore(e.target.value);
  };

  const onChangeFilterPriceLess = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterPriceLess(e.target.value);
  };

  if (message.error) {
    return <h1>{message.text}</h1>;
  }
  return (
    <>
      <div className="stringSearch">
        <input
          className="searchProduct"
          type="text"
          value={filterText}
          readOnly={loading}
          onChange={onChangeFilterText}
          placeholder="Название товара"
        />
        Цена: <span className="descriptionPrice">От</span>
        <input
          className="inputPrice"
          type="text"
          readOnly={loading}
          value={filterPriceMore}
          onChange={onChangeFilterPriceMore}
          placeholder="0"
        />
        <span className="descriptionPrice">До</span>
        <input
          className="inputPrice"
          type="text"
          readOnly={loading}
          value={filterPriceLess}
          onChange={onChangeFilterPriceLess}
          placeholder="∞"
        />
      </div>
      <div>
        <span className="catalogProducts">Каталог товаров</span>
        <LoadingLayout isActive={loading}>
          <ProductList products={displayedProducts} />
        </LoadingLayout>
      </div>
    </>
  );
};
