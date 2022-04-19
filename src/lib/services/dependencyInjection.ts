import { TasksService } from './tasks/tasks.service';
import { SettingsService } from './settings/settings.service';

export const ServicesInjection = [
  SettingsService,
  TasksService
];
