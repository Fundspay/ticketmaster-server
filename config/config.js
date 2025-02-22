if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
  
  let CONFIG = {};
  
  CONFIG.app = process.env.APP || "dev";
  CONFIG.port = process.env.PORT || "3000";
  
  // Database Config
  CONFIG.db_dialect = "postgres" //process.env.DB_DAILECT || "postgres";
  CONFIG.db_host = process.env.DB_HOST || "localhost";
  CONFIG.db_container = process.env.DB_CONTAINER || "postgresql_container";
  CONFIG.db_port = process.env.DB_PORT || "5432";
  CONFIG.db_name = process.env.DB_NAME || "name";
  CONFIG.db_user = process.env.DB_USER || "root";
  CONFIG.db_password = process.env.DB_PASSWORD || "db-password";
  CONFIG.db_usePassword = process.env.DB_USE_PASSWORD || "true";
  
  // Firebase
  CONFIG.firebaseDB_URL = process.env.FIREBASEDB_URL || 'db-url';
  
  // SMTP
  CONFIG.smtpKey = process.env.SMTP_KEY || 'smtpapikey';

  // S3 Config
  CONFIG.s3Region = process.env.S3_REGION || 'ap-south-1';
  CONFIG.s3AccessKeyId = process.env.S3_ACCESS_KEY_ID || 'your-access-key-id';
  CONFIG.s3SecretAccessKey = process.env.S3_SECRET_ACCESS_KEY || 'your-secret-access-key';
  CONFIG.s3Bucket = process.env.S3_BUCKET || 'your-bucket-name';

// Razorpay Config
  CONFIG.razorpayKeyId = process.env.RAZORPAY_KEY_ID || 'your-razorpay-key-id';
  CONFIG.razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET || 'your-razorpay-key-secret';
  CONFIG.razorpayAccountId = process.env.RAZORPAY_ACCOUNT_ID || 'your-razorpay-account-id';

// Google Auth Config
  CONFIG.googleClientId = process.env.GOOGLE_CLIENT_ID || 'your-google-client-id';
  CONFIG.googleClientSecret = process.env.GOOGLE_CLIENT_SECRET || 'your-google-client-secret';
  CONFIG.googleCallbackUrl = process.env.GOOGLE_CALLBACK_URL || 'http://localhost:3000/auth/google/callback';

  // JWT Config
  CONFIG.secretKey = process.env.JWT_KEY || "testfundsresearchkey"
  
  module.exports = CONFIG;