import { IGreenApiService } from '../services/IGreenApiService';

export class GetSettingsUseCase {
  constructor(private svc: IGreenApiService) {}

  /**
   * Возвращает настройки инстанса
   * @param idInstance — id вашего инстанса
   * @param apiToken — ApiTokenInstance
   */
  async execute(idInstance: string, apiToken: string): Promise<any> {
    if (!idInstance || !apiToken) {
      throw new Error('idInstance и apiToken обязательны');
    }
    return this.svc.getSettings(idInstance, apiToken);
  }
}
