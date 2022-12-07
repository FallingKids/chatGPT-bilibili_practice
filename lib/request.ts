import axios, { AxiosInstance, AxiosResponse } from 'axios'

const host = 'https://api.bilibili.com'

class Request {
  private client: AxiosInstance

  constructor() {
    this.client = axios.create({
      baseURL: host,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  public async get(path: string): Promise<AxiosResponse> {
    return this.client.get(path)
  }

  public async post(path: string, data: any): Promise<AxiosResponse> {
    return this.client.post(path, data)
  }
}

export default Request
