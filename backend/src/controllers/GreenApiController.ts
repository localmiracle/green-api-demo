import { Request, Response, NextFunction } from 'express';
import { GetSettingsUseCase } from '../usecases/GetSettingsUseCase';
import { GetStateInstanceUseCase } from '../usecases/GetStateInstanceUseCase';
import { SendMessageUseCase } from '../usecases/SendMessageUseCase';
import { SendFileByUrlUseCase } from '../usecases/SendFileByUrlUseCase';

export class GreenApiController {
  constructor(
    private getSettingsUC: GetSettingsUseCase,
    private getStateInstanceUC: GetStateInstanceUseCase,
    private sendMessageUC: SendMessageUseCase,
    private sendFileByUrlUC: SendFileByUrlUseCase
  ) {}

  /**
   * GET SETTINGS
   */
  async getSettings(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { idInstance, apiToken } = req.body;
    try {
      const data = await this.getSettingsUC.execute(idInstance, apiToken);
      res.json(data);
    } catch (err: any) {
      console.error('getSettings error:', err.response?.data || err.message);
      res
        .status(err.response?.status || 500)
        .json({ error: err.response?.data || err.message });
    }
  }

  /**
   * GET STATE INSTANCE
   */
  async getStateInstance(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { idInstance, apiToken } = req.body;
    try {
      const data = await this.getStateInstanceUC.execute(
        idInstance,
        apiToken
      );
      res.json(data);
    } catch (err: any) {
      console.error(
        'getStateInstance error:',
        err.response?.data || err.message
      );
      res
        .status(err.response?.status || 500)
        .json({ error: err.response?.data || err.message });
    }
  }

  /**
   * SEND MESSAGE
   */
  async sendMessage(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { idInstance, apiToken, chatId, message } = req.body;
    try {
      const data = await this.sendMessageUC.execute(
        idInstance,
        apiToken,
        chatId,
        message
      );
      res.json(data);
    } catch (err: any) {
      console.error('sendMessage error:', err.response?.data || err.message);
      res
        .status(err.response?.status || 500)
        .json({ error: err.response?.data || err.message });
    }
  }

  /**
   * SEND FILE BY URL
   */
  async sendFileByUrl(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { idInstance, apiToken, chatId, urlFile, fileName } = req.body;
    try {
      const data = await this.sendFileByUrlUC.execute(
        idInstance,
        apiToken,
        chatId,
        urlFile,
        fileName
      );
      res.json(data);
    } catch (err: any) {
      console.error('sendFileByUrl error:', err.response?.data || err.message);
      res
        .status(err.response?.status || 500)
        .json({ error: err.response?.data || err.message });
    }
  }
}
