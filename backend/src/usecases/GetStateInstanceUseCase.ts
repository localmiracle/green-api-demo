import { IGreenApiService } from '../services/IGreenApiService';

export class GetStateInstanceUseCase {
  constructor(private svc: IGreenApiService) {}

  /**
   * Возвращает состояние инстанса (например, подключён ли телефон)
   * @param idInstance — id вашего инстанса
   * @param apiToken — ApiTokenInstance
   */
  async execute(idInstance: string, apiToken: string): Promise<any> {
    if (!idInstance || !apiToken) {
      throw new Error('idInstance и apiToken обязательны');
    }
    return this.svc.getStateInstance(idInstance, apiToken);
  }
}
