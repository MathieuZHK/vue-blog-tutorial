class HttpClient {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return await response.json();
  }

  async post<T>(
    url: string,
    requestBody: Record<string, any> | Array<Record<string, any>>
  ): Promise<T> {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(requestBody),
    });

    return await response.json();
  }

  async delete<T>(url: string): Promise<T> {
    const response = await fetch(url, { method: "DELETE" });
    return await response.json();
  }
}

export const httpClient = new HttpClient();
