import { IGreenApiService } from '../services/IGreenApiService';

/**
 * Use-case: отправка файла по URL
 */
export class SendFileByUrlUseCase {
  constructor(private greenApiService: IGreenApiService) {}

  /**
   * @throws Error, если какой-то из параметров не передан
   */
  async execute(
    idInstance: string,
    apiToken: string,
    chatId: string,
    urlFile: string,
    fileName: string
  ): Promise<any> {
    if (
      !idInstance ||
      !apiToken ||
      !chatId ||
      !urlFile ||
      !fileName
    ) {
      throw new Error(
        'Параметры idInstance, apiToken, chatId, urlFile и fileName обязательны'
      );
    }
    return this.greenApiService.sendFileByUrl(
      idInstance,
      apiToken,
      chatId,
      urlFile,
      fileName
    );
  }
}
