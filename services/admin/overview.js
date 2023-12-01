import axios from "axios";

export async function getOverviewAdmin(id) {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/admin/overview`,
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

export async function getPopulerProdukAdmin(id) {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/admin/overview/populer`,
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
