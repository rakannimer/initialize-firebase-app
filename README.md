# Initialize a firebase app (web or admin)

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
  clienMimeType_x509_cert_url: string;
};
export interface InitializeAppArgsServer {
  firebase: any;
  databaseURL: string;
  credential: FirebaseCredential;
}

initializeFirebaseApp(config);
```

[Server config docs.](https://github.com/rakannimer/firebase-admin-get-children-ids)
