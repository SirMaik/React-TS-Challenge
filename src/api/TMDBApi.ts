import type { Headers, Params } from "./type";
import * as BaseAPI from "./BaseApi";

const baseUrl = "https://api.themoviedb.org/3";
const token = process.env.TMDB_TOKEN;

function injectHeaders(headers?: Headers): Headers {
  return {
    ...headers,
    Authorization: `Bearer ${token}`,
    accept: "application/json"
  };
}

export async function get(
  path: string,
  params?: Params,
  headers?: Headers
): Promise<any> {
  const url = baseUrl + path;
  headers = injectHeaders(headers);
  const response = await BaseAPI.get(url, params, headers);

  return await response.json();
}
