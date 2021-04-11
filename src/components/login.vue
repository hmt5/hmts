<template>
  <div class="box" v-cloak>
    <div class="login">
      <!-- <div class="loginglist">
        <input
          class="phone"
          type="tel"
          placeholder="请输入中国移动手机号"
          @keyup="phoneNum = phoneNum.replace(/\D/g, '')"
          maxlength="11"
          v-model="phoneNum"
          @blur="ifphoneNum"
        />
      </div>
      <div class="loginglist">
        <input
          class="yzm"
          type="text"
          placeholder="请输入图形码"
          v-model="picNum"
          maxlength="4"
          @blur="onBlur"
        />
        <div class="getyzm" @click="fnGetimg">
          <img :src="imgsrc" alt="" />
        </div>
      </div>
      <div class="loginglist yzmlist">
        <input
          class="yzm"
          type="text"
          placeholder="请输入验证码"
          v-model="smsNum"
          maxlength="6"
          @keyup="smsNum = smsNum.replace(/\D/g, '')"
        />
        <div class="getyzm">
          <div class="yzmtext" ref="getyzm" v-if="isLocked" v-html="text"></div>
          <img
            @click="fnGetSmsCode"
            src="../assets/img/getyzm.png"
            alt=""
            v-else
          />
        </div>
      </div>
      <div class="buttonlist">
        <img @click="closebox" src="../assets/img/close_box.png" alt="" />
        <img @click="login" src="../assets/img/login_box.png" alt="" />
      </div> -->
      <!-- <div class="loginpull" @click="getSigns">
        <img src="../assets/img/loginpull.png" alt="" />
      </div> -->
    </div>
  </div>
