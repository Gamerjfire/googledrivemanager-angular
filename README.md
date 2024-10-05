#### googledrivemanager-angular
Angular project that functions as a pseudo-frontend process to work on Google-Drive based logic.

**To run - **
1. Download the repository.
2. In `config.ts` set the apiKey and clientId with valid keys/ids from Google's Cloud Projects.
2a. See https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid to get ClientId for the project
2b. See https://developers.google.com/maps/documentation/javascript/get-api-key on how to get API-Keys
3.  Verify you have setup SSL permissions for your local system.
4.  Move the localhost.pem and localhost-key.pem to the certs folder.
5.  Run `ng serve --ssl` in the folder.

**To use -**
1.  Open up browser and navigate to https://localhost:4200/
2.  It will redirect you to https://localhost:4200/login
2a. You will need permissions to a project necessary as per the google-developers.  Making sure to set your email as a tester as well, as is not the default for the owner to be able to test.
3.  Click the Sign-in button.
4.  When complete, click the logout button to invalidate your tokens.


**Current known Issues/Design Choices:**
* No pagination.  If there are too many entries it will only show the first 100.
* When uploading, the names will all be 'Untitled'.  This is a known bug with Google's API that is difficult to pin down.
* When uploading, the new item will not be present until a refresh.
* There is a 3 attempt retry to get the data before it will sit on a loading screen.
* Separation of keys for security, only for local placement or fetching from a separate repository.
* Simple functional coding using libraries of common Angular use.

**Testing:**
-run `ng test` in the project folder.
