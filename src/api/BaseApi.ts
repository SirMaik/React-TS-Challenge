import type { Headers, Params } from "./type";

async function http(
  url: string,
  params?: Params,
  init?: RequestInit
): Promise<Response> {
  url = appendParams(url, params);

  const request = new Request(url, init);
  const response = await fetch(request);

  if (!response.ok) {
    throw new Error(`Error: ${response.status}: ${response.statusText}`);
  }

  return response;
}

function appendParams(path: string, params?: Params): string {
  if (!params) {
    return path;
  }

  return `${path}?${new URLSearchParams(params).toString()}`;
}

export async function get(
  url: string,
  params?: Params,
  headers?: Headers
): Promise<Response> {
  const init = { method: "GET", headers };
  return await http(url, params, init);
}
