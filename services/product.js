import axios from "axios";

export async function getDataBankProduct() {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/admin/product/bankProduct`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getDataSellProduct() {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/admin/product/sellProduct`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function setProductToSell(id) {
  try {
    const { data } = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/admin/product/bankProduct/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function createDataProduct(formData) {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/admin/product`,
      formData,
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

export async function updateDataProduct(formData, id) {
  try {
    const { data } = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/admin/product/${id}`,
      formData,
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

export async function deleteProduct(id) {
  try {
    const { data } = await axios.delete(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/admin/product/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}
