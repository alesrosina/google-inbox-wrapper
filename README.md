# Google Inbox App

This wrapper uses [Electron](https://electron.atom.io/) wrapped inside [Nativefier](https://github.com/jiahaog/nativefier), so app should work on all platforms (MacOSX, Windows, Linux).

By default Google Inbox does not provide any notifications to a user, so additional script is required to detect new emails and adding counter badge.

Currently this wrapper does not provide actual notifications.

## Requirements

 - Node.js (see https://nodejs.org/en/)

 ## Instalation

First install all dependecies:

```
$ npm install
```

Afterwards run build process:

```
$ npm run build
```

Application should be compiled in same folder as you have run the command, just move the app to your favorite location.
