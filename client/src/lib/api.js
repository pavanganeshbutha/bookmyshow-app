import axios from "axios";

export async function fetchMovies() {
  const res = await axios.get("http://localhost:3000/api/v1/movies");
  return res.data;
}
