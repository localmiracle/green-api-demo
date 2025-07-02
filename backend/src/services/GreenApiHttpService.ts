import axios from 'axios';
import { IGreenApiService } from './IGreenApiService';

export class GreenApiHttpService implements IGreenApiService {
  /**
   * Возвращает базовый URL для данного idInstance
   */
  private baseUrl(idInstance: string): string {
    return `https://api.green-api.com/waInstance${idInstance}`;
  }

  /**
   * GET /getSettings/:apiToken
   */
  async getSettings(idInstance: string, apiToken: string): Promise<any> {
    const url = `${this.baseUrl(idInstance)}/getSettings/${apiToken}`;
    const response = await axios.get(url);
    return response.data;
  }

  /**
   * GET /getStateInstance/:apiToken
   */
  async getStateInstance(idInstance: string, apiToken: string): Promise<any> {
    const url = `${this.baseUrl(idInstance)}/getStateInstance/${apiToken}`;
    const response = await axios.get(url);
    return response.data;
  }

  /**
   * POST /sendMessage/:apiToken
   * Тело: { chatId, message }
   */
  async sendMessage(
    idInstance: string,
    apiToken: string,
    chatId: string,
    message: string
  ): Promise<any> {
    const url = `${this.baseUrl(idInstance)}/sendMessage/${apiToken}`;
    const response = await axios.post(url, { chatId, message });
    return response.data;
  }

  /**
   * POST /sendFileByUrl/:apiToken
   * Тело: { chatId, urlFile, fileName }
   */
  async sendFileByUrl(
    idInstance: string,
    apiToken: string,
    chatId: string,
    urlFile: string,
    fileName: string
  ): Promise<any> {
    const url = `${this.baseUrl(idInstance)}/sendFileByUrl/${apiToken}`;
    const response = await axios.post(url, {
      chatId,
      urlFile,
      fileName,
    });
    return response.data;
  }
}
