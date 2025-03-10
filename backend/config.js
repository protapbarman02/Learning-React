require("dotenv").config();

const config = {
  PORT: process.env.PORT || 5000,
  MONGO_URI:
    process.env.USE_LOCAL_DB === "true"
      ? process.env.LOCAL_MONGO_URI // Use local DB if true
      : process.env.REMOTE_MONGO_URI, // Use remote DB if false
};

module.exports = config;
