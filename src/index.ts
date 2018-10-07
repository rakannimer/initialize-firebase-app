export interface InitializeAppArgsClient {
  authDomain?: string;
  apiKey?: string;
  databaseURL?: string;
  firebase: any;
  projectId?: string;
  messagingSenderId?: string;
  storageBucket?: string;
}

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

export const initializeFirebaseAppClient = (
  config: InitializeAppArgsClient
) => {
  const {
    firebase,
    databaseURL,
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    ...restMaybe
  } = config;
  try {
    firebase.initializeApp({
      apiKey,
      authDomain,
      databaseURL,
      projectId,
      storageBucket,
      messagingSenderId,
      ...restMaybe
    });
  } catch (err) {
    if (err.code !== "app/duplicate-app") {
      throw err;
    }
  }
};

export const initializeFirebaseAppAdmin = (config: InitializeAppArgsServer) => {
  const { firebase, databaseURL, credential } = config;
  try {
    firebase.initializeApp({
      databaseURL,
      credential: firebase.credential.cert(credential as any)
    });
    return;
  } catch (err) {
    if (err.code !== "app/duplicate-app") {
      throw err;
    }
  }
};

export const initializeFirebaseApp = (
  config: InitializeAppArgsClient | InitializeAppArgsServer = {}
) => {
  const shouldUseAdmin = "credential" in config;
  const shouldUseWeb = "apiKey" in config;
  if (shouldUseAdmin) {
    initializeFirebaseAppAdmin(config as InitializeAppArgsServer);
  } else if (shouldUseWeb) {
    initializeFirebaseAppClient(config as InitializeAppArgsClient);
  }
};

export default initializeFirebaseApp;
