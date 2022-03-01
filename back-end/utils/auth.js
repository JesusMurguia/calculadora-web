const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  verify: async (id) => {
    const { OAuth2Client } = require("google-auth-library");
    const client = new OAuth2Client(process.env.CLIENT_ID);
    const ticket = await client.verifyIdToken({
      idToken: id,
      audience: process.env.CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const userid = payload["sub"];
    return userid;
  },
};
