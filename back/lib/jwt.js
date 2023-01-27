const crypto = require("crypto");

class JWT {
  constructor({ crypto }) {
    this.crypto = crypto;
  }

  encode(obj) {
    return Buffer.from(JSON.stringify(obj)).toString("base64url");
  }

  decode(base64) {
    return JSON.parse(Buffer.from(base64, "base64url").toString("utf-8"));
  }

  createSignature(base64url, salt = "mood") {
    const data = base64url.join(".");
    return this.crypto.createHmac("sha256", salt).update(data).digest("base64rul");
  }

  sign(data, options = {}) {
    const header = this.encode({ tpy: "JWT", alg: "HS256" });
    const payload = this.encode({ ...data, ...options });
    const signature = this.createSignature([header, payload]);
    return [header, payload, signature].join(".");
  }

  verify(token, salt) {
    // 암호화된 정보를 디코드해서 원래 값으로 보여주는 용도?
    const [header, payload, signature] = token.split(".");
    const newSignature = this.createSignature([header, payload], salt);
    if (newSignature !== signature) throw new Error("토큰값 오류");
    return this.decode(payload);
  }
}

module.exports = JWT;
