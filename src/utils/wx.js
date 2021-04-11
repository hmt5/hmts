import axios from "axios";
import wx from "weixin-js-sdk";
function getWxconfigSign() {
  axios({
    url: "/active/wechat/shareIndex",
    method: "get",
    params: {
      url: window.location.href
    }
  })
    .then(res => {
      if (res) {
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: res.data.appId, // 必填，公众号的唯一标识
          timestamp: res.data.timestamp, // 必填，生成签名的时间戳
          nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
          signature: res.data.signature, // 必填，签名
          jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"] // 必填，需要使用的JS接口列表
        });
        wx.ready(() => {
          console.log("wx成功调用");
          wx.onMenuShareTimeline({
            title: "占楼抢好礼，赢100元大礼！", // 分享标题
            desc: "收听留言、设置应答语还可获更多中奖机会。", // 分享描述
            link: window.location.origin + "/" + window.location.pathname.split("/")[1] + "/zmactall/index.html", // 分享链接
            imgUrl:
              window.location.protocol +
              window.location.hostname +
              window.location.pathname.split("/")[1] + "/challengetask/img/shareimg.png", // 分享图标
            type: "link", // 分享类型,music、video或link，不填默认为link
            success: function(data) {
              console.log(data);
            },
            cancel: function(data) {
              // 用户取消分享后执行的回调函数
              console.log(data);
            }
          });
          wx.onMenuShareAppMessage({
            //分享给盆友
            title: "占楼抢好礼，赢100元大礼！", // 分享标题
            desc: "收听留言、设置应答语还可获更多中奖机会。", // 分享描述
            link: window.location.origin + "/" + window.location.pathname.split("/")[1] + "/zmactall/index.html" ,// 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl:
              window.location.protocol +
              window.location.hostname +
              window.location.pathname.split("/")[1] +
              "/challengetask/img/shareimg.png", // 分享图标
            type: "link", // 分享类型,music、video或link，不填默认为link
            dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
            success: function() {
              // 用户点击了分享后执行的回调函数
              console.log("22");
            }
          });
        });
        wx.error(function(res) {
          console.log(res);
        });
      }
    })
    .catch(err => {
      console.log(err);
    });
}

export default getWxconfigSign;
