// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
  	apiKey: "AIzaSyCkIH1IfQdXB77xp-FoRjVdJnJ8RVYJU8w",
    authDomain:"firestarter-new.firebaseapp.com",
    databaseURL: "https://firestarter-new.firebaseio.com",
    projectId: "firestarter-new",
    storageBucket: "firestarter-new.appspot.com",
    messagingSenderId: "864973642726"
  }
};
