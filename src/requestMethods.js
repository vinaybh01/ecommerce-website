import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODdmYmRkMDk5OTg5MTVkNDQ5YjlmMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NzAwMzU4NiwiZXhwIjoxNjg3MjYyNzg2fQ.__c91LZbtzQ6pi9iSSAE8nztG69MSldqfV1iVAfUY-E";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
