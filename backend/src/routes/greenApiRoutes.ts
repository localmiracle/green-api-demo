import { Router } from 'express';
import { GreenApiHttpService } from '../services/GreenApiHttpService';
import { GetSettingsUseCase } from '../usecases/GetSettingsUseCase';
import { GetStateInstanceUseCase } from '../usecases/GetStateInstanceUseCase';
import { SendMessageUseCase } from '../usecases/SendMessageUseCase';
import { SendFileByUrlUseCase } from '../usecases/SendFileByUrlUseCase';
import { GreenApiController } from '../controllers/GreenApiController';

// Инстанцируем сервис и все use-case’ы
const greenApiService = new GreenApiHttpService();
const getSettingsUseCase = new GetSettingsUseCase(greenApiService);
const getStateInstanceUseCase = new GetStateInstanceUseCase(greenApiService);
const sendMessageUseCase = new SendMessageUseCase(greenApiService);
const sendFileByUrlUseCase = new SendFileByUrlUseCase(greenApiService);

// Инжектируем в контроллер
const greenApiController = new GreenApiController(
  getSettingsUseCase,
  getStateInstanceUseCase,
  sendMessageUseCase,
  sendFileByUrlUseCase
);

// Выставляем роуты
const router = Router();
router.post(
  '/getSettings',
  greenApiController.getSettings.bind(greenApiController)
);
router.post(
  '/getStateInstance',
  greenApiController.getStateInstance.bind(greenApiController)
);
router.post(
  '/sendMessage',
  greenApiController.sendMessage.bind(greenApiController)
);
router.post(
  '/sendFileByUrl',
  greenApiController.sendFileByUrl.bind(greenApiController)
);

export { router as greenApiRouter };
