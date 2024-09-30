class RequestFailed extends Error {
  constructor(public response: Response) {
    super(`Request failed with status code ${response.status}`)
  }
}

export const doRequest = async (
  url: string,
  headers: Record<string, any>,
  params: Record<string, any>
): Promise<string> => {
  const urlParams = new URLSearchParams(params).toString()
  const fullUrl = `${url}?${urlParams}`

  const options = {
    headers: {
      ...headers,
      'Accept-Encoding': 'gzip, deflate, br',
    },
  }

  try {
    const response = await fetch(fullUrl, options)
    if (!response.ok) {
      throw new RequestFailed(response)
    }

    return await response.text()
  } catch (err) {
    throw err
  }
}
