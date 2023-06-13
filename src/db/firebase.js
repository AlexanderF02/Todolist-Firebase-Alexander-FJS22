import { initializeApp } from 'firebase/app';

import {
  getFirestore
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDoCcDbXMxxNh2F9pxErtp771d5FvCMRlg",
  authDomain: "to-do-list-9619b.firebaseapp.com",
  projectId: "to-do-list-9619b",
  storageBucket: "to-do-list-9619b.appspot.com",
  messagingSenderId: "906292736014",
  appId: "1:906292736014:web:89dda87c92905fdd720c5f",
  measurementId: "G-KKWED67YT8"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db
