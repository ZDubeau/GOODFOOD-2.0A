// https://angular.io/guide/build

/**
 * 
 *  This file can be replaced during build by using the `fileReplacements` array.
 * `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
 * The list of file replacements can be found in `angular.json`.
 * 
 */ 
export const environment = {
    production: false,
    appUrl: 'http://localhost:4200',
    apiBaseUrl: 'http://localhost:8080/api',
    oAuthProviderBaseUrl: 'http://localhost:8085/oauth',
    oAuthClientId: '962e63ce-3ca3-4a95-818f-2d9bb2eedc02',
    oAuthCallbackUri: 'http://localhost:4200/login/redirect'
};
  
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.