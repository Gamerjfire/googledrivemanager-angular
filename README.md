## googledrivemanager-angular
Angular project that functions as a pseudo-frontend process to work on Google-Drive based logic.

To run - 
1. Download the repository.
2. In config.ts set the apiKey and clientId with valid keys/ids from Google's Cloud Projects.
2a. See https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid to get ClientId for the project
2b. See https://developers.google.com/maps/documentation/javascript/get-api-key on how to get API-Keys
3.  Verify you have setup SSL permissions for your local system.
4.  Move the localhost.pem and localhost-key.pem to the certs folder.
5.  Run `ng serve --ssl` in the folder.

To use -
1.  Open up browser and navigate to https://localhost:4200/
2.  It will redirect you to https://localhost:4200/login
2a. You will need permissions to a project necessary as per the google-developers.  Making sure to set your email as a tester as well, as is not the default for the owner to be able to test.
3.  Click the Sign-in button.
4.  When complete, click the logout button to invalidate your tokens.
