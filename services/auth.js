import axios from "axios";

export async function login(formData) {
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/user/auth/login`,
    formData
  );
  return data;
}

export async function register(formData) {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/user/auth/register`,
    formData
  );
  return response;
}
