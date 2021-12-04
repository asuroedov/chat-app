import { AxiosError } from "axios";

export async function errorHandler<DataType>(fn: Function): Promise<[DataType | null, string | null]> {
  try {
    const { data } = await fn();
    return [data, null];
  } catch (axiosError) {
    const { response } = axiosError as AxiosError;
    return [null, response?.data?.message || "Не удалось получить ошибку"];
  }
}
