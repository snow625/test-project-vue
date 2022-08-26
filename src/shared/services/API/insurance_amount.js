import axios from "axios";

export const instance = axios.create({
  baseURL: "https://ecom-proxy.codot.pro/api/v1/widgets/get_tariff_test",
});

export const getInsurancePayment = async (value) => {
  const dataToSend = { value: { insurance_amount: `${value}` } };
  const { data } = await instance.post("/", dataToSend);
  return data;
};
