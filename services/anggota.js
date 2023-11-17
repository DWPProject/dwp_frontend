import axios from "axios";

export async function getDataAnggota() {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/admin/anggota`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function createDataAnggota(formData) {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/admin/anggota`,
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

export async function updateDataAnggota(formData, id) {
  try {
    const { data } = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/admin/anggota/${id}`,
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

export async function deleteDataAnggota(id) {
  try {
    const { data } = await axios.delete(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/admin/anggota/${id}`,
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
