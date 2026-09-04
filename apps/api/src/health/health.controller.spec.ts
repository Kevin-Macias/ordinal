import { Test } from '@nestjs/testing';
import { describe, expect, it } from 'vitest';

import { DatabaseService } from '../database/database.service.js';
import { HealthController } from './health.controller.js';

describe('HealthController', () => {
  it('constructs the validated health procedure', async () => {
    const module = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [
        {
          provide: DatabaseService,
          useValue: { isAvailable: () => Promise.resolve(true) },
        },
      ],
    }).compile();

    const controller = module.get(HealthController);
    expect(controller.getHealth()).toBeDefined();
  });
});
