const admin = require('firebase-admin');
const dotenv = require('dotenv');
const { v4: uuidv4 } = require('uuid');

dotenv.config();

// Configuración completa de Firebase
const firebaseConfig = {
  credential: admin.credential.cert({
    type: "service_account",
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${encodeURIComponent(process.env.FIREBASE_CLIENT_EMAIL)}`,
    universe_domain: "googleapis.com"
  }),
  databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
  storageBucket: `${process.env.FIREBASE_PROJECT_ID}.appspot.com`
};

// Inicialización con manejo de errores
try {
  admin.initializeApp(firebaseConfig);
  console.log('Firebase Admin SDK initialized successfully');
} catch (error) {
  console.error('Firebase initialization error:', error);
  process.exit(1);
}

// Servicios de Firebase
const auth = admin.auth();
const db = admin.firestore();
const storage = admin.storage();
const bucket = storage.bucket();
const fieldValue = admin.firestore.FieldValue;

// Configuración especial para entornos de desarrollo
if (process.env.NODE_ENV === 'development') {
  db.settings({ ignoreUndefinedProperties: true });
  console.log('Firestore configured for development environment');
}

// Función para generar IDs seguros
const generateId = () => uuidv4();

module.exports = {
  admin,
  auth,
  db,
  bucket,
  storage,
  fieldValue,
  generateId,
  // Exportamos tipos útiles
  firestoreTypes: {
    Timestamp: admin.firestore.Timestamp,
    FieldValue: admin.firestore.FieldValue,
    FieldPath: admin.firestore.FieldPath
  }
};