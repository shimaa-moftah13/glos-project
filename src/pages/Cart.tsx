import useCart from "@hooks/useCart";
import { Loading, LottieHandler } from "@components/feedback";
import { CartItemList, CartSubtotalPrice } from "@components/eCommerce";
import bunner from "@assets/pexels-mikhail-nilov-6609239 (1).jpg";

import styles from "@components/eCommerce/CartItem/styles.module.css";

const Cart = () => {
  const {
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
  } = useCart();

  return (
    <>
<div className={styles.bannerContainer}>
<div className={styles.banner}>
        <img src={bunner} alt="" />
        <h2>Your Shopping Bag</h2>
      </div>

    <table className={styles.cartTable}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Details</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
      </table>
</div>

      <Loading status={loading} error={Array.isArray(error) ? error.join(", ") : error || null} type="cart">
        {products.length ? (
          <>
            <CartItemList
              products={products}
              changeQuantityHandler={changeQuantityHandler}
              removeItemHandler={removeItemHandler}
              viewDetailsHandler={viewDetailsHandler} // Pass the handler
              showModal={showModal} // Modal state
              closeModalHandler={closeModalHandler} // Close handler
              selectedProduct={selectedProduct} //
            />
            <CartSubtotalPrice
              products={products}
              userAccessToken={userAccessToken}
              
            />
          </>
        ) : placeOrderStatus === "succeeded" ? (
          <LottieHandler
            message="Your order has been placed successfully"
            type="success"
          />
        ) : (
          <LottieHandler message="Your cart is empty" type="empty" />
        )}
      </Loading>
    </>
  );
};

export default Cart;





