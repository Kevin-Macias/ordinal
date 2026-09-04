import { Controller } from '@nestjs/common';
import { healthContract } from '@ordinal/contracts';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';

import { DatabaseService } from '../database/database.service.js';

@Controller()
export class HealthController {
  constructor(private readonly database: DatabaseService) {}

  @TsRestHandler(healthContract)
  getHealth() {
    return tsRestHandler(healthContract, {
      get: async () => ({
        status: 200,
        body: {
          service: 'ordinal-api',
          status: 'ok',
          database: (await this.database.isAvailable())
            ? 'connected'
            : 'unavailable',
          timestamp: new Date().toISOString(),
        },
      }),
    });
  }
}
