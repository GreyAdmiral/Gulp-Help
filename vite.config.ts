import { devConfig } from './vite.config.dev';
import { prodConfig } from './vite.config.prod';

type configAttributes = {
   mode: string;
};

export default ({ mode }: configAttributes) => {
   if (mode === 'development') {
      return devConfig;
   } else if (mode === 'production') {
      return prodConfig;
   }
};
