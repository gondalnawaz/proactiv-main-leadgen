import axios from "axios";

export const authorizePayment = async (paymentData) => {

  const axiosInstance = axios.create({
    auth: {
      username: process.env.NEXT_PUBLIC_WORLDPAY_USERNAME,
      password: process.env.NEXT_PUBLIC_WORLDPAY_PASSWORD,
    },
    headers: {
      "Content-Type": "application/vnd.worldpay.payments-v6+json",
      Accept: "application/vnd.worldpay.payments-v6+json",
    },
  });

  try {
    const response = await axiosInstance.post(
      process.env.NEXT_PUBLIC_WORLDPAY_ONETIME_URL,
      paymentData
    );
    return response.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};
