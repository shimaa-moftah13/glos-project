// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { axiosErrorHandler } from "@utils";

// const actLikeToggle = createAsyncThunk(
//   "wishlist/actLikeToggle",
//   async (id: number, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     try {
//       const isRecordExist = await axios.get(
//         `/wishlist?userId=1&productId=${id}`
//       );

//       if (isRecordExist.data.length > 0) {
//         await axios.delete(`/wishlist/${isRecordExist.data[0].id}`);
//         return { type: "remove", id };
//       } else {
//         await axios.post("/wishlist", { userId: 1, productId: id });
//         return { type: "add", id };
//       }
//     } catch (error) {
//       return rejectWithValue(axiosErrorHandler(error));
//     }
//   }
// );

// export default actLikeToggle;






import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosErrorHandler } from "@utils";
import { RootState } from "@store/index";

const actLikeToggle = createAsyncThunk(
  "wishlist/actLikeToggle",
  async (id: number, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { auth } = getState() as RootState;

    if (!auth.user?.id) {
      return rejectWithValue("User not authenticated");
    }

    try {
      const isRecordExist = await axios.get(
        `/wishlist?userId=${auth.user.id}&productId=${id}`
      );

      if (isRecordExist.data.length > 0) {
        await axios.delete(`/wishlist/${isRecordExist.data[0].id}`);
        return { type: "remove", id };
      } else {
        await axios.post("/wishlist", { userId: auth.user.id, productId: id });
        return { type: "add", id };
      }
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actLikeToggle;
