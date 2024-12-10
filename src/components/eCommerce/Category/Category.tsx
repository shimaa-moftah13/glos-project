import { TCategory } from "@types";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
const { category, categoryImg, categoryTitle, firstImg, secondImg } = styles;

const Category = ({ number, title, img, img2, prefix }: TCategory) => {
  return (
    <div className={category}>
    <h4>{number}</h4>
    <Link to={`/categories/products/${prefix}`}>
      <div className={categoryImg}>
        <img src={img} alt={title} className={firstImg}/>
        <img src={img2} alt={title} className={secondImg}/>
      </div>
      <h4 className={categoryTitle}>{title}</h4>
    </Link>
  </div>
  );
};

export default Category;
