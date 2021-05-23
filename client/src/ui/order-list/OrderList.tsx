import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { EStoreTable } from "../estore-table/EStoreTable";
import { getUniqueId } from "../../utils/uniqueId";
import { ProductMiniature, ProductMiniatureProps } from "../product-miniature/ProductMiniature";
import { fetchProduct } from "../../network/fetchProduct";
import { TableProps } from "../estore-table/TableProps";
import { LoadingLayout } from "../loading-layout/LoadingLayout";
import { getNavigationLinkTo } from "../../utils/getNavigationLinkTo";

export const OrderList: React.FC = () => {
  const orderListState = useTypedSelector((state) => state.orderList);
  const { orders, message } = orderListState;
  const [loading, setLoading] = useState(orderListState.loading);
  const [body, setBody] = useState<TableProps["body"]>();
  useEffect(() => {
    let componentIsMounted = true;
    Promise.all(
      orders.map(async (order) => {
        const productMiniatures = await Promise.all(
          order.products.map(async ({ productId, count }) => {
            const product = await fetchProduct(productId);
            const curMiniature: ProductMiniatureProps = {
              desc: product.desc,
              icon: product.imgSrc,
              name: product.name,
            };
            return (
              <div key={getUniqueId()}>
                <div className="orderProduct">
                  <ProductMiniature {...curMiniature} />
                </div>
                <div className="orderProductCount">
                  <span>Штук: {count}</span>
                </div>
              </div>
            );
          })
        );
        return [
          <div key={getUniqueId()}>{order.date}</div>,
          <div key={getUniqueId()}>{order.orderStatus}</div>,
          <div key={getUniqueId()}>{productMiniatures}</div>,
          <div key={getUniqueId()}>${order.total}</div>,
        ];
      })
    ).then((result) => {
      if (componentIsMounted) {
        setLoading(true);
        setBody(result);
        setLoading(false);
      }
    });
    return () => {
      componentIsMounted = false;
    };
  }, [orders]);

  if (message.error) {
    return <div>{message.text}</div>;
  }

  const header = ["дата", "статус заказа", "продукты в составе", "итого"].map(
    (text): JSX.Element => <div key={getUniqueId()}>{text}</div>
  );

  return (
    <LoadingLayout isActive={loading}>
      {body && body.length > 0 ? (
        <EStoreTable body={[header, ...body]} />
      ) : (
        <div>
          <Link to={getNavigationLinkTo("PAGE_PRODUCT-CATALOGUE")}>Скорее приобретите что-нибудь!</Link>
        </div>
      )}
    </LoadingLayout>
  );
};
