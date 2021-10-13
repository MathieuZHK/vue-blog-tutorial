const getRequest = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  return await response.json();
};

const postRequest = async <T>(
  url: string,
  requestBody: Record<string, any> | Array<Record<string, any>>
): Promise<T> => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(requestBody),
  });

  return await response.json();
};

const deleteRequest = async <T>(url: string): Promise<T> => {
  const response = await fetch(url, {
    method: "DELETE",
  });
  return await response.json();
};

export const httpClient = {
  get: getRequest,
  post: postRequest,
  delete: deleteRequest,
};
