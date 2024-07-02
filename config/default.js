const allowApi = require('./allowApi');
const abCos = require('./abCos');

module.exports = {
  port: 8002,
  url: 'mongodb://localhost:27017/store',
  secretKey: 'store',
  expiresIn: '10h',
  apiList: allowApi,
  abCos: abCos,
  defaultPassword: "000000",
  session: {
    name: 'store',
    secret: 'store',
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 365 * 24 * 60 * 60 * 1000
    }
  }
};
