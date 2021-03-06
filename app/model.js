const redisClient = require("./config/redis");

exports.saveCallId = (key, value) => {
  return new Promise((resolve, reject) => {
    // Created for listening continuously for a day.
    redisClient.SET(key, JSON.stringify(value), "EX", 86400, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};
// Created for listening continuously for a day.
exports.getCallId = (key) => {
  return new Promise((resolve, reject) => {
    redisClient.GET(key, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(res));
    });
  });
};
