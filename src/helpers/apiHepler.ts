export const api_path = 'https://jsonplaceholder.typicode.com'

export const objectToStringParams = (params: any) => {
  let stringData = ''
  for(let key in params) {
    stringData += `${key}=${params[key]}&`
  }
  return `?${stringData}`
}