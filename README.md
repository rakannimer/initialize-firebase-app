# initialize-firebase-app

[![CircleCI][circleci-badge]][circleci-href]
[![NPM][npm-version-badge]][npm-href]
[![BundlePhobia][bundlephobia-badge]][bundlephobia-href]

Initialize firebase module (web, react-native or admin) using the appropriate credentials.

## Installation

```sh
yarn add initialize-firebase-app
```

## Usage

### Client

```typescript
import { initializeFirebaseApp } from "initialize-firebase-app";

export interface InitializeAppArgsClient {
  authDomain?: string;
  apiKey?: string;
  databaseURL?: string;
  firebase: any;
  projectId?: string;
  messagingSenderId?: string;
  storageBucket?: string;
}

initializeFirebaseApp(config);
```

### Server

```typescript
import { initializeFirebaseApp } from "initialize-firebase-app";

export type FirebaseCredential = {
  type: string;
  project_id: string;
  private_key_id: string;
  private_key: string;
  client_email: string;
  client_id: string;
  auth_uri: string;
  token_uri: string;
  auth_provider_x509_cert_url: string;
};
export interface InitializeAppArgsServer {
  firebase: any;
  databaseURL: string;
  credential: FirebaseCredential;
}

initializeFirebaseApp(config);
```

[Server config docs.](https://github.com/rakannimer/firebase-admin-get-children-ids)

[circleci-href]: https://circleci.com/gh/rakannimer/initialize-firebase-app
[circleci-badge]: https://img.shields.io/circleci/project/github/rakannimer/initialize-firebase-app.svg
[npm-href]: https://www.npmjs.com/package/initialize-firebase-app
[npm-version-badge]: https://img.shields.io/npm/v/initialize-firebase-app.svg
[npm-license-badge]: https://img.shields.io/github/license/rakannimer/initialize-firebase-app.svg
[bundlephobia-badge]: https://img.shields.io/bundlephobia/minzip/initialize-firebase-app.svg
[bundlephobia-href]: https://bundlephobia.com/result?p=initialize-firebase-app
