<template>
    <div class="">
       <div id="redzone">
       </div>
    </div>
</template>

<script>
// import axios from 'axios';
// import qs from 'qs';

export default {
  name: 'hongbao',
  data () {
    return {}
  },
  computed: {
  },
  methods: {
    addBao: function(left, height, src) {
      var div = document.createElement("div");
      var img = document.createElement("img");
      div.appendChild(img);
      img.className = "roll";
      img.src = src;
      div.style.left = left + "px";
      div.style.height = height + "px";
      div.className = "redBox";
      document.getElementById("redzone").appendChild(div);
      setTimeout(function() {
        document.getElementById("redzone").removeChild(div);
        //  console.log(window.innerHeight);
      }, 3000);
    },

  },
  mounted(){
    // if(options.istoken=="false"){
    //   this.setData({
    //     isbox:false
    //   })
    //   wx.hideLoading()
    //   console.log("false进入")
    //   wx.showToast({
    //     title: '手机号登录失败，请使用其他方式登录',
    //     icon:"none",
    //     duration:2000
    //   })
    // }else if(options.istoken=="true"){
    //   console.log("true进入")
    //   this.setData({
    //     isbox:false
    //   })
    //   wx.hideLoading()
    //   let token=options.token
    //   let phone = CryptoJS.Decrypt(options.phone);
    //   wx.setStorage({
    //     'key':"phone",
    //     'data':phone,
    //     success:function(res){
    //       console.log("手机成功")
    //       wx.setStorage({
    //         'key':"token",
    //         'data':token,
    //         success:function(res){
    //           console.log("成功")
    //           app.statUser()
    //         }
    //       })
    //     }
    //   })
    // }else{
    //   console.log("直接进入getsign")
    //   // wx.hideLoading()
    //   this.setData({
    //     isbox:true
    //   })
    // } 
    let vueObject = this;
    setInterval(function(){
      var left = Math.random() * document.body.scrollWidth;
      var height = Math.random() * document.body.scrollHeight;
      var src =require("../assets/img/button.png") 
      vueObject.addBao(left, height, src);
    }, 500);
  }
}
</script>
<style>
   @keyframes redImg {
    0% {
        top:0;
    }
    100% {
        top: 100%;
    }
  }
  .redBox {
    position: absolute;
   /* opacity: 0;*/
     z-index: 10000;
    animation: redImg 3s infinite linear;
    -webkit-animation: redImg 3s infinite linear;
    -moz-animation: redImg 3s infinite linear;
    -ms-animation: redImg 3s infinite linear;
    -o-animation: redImg 3s infinite linear;
  }

  .redBox {
    position: fixed;
  }
  .redBox img{
    display:block;
    width:5rem;
    height:6.5rem;
  }
</style>