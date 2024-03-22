import axios, { AxiosResponse } from "axios";

export const get = async <T>(endpoint: string): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.get(endpoint);
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Error en la solicitud");
  }
};
