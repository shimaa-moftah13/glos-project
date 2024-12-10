import useOrders from "@hooks/useOrders";
import { Loading } from "@components/feedback";
import { Heading } from "@components/common";
import { ProductInfo } from "@components/eCommerce";
import { Modal } from "react-bootstrap";

import styles from "./styles.module.css"

const Orders = () => {
  const {
    loading,
    error,
    orderList,
    showModal,
    selectedProduct,
    viewDetailsHandler,
    closeModalHandler,
  } = useOrders();

  return (
    <>
      <Modal show={showModal} onHide={closeModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title >Products Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct.map((el) => (
            <ProductInfo
            key={el.id}
            title={el.title}
            img={el.img}
            price={el.price}
            quantity={el.quantity}
            direction="column"
            style={{ marginBottom: "10px" }}
          />
           
       
        //    <ProductInfo
        //    key={el.id}
        //    title={el.title}
        //    img={el.img}
        //    price={el.price}
        //    quantity={el.quantity}
        //    direction="column"
        //    style={{ marginBottom: "10px" }}
        //  />
          ))}
        </Modal.Body>
      </Modal>

      <Heading title="My Order" />
      <Loading status={loading} error={error} type="table">

        <table className={styles.userTable}>
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Number of items</th>
                    <th>Your Paid</th>
                    <th>Order Details</th>
                </tr>
            </thead>
            <tbody>
                {orderList.map((el) => (
                    <tr key={el.id}>
                        <td className={styles.userInfo}>
                           
                            <div>
                                <p className={styles.userName}>  {el.id}</p>
                               
                            </div>
                        </td>
                        <td>
                        {el.items.length} item(s)</td>
                        <td>{el.subtotal.toFixed(2)} EGP</td>
                        <td>
                            <div>
                            <button className={styles.viewButton}
                            onClick={() => viewDetailsHandler(el.id)}>
                              View &gt;</button>
                                
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </Loading>
    </>
  );
};

export default Orders;