</template>
<script>
// import { Toast } from "vant";
// import { api } from "../api/login.js";
// import { COMMON } from "../config/config";
export default {
  data() {
    return {
      // appId: "",
      // actId: "gd5GxmsOrder",
      // channel: "2713",
      // Toast1: "",
      // imgsrc: "",
      // phoneNum: "", //手机号码
      // picNum: "", //图形验证码
      // smsNum: "", //短信验证码
      // isLocked: false,
      // text: ""
    };
  },
  created() {
    // this.appId = api.getAppId();
  },
  mounted() {

    // this.fnGetimg();
  },
  methods: {
    // async fnGetimg() {
    //   this.imgsrc = await api.fnGetimg();
    // },
    // onBlur() {
    //   setTimeout(function() {
    //     var scrollHeight =
    //       document.documentElement.scrollTop || document.body.scrollTop || 0;
    //     window.scrollTo(0, Math.max(scrollHeight - 1, 0));
    //     console.log("scrollTo1:" + Math.max(scrollHeight - 1, 0));
    //   }, 1);
    //   // this.$refs.boxscroll.scrollTop = this.scrolltoptext;
    // },
    // closebox() {
    //   Toast.clear();
    //   this.$emit("closebox", "closeLogin");
    // },
    // ifphoneNum() {
    //   let _this = this;
    //   // var PATTERN = /^1(3[4-9]|4[78]|5[012789]|7[8]|8[23478]|9[8])\d{8}$/g;
    //   if (_this.phoneNum.length < 11) {
    //     // _this.tips = _this.condition.phoneNumEmpty;
    //     Toast(COMMON.phoneNumEmpty);
    //     return false;
    //   } else {
    //     return true;
    //   }
    // },
    // ifyzmNum() {
    //   let _this = this;
    //   if (_this.picNum.length < 4) {
    //     _this.Toast2 = Toast(COMMON.picCodeErr);
    //     return false;
    //   } else {
    //     // _this.boxloginTips = "";
    //     return true;
    //   }
    // },
    // fnGetSmsCode() {
    //   //下发短信验证码
    //   let _this = this;
    //   if (_this.isLocked == true) return; //正在发送验证码中
    //   if (_this.ifphoneNum() == false || _this.ifyzmNum() == false) return;
    //   Toast.loading({
    //     message: "请稍后...",
    //     duration: 0 // 持续展示 loading
    //   });
    //   // if (_this.isnontrue == false) return;
    //   // _this.isnontrue = false;
    //   // console.log("点击获取验证码1");
    //   // _this.fnSetInterval();
    //   // Toast("已发送验证码，有效时间3分钟");
    //   let data = {
    //     code: _this.picNum,
    //     phone: _this.phoneNum,
    //     actId: _this.actId
    //   };
    //   api
    //     .getSmsCode(data)
    //     .then(res => {
    //       Toast.clear();
    //       console.log("下发短信:" + res.data.code);
    //       // _this.isnontrue = true;
    //       if (res.data.code == 200) {
    //         _this.fnSetInterval();
    //         Toast("已发送验证码，有效时间3分钟");
    //       } else if (
    //         res.data.code == 201 ||
    //         res.data.code == 501 ||
    //         res.data.code == 502
    //       ) {
    //         _this.$emit("trueTips", {
    //           tipstext: res.data.msg,
    //           code: res.data.code
    //         });
    //       } else if (res.data.code == 100) {
    //         _this.fnGetimg();
    //         Toast(res.data.msg);
    //       } else {
    //         Toast(res.data.msg);
    //       }
    //     })
    //     .catch(err => {
    //       Toast("短信下发失败，请稍后重试");
    //       console.log(err);
    //     });
    // },

    // login() {
    //   let _this = this;
    //   if (_this.ifphoneNum() == false || _this.ifyzmNum() == false) return;
    //   if (_this.smsNum == "") {
    //     Toast("请输入短信验证码");
    //     return;
    //   }
    //   let data = {
    //     code: _this.smsNum,
    //     phone: _this.phoneNum,
    //     actId: _this.actId,
    //     channel: _this.channel
    //   };
    //   api
    //     .logins(data)
    //     .then(res => {
    //       if (res.data.code == 200) {
    //         console.log("登录成功");
    //         _this.$emit("openbox");
    //         window._hmt.push([
    //           "_trackEvent",
    //           "gdxmsnes",
    //           "gdxmsnes_box",
    //           "gdxmsnes_login"
    //         ]);
    //       } else if (
    //         res.data.code == 201 ||
    //         res.data.code == 501 ||
    //         res.data.code == 502
    //       ) {
    //         _this.$emit("trueTips", {
    //           tipstext: res.data.msg,
    //           code: res.data.code
    //         });
    //       } else {
    //         Toast(res.data.msg);
    //       }
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // },
    // fnSetInterval: function() {
    //   let time = 60;
    //   let _this = this;
    //   this.tid = setInterval(() => {
    //     time--;
    //     _this.text = '<span style="color:red">' + time + "</span>s";
    //     _this.isLocked = true;
    //     if (time <= 0) {
    //       clearInterval(_this.tid);
    //       // ele.innerHTML = "获取验证码";
    //       _this.isLocked = false;
    //     }
    //   }, 1000);
    //   return this.tid;
    // }

    // onfocus() {
    //   if (Toast) {
    //     Toast.clear();
    //     window.setTimeout(() => {
    //       var scrollHeight =
    //         document.documentElement.scrollTop || document.body.scrollTop || 0;
    //       window.scrollTo(0, Math.max(scrollHeight - 1, 0));
    //       // console.log("scrollTo:" + Math.max(scrollHeight - 1, 0));
    //     }, 10);
    //   }
    // }
    // async getSigns() {
    //   const toast1 = Toast.loading({
    //     duration: 0, // 持续展示 toast
    //     forbidClick: true,
    //     message: "请稍等..."
    //   });
    //   let _this = this;
    //   let usertext = "";
    //   console.log("8");
    //   //····················································二
    //   try {
    //     var code = await api.getSigns();
    //     var sign = code.data.data;
    //     var data = {
    //       version: "1.2",
    //       appId: this.appId,
    //       sign: sign,
    //       openType: "1"
    //     };
    //     var data2 = await api.getTokenInfo(data);
    //     console.log("data2：");
    //     console.log(data2);
    //     var tokens = {
    //       token: data2.token,
    //       userInformation: data2.userInformation,
    //       actId: _this.actId,
    //       channel: _this.channel
    //     };
    //     var res = await api.getUserInfo(tokens);
    //     console.log("token:" + res.headers.token);
    //     window._hmt.push([
    //       "_trackEvent",
    //       "getclick",
    //       "hnzmact_login",
    //       "hnzmact4g"
    //     ]);

    //     //获取用户信息
    //     if (res.data.code == 200) {
    //       console.log("4g取号成功");
    //       usertext = "参与成功";
    //     } else {
    //       usertext = "我是301用户信息";
    //     }
    //     toast1.clear();
    //     _this.$emit("isLogin", {
    //       ishow: true,
    //       text: usertext,
    //       code: res.data.code
    //     });
    //   } catch (err) {
    //     toast1.clear();
    //     console.log(err);
    //     usertext = "取号失败";
    //     _this.$emit("isLogin", {
    //       ishow: false,
    //       text: usertext
    //     });
    //     // _this.$emit("gerUser", usertext);
    //   }
    // },
  }
};
</script>
<style lang="less" scoped>
.box {
  width: 100%;
  min-width: 320px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}
.box::before {
  content: " ";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  background: #000;
  opacity: 0.6;
  /* z-index: 1; */
}
.login {
  width: 6.39rem;
  height: 5.6rem;
  background: url("../assets/img/login2.png") no-repeat top;
  background-size: 100%;
  z-index: 11;
  padding: 1.06rem 0.9rem 0;
  box-sizing: border-box;
  //   z-index: ;
}
.loginglist {
  width: 100%;
  height: 0.82rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.loginglist input {
  font-size: 0.28rem;
  color: #999;
  -webkit-user-select: text !important;
  box-sizing: border-box;
  padding-left: 0.18rem;
  box-sizing: border-box;
  height: 0.82rem;
}
.phone {
  width: 100%;
  text-align: left;
}

.yzm {
  width: 2.62rem;
}
.getyzm {
  width: 1.76rem;
}
.getyzm img {
  width: 100%;
  display: block;
}
.yzmtext {
  font-size: 0.35rem;
}
.buttonlist {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.32rem;
}
.buttonlist img {
  width: 2.24rem;
  display: block;
}
.loginpull {
  width: 100%;
  margin-top: 0.32rem;
}
.loginpull img {
  width: 100%;
  display: block;
}
</style>
