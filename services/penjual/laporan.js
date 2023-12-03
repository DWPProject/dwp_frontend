import axios from "axios";

export async function getLaporanPenjual(id, start, end) {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/seller/report`,
      {
        id: id,
        start: start,
        end: end,
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
