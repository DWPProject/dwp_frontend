import axios from "axios";

export async function createDataPenjual(formData) {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/admin/seller`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getDataPenjual() {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/admin/seller`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
}
