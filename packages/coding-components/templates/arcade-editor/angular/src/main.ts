import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Set component assets path
import { setAssetPath } from '@esri/calcite-components/dist/components';
setAssetPath(`${location.origin}${location.pathname}assets`);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
