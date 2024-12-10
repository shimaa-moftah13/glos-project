import { memo } from "react";
import { Form, Button } from "react-bootstrap";
import { TProduct } from "@types";

import { Modal } from "react-bootstrap";

import styles from "./styles.module.css";


type CartItemProps = TProduct & {
  changeQuantityHandler: (id: number, quantity: number) => void;
  removeItemHandler: (id: number) => void;
  showModal: boolean; 
  viewDetailsHandler: (id: number) => void;
  closeModalHandler: () => void;
};

const CartItem = memo(
  ({
    id,
    title,
    img,
    price,
    max,
    quantity,
    changeQuantityHandler,
    removeItemHandler,
    showModal,
    viewDetailsHandler,
    closeModalHandler,

  }: CartItemProps) => {
    // render option list
    const renderOptions = Array(max)
      .fill(0)
      .map((_, idx) => {
        const quantity = ++idx;
        return (
          <option value={quantity} key={quantity}>
            {quantity}
          </option>
        );
      });

    const changeQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const quantity = +event.target.value;
      changeQuantityHandler(id, quantity);
    };

    return (
      <>
      <Modal show={showModal} onHide={closeModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title >Products Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.modalTable}>
            <div className={styles.modalHead}>
              <h5>Title</h5>
              <h5>Price</h5>
              <h5>Quantity</h5>
              <h5>Total Price</h5>
            </div>

          
              <div>
                <p>{title}</p>
                <p>{price} EGP</p>
                <p>
                <div className={styles.quantityContainer}>
                    <span>Quantity</span>
                    <Form.Select value={quantity} 
                    onChange={changeQuantity}
                    className={styles.quantitySelect}>
                      {renderOptions}
                    </Form.Select>
                  </div>
                </p>
                <p className={styles.totalPrice}>
                {quantity && <p>{(quantity * price).toFixed(2)} EGP</p>}
                 </p>
               
              </div>
          </div>
                  <Button className={styles.removeButtonModal}
                    onClick={() => removeItemHandler(id)}
                  >
                    Remove
                  </Button>
   
  </Modal.Body>
      </Modal> 

      <div className={styles.cartContainer}>

          <table className={styles.cartTable}>
            <tbody>
              <tr>
                <td>
                  <img src={img} alt={title} className={styles.cartImage} />
                </td>
                <td>{title}</td>
                <td>{price} EGP</td>
                <td>
                  <div className={styles.quantityContainer}>
                    <span>Quantity</span>
                    <Form.Select value={quantity} 
                    onChange={changeQuantity}
                    className={styles.quantitySelect}>
                      {renderOptions}
                    </Form.Select>
                  </div>
                </td>
                <td className={styles.totalPrice}>
                  {quantity && <p>{(quantity * price).toFixed(2)} EGP</p>}
                </td>
                <td className={styles.removeButton}>
                  <Button
                    variant="secondary"
                    style={{ color: "white", width: "100px" }}
                    onClick={() => removeItemHandler(id)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>

          <div className={styles.productDetails}>
          <div className={styles.containerImageD}>
            <img src={img} alt={title} 
                 className={styles.cartImageD} />
                 <h5>{title}</h5>
            <button
              onClick={() => viewDetailsHandler(id)}>
                Product Details
            </button>

          </div>
          </div>

        </div>
      </>
    );
  }
);

export default CartItem;
