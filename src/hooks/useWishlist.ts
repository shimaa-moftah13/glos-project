// import { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "@store/hooks";
// import {
//   actGetWishlist,
//   cleanWishlistProductsFullInfo,
// } from "@store/wishlist/wishlistSlice";

// const useWishlist = () => {
//   const dispatch = useAppDispatch();

//   const { loading, error, productsFullInfo } = useAppSelector(
//     (state) => state.wishlist
//   );
//   const cartItems = useAppSelector((state) => state.cart.items);

//   useEffect(() => {
//     const promise = dispatch(actGetWishlist("productsFullInfo"));
//     return () => {
//       promise.abort();
//       dispatch(cleanWishlistProductsFullInfo());
//     };
//   }, [dispatch]);

//   const records = productsFullInfo.map((el) => ({
//     ...el,
//     quantity: cartItems[el.id],
//     isLiked: true,
//     isAuthenticated: true,
//   }));

//   return { records, loading, error };
// };

// export default useWishlist;




import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetWishlist,
  cleanWishlistProductsFullInfo,
} from "@store/wishlist/wishlistSlice";

const useWishlist = () => {
  const dispatch = useAppDispatch();

  // Selectors
  const { loading, error, productsFullInfo } = useAppSelector(
    (state) => state.wishlist
  );
  const cartItems = useAppSelector((state) => state.cart.items);

  // Fetch wishlist data
  useEffect(() => {
    const promise = dispatch(actGetWishlist("productsFullInfo"));

    return () => {
      promise.abort(); // Abort the API call on unmount
      dispatch(cleanWishlistProductsFullInfo()); // Clear the wishlist info
    };
  }, [dispatch]);

  // Map products to include additional info
  const records = productsFullInfo.map((product) => ({
    ...product,
    quantity: cartItems[product.id] || 0, // Default to 0 if not in cart
    isLiked: true,
    isAuthenticated: true,
  }));

  return { records, loading, error };
};

export default useWishlist;
