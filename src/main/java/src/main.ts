import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common';

platformBrowserDynamic().bootstrapModule(AppModule);
