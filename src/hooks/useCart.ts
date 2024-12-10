// import { Product } from '@components/eCommerce';
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByItems,
  cartItemChangeQuantity,
  cartItemRemove,
  cleanCartProductsFullInfo,
} from "@store/cart/cartSlice";
import { resetOrderStatus } from "@store/orders/ordersSlice";
import { TProduct } from "@types";

const useCart = () => {
  const dispatch = useAppDispatch();

  const { items, productsFullInfo, loading, error = [] } = useAppSelector(
    (state) => state.cart
  );
  const [showModal, setShowModal] = useState(false); 
  const [selectedProduct, setSelectedProduct] = useState<TProduct[]>([]);

  const viewDetailsHandler = (id: number) => {

    const product = productsFullInfo.find((product) => product.id === id);
    if (!product) {
      console.error(`No product found with id: ${id}`);
      return;
    }

    // const newItems = product?.items ?? [];
    setShowModal(true);
    setSelectedProduct([product]);
  };

  const closeModalHandler = () => {
    setShowModal(false);
    setSelectedProduct([]);
  };

  useEffect(() => {
    const promise = dispatch(actGetProductsByItems());

    return () => {
      promise.abort();
      dispatch(resetOrderStatus());
    };
  }, [dispatch]);

  const userAccessToken = useAppSelector((state) => state.auth.accessToken);

  const placeOrderStatus = useAppSelector((state) => state.orders.loading);

  const changeQuantityHandler = useCallback(
    (id: number, quantity: number) => {
      dispatch(cartItemChangeQuantity({ id, quantity }));
    },
    [dispatch]
  );

  const removeItemHandler = useCallback(
    (id: number) => {
      dispatch(cartItemRemove(id));
    },
    [dispatch]
  );

  const products = productsFullInfo.map((el) => ({
    ...el,
    quantity: items[el.id],
  }));

  useEffect(() => {
    const promise = dispatch(actGetProductsByItems());

    return () => {
      promise.abort();
      dispatch(cleanCartProductsFullInfo());
      dispatch(resetOrderStatus());
    };
  }, [dispatch]);

  return {
    loading,
    error,
    products,
    userAccessToken,
    placeOrderStatus,
    changeQuantityHandler,
    removeItemHandler,
    showModal,
    selectedProduct,
    viewDetailsHandler,
    closeModalHandler,
  };
};

export default useCart;
