// Generic API function using fetch to fetch data and handle errors
export const fetchData = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(`https://staging-server.aitc.ai/api/v3/user${url}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
      next: {
        revalidate: 0,
      },
    });

    // // If the response is not OK (status code is not 200-299), throw an error
    if (!response.ok) {
      const errorMessage = `${response.status} ${response.statusText}`;

      throw new Error(errorMessage);
    }

    // Parse the response data
    const data: SuccessResponse<T> = (await response.json()) as SuccessResponse<T>;

    // Return the successful response
    return data?.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error?.message);
    }
    // Catch any network or parsing errors
    throw new Error('Something went wrong ho ki nayt');
  }
};

export const fetchPaginationData = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(`https://staging-server.aitc.ai/api/v3/user${url}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
      cache: 'no-cache',
    });

    // // If the response is not OK (status code is not 200-299), throw an error
    if (!response.ok) {
      const errorMessage = `${response.status} ${response.statusText}`;

      throw new Error(errorMessage);
    }

    // Parse the response data
    const data: SuccessResponse<T> = (await response.json()) as SuccessResponse<T>;

    // Return the successful response
    return data as T;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error?.message);
    }
    // Catch any network or parsing errors
    throw new Error('Something went wrong ho ki nayt');
  }
};
