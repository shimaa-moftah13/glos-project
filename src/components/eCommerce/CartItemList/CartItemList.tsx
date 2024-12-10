import CartItem from "../CartItem/CartItem";
import { TProduct } from "@types";

type CartItemListProps = {
  products: TProduct[];
  changeQuantityHandler: (id: number, quantity: number) => void;
  removeItemHandler: (id: number) => void;
  viewDetailsHandler: (id: number) => void; 
  showModal: boolean; 
  closeModalHandler: () => void; 
  selectedProduct: TProduct[];
};

const CartItemList = ({
  products,
  changeQuantityHandler,
  removeItemHandler,
  viewDetailsHandler,
  showModal,
  closeModalHandler,


}: CartItemListProps) => {
  const renderList = products.map((el) => (
    <CartItem
      key={el.id}
      {...el}
      changeQuantityHandler={changeQuantityHandler}
      removeItemHandler={removeItemHandler}
      viewDetailsHandler={viewDetailsHandler}
      showModal={showModal}
      closeModalHandler={closeModalHandler}

    />
  ));

  return <div>{renderList}</div>;
};

export default CartItemList;
