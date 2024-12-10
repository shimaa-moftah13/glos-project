import useWishlist from "@hooks/useWishlist";
import { GridList } from "@components/common";
import { Product } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import { TProduct } from "@types";


const Wishlist = () => {
  const { loading, error, records } = useWishlist();
  console.log("Wishlist Records:", records);
  return (
    <>


        <h2 className="text-center p-5">Your WishList</h2>

      <Loading status={loading} error={error} type="product">
        <GridList<TProduct>
          emptyMessage="Your wishlist is empty"
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};

export default Wishlist;
