export enum AppRoutes {
   HOME_ROUTE = '/',
   DESCRIPTION_ROUTE = '/description',
   MARKING_ROUTE = '/marking',
   SOURCEFILES_ROUTE = '/sourcefiles',
   STYLIZATION_ROUTE = '/stylization',
   USERSCRIPTS_ROUTE = '/userscripts',
}

const AppRoutesTitles = {
   [AppRoutes.DESCRIPTION_ROUTE]: 'Описание',
   [AppRoutes.MARKING_ROUTE]: 'Разметка',
   [AppRoutes.STYLIZATION_ROUTE]: 'Стили',
   [AppRoutes.USERSCRIPTS_ROUTE]: 'Скрипты',
   [AppRoutes.SOURCEFILES_ROUTE]: 'Ресурсы',
};

const opt = {
   get(t: Record<string, string>, p: string) {
      return p in t ? t[p] : 'Сюрприз';
   },
};

export const ROUTES_TRANSLATOR = new Proxy(AppRoutesTitles, opt);
