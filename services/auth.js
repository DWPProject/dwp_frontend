import axios from "axios";

export async function login(formData) {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/user/auth/login`,
      formData
    );
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function register(formData) {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/user/auth/register`,
      formData
    );
    return data;
  } catch (err) {
    console.log(err);
  }
}
