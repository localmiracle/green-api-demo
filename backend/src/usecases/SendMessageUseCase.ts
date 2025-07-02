import { IGreenApiService } from '../services/IGreenApiService';

export class SendMessageUseCase {
  constructor(private greenApiService: IGreenApiService) {}

  /**
   * @throws Error, если какой-то из параметров пуст
   */
  async execute(
    idInstance: string,
    apiToken: string,
    chatId: string,
    message: string
  ): Promise<any> {
    if (!idInstance || !apiToken || !chatId || !message) {
      throw new Error(
        'Параметры idInstance, apiToken, chatId и message обязательны'
      );
    }
    return this.greenApiService.sendMessage(
      idInstance,
      apiToken,
      chatId,
      message
    );
  }
}
