import styles from "./styles.module.css";

type ProductInfoProps = {
  title?: string;
  img?: string;
  price: number;
  quantity?: number;
  direction?: "row" | "column";
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const ProductInfo = ({
  title,
  img,
  price,
  quantity,
  children,
  style,
}: ProductInfoProps) => {
  return (
    <div className={styles.product} style={style}>
      <div className={styles.productImg}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.productInfo}>
        <h2 title={title}>{title}</h2>
        <h3>Price: {price} EGP</h3>
        {quantity && <h3>Total Quantity: {quantity}</h3>}
        {quantity && <h3>Price Total:  {(quantity * price).toFixed(2)}</h3>}

        {children}
      </div>
    </div>
  );
};

export default ProductInfo;
