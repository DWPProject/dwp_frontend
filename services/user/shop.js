import { headers } from "@/next.config";
import axios from "axios";

export async function getSellProduct() {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/user/shop`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function addProductToCart(user_id, product_id, note, quantity) {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/user/shop`,
      {
        user_id: user_id,
        product_id: product_id,
        note: note,
        quantity: quantity,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCartItem(userId) {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/user/shop/getCart`,
      {
        user_id: userId,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function orderProduk(user_id, purchase, address, foto) {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/user/shop/cart`,
      {
        userId: user_id,
        purchase: purchase,
        address: address,
        foto: foto,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteCartItem(id) {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/user/shop/deleteCart`,
      {
        id: id,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}
