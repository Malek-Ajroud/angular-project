import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
<<<<<<< HEAD
    provideHttpClient()// httpClient provider 
=======
    provideHttpClient()
>>>>>>> 5141a406c55cd6cf5e56d3cfa4a2ca61857311d3
  ]
};
