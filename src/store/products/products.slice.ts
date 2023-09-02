import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "./products.type";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (category: string, thunkAPI) => {
    console.log(thunkAPI);
    try {
      let response;
      if (category) {
        //category가 있을 때
        response = await axios.get<IProduct[]>(
          `https://fakestoreapi.com/products/category/${category}`
        );
      } else {
        response = await axios.get<IProduct[]>(
          "https://fakestoreapi.com/products"
        );
      }
      console.log(11111, response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error loading products");
    }
  }
);

type ProductsType = {
  products: IProduct[];
  isLoading: boolean;
  error: string;
};

const initialState: ProductsType = {
  products: [],
  isLoading: false,
  error: "",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default productsSlice.reducer;
