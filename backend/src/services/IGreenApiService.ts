export interface IGreenApiService {
    getSettings(idInstance: string, apiToken: string): Promise<any>;
    getStateInstance(idInstance: string, apiToken: string): Promise<any>;
    sendMessage(
      idInstance: string,
      apiToken: string,
      chatId: string,
      message: string
    ): Promise<any>;
    sendFileByUrl(
      idInstance: string,
      apiToken: string,
      chatId: string,
      urlFile: string,
      fileName: string
    ): Promise<any>;
  }
  