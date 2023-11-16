import axios from "axios";

export async function getDataKonten() {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/admin/konten`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function createKonten(formData) {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/admin/konten`,
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

export async function updateDataKonten(formData, id) {
  try {
    const { data } = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/admin/konten/${id}`,
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

export async function deleteDataKonten(id) {
  try {
    const { data } = await axios.delete(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/admin/konten/${id}`,
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
