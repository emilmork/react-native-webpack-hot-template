## Run the app

Install the example app dependencies and start the server:

```
npm install
npm start
```

Open the Xcode project and build/run.


To build for release:

```
npm run bundle
```

Then uncomment the line in AppDelegate.m that loads the local `main.jsbundle`.