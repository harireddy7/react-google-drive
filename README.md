# react-google-drive

This project is developed to upload files to `Google Drive` using Google's drive api.


## Steps to perform
---

1. git clone https://github.com/harireddy7/react-google-drive.git
2. cd `react-google-drive`


3. Add Google `API key`, OAuth `Client ID` and `Project number` under **[I AM & Admin>settings](https://console.cloud.google.com/iam-admin/settings)** to `.env` file as below:

```
REACT_APP_DEVELOPER_KEY=xxxxxxxxxxxxxxxxxx
REACT_APP_CLIENT_ID=projectnumber-xxxxxxxxxxxxxxxx.apps.googleusercontent.com
REACT_APP_PROJECT_ID=projectnumber
```

4. `npm install` or `yarn install`
5. `npm start` (to spin up dev server)
6. Go to http://localhost:3000/