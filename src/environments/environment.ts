// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyASNsizkHnmGiNn6tMKhKv1udKQxkFv3aA",
    authDomain: "files-d9b8d.firebaseapp.com",
    databaseURL: "https://files-d9b8d.firebaseio.com",
    projectId: "files-d9b8d",
    storageBucket: "files-d9b8d.appspot.com",
    messagingSenderId: "950623439702"
  },
  firebaseConfigI : {
    apiKey: "AIzaSyDHASMDsfTEZtVYWSdRKv_SUSehgFGM8Ow",
    authDomain: "insurance-amlabs.firebaseapp.com",
    databaseURL: "https://insurance-amlabs.firebaseio.com",
    projectId: "insurance-amlabs",
    storageBucket: "insurance-amlabs.appspot.com",
    messagingSenderId: "840663019856",
    timestampsInSnapshots: false
  },
  //apiRoot:"https://inscoreapih.azurewebsites.net/api"
<<<<<<< HEAD
  apiRoot:"http://localhost:5000/api"
  //apiRoot:"http://localhost:50742/api"
=======
  apiRoot:"http://localhost:50742/api"
>>>>>>> 65d0145b97fd9f888c0bd69061d36b1ff67de0a2
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
