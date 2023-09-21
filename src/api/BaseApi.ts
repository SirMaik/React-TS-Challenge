import type { Headers, Params } from "./type";

async function http<T>(
  url: string,
  params?: Params,
  init?: RequestInit
): Promise<T> {
  url = appendParams(url, params);

  const request = new Request(url, init);
  const response = await fetch(request);

  if (!response.ok) {
    throw new Error(`Error: ${response.status}: ${response.statusText}`);
  }

  return await response.json();
}

function appendParams(path: string, params?: Params): string {
  if (!params) {
    return path;
  }

  return `${path}?${new URLSearchParams(params).toString()}`;
}

export async function get<T>(
  url: string,
  params?: Params,
  headers?: Headers
): Promise<T> {
  const init = { method: "GET", headers };
  return await http<T>(url, params, init);
}

export async function post<T, U>(
  url: string,
  body: U,
  params?: Params,
  headers?: Headers
): Promise<T> {
  const init = { method: "POST", headers, body: JSON.stringify(body) };
  return await http<T>(url, params, init);
}

export async function patch<T, U>(
  url: string,
  body: U,
  params?: Params,
  headers?: Headers
): Promise<T> {
  const init = { method: "PATCH", headers, body: JSON.stringify(body) };
  return await http<T>(url, params, init);
}
