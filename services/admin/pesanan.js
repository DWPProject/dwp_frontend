import axios from "axios";

export async function getPesanan() {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/admin/order`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function aprovePesanan(id) {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/admin/order/aprove`,
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

export async function rejectPesanan(id) {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/admin/order/decline`,
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
