import axios from "axios";
// import axios from "../utils/http";

export const api = {
  env: "/active",
  //4g取号
  getAppId() {
    return axios.get(this.env + "/getAppId");
  },
  async getSigns(appId) {
    var preSign = await window.YDRZ.getSign(appId, "1.2");
    return axios({
      url: this.env + "/getSign",
      method: "get",
      params: {
        preSign: preSign
      }
    })
  },
  getTokenInfo({ version, appId, sign }) {
    const data = {
      version, // 接口版本号 （必填）
      appId, // 应用Id （必填）
      sign, // RSA加密后的sign（必填）
      openType: "1", // 移动取号接口填写1,三网取号接口填写0 （必填，联调时必须填写为1）
      expandParams: "" // 扩展参数  格式：参数名=值  多个时使用 | 分割（选填，联调环境只能模拟取号，联调时需填写phoneNum=188185*****  手机号可以随便填写，生产可不填）
      // isTest: '0' // 是否启用测试线地址（传0时为启用不为0或者不传时为不启用）
    };
    return new Promise(function(resolve, reject) {
      window.YDRZ.getTokenInfo({
        data,
        success: function(res) {
          //成功回调
          resolve(res);
        },
        error: function(err) {
          //错误回调
          reject(err);
        }
      });
    });
  },
  getUserInfo(data) {
    return axios.get(this.env + "/drink/getUserInfo", {
      params: data
    });
  },
  //4g取号结束

  fnGetimg() {
    //图形验证码
    return this.env + "/common/getVerify?pic=" + new Date().getTime();
  },
  // 下发短信验证码
  getSmsCode(data) {
    return axios({
      url: this.env + "/drink/vgSendSmsCode?ts=" + new Date().getTime(),
      method: "get",
      params: data
    });
  },
  logins(data) {
    //短信验证登录
    return axios({
      url: this.env + "/drink/verifySmsCode?ts=" + new Date().getTime(),
      method: "post",
      params: data
    });
  },
  getWxConfig(url) {
    // console.log("[][][]]");
    // console.log(this.env);
    return axios.get(this.env + "/wechat/shareIndex", {
      params: {
        url,
        ts: new Date().getTime()
      }
    });
  }
};

export const user = {
  env: "/active",
  xmsOclick(data) {
    return axios({
      url: this.env + "/drink/xmsOclick",
      method: "get",
      params: data
    });
  }
};
// 获取微信签名参数
// export function getWxConfig(url) {
//   console.log("[][][]]");
//   console.log(this);
//   //   return axios.get(this.env + "/wechat/shareIndex", {
//   //     params: {
//   //       url,
//   //       ts: new Date().getTime()
//   //     }
//   //   });
// }
// export default { api, user };
