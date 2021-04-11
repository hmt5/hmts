<template>
  <div class="Home">
    <div class="hearder-home">
        <div class="hearder-logo"><img src="../assets/img/logo.png" alt=""></div>
        <div class="hearder">
          <div class="hearder-list">首页</div>
          <div class="hearder-list">首页</div>
          <div class="hearder-list">首页</div>
          <div class="hearder-list">首页</div>
        </div>
        <div class="hearder-search">
          <img class="search-logo" src="../assets/img/search.png" alt="">
        </div>
        <div class="hearder-language">
          <span>CN</span>
          <span class="col6bc">EN</span>
        </div>
    </div>
    <div class="banner"> 
      <div class="swiper-container swiper-container1" style="width:19rem;">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../assets/img/banner1_home.png" alt="">
          </div>
          <div class="swiper-slide">1</div>
          <div class="swiper-slide">1</div>
        </div>
        <!-- -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
         <div class="swiper1-pagination"></div>
      </div>
    </div>
    <div class="conter">
      <div class="conter-tittle1">
        <div>
          <div class="tittle-list1">Product Center</div>
          <div class="tittle-list2">产品展示</div>
        </div>
        <div class="tittle-move">更多></div>
      </div>
      <div class="conter-list">
          <div class="swiper-container swiper-container2" >
            <div class="swiper-wrapper">
              <div class="swiper-slide swiper-slide2">
                <div class="swiper2-list"><img src="../assets/img/list1.png" alt=""></div>
                <div class="swiper2-list"><img src="../assets/img/list1.png" alt=""></div>
              </div>
              <div class="swiper-slide swiper-slide2">
                <div class="swiper2-list"><img src="../assets/img/list1.png" alt=""></div>
                <div class="swiper2-list"><img src="../assets/img/list1.png" alt=""></div>
              </div>
              <div class="swiper-slide swiper-slide2">
                <div class="swiper2-list"><img src="../assets/img/list1.png" alt=""></div>
                <div class="swiper2-list"><img src="../assets/img/list1.png" alt=""></div>
              </div>
            </div>            
          </div>
          <div class="next_button swiper2-btnleft"><img src="../assets/img/left.png" alt="上一页" @click="prevBanner(2)"></div>
          <div class="next_button swiper2-btnright"><img src="../assets/img/left.png" alt="下一页" @click="nextBanner(2)"></div>
          <div class="swiper2-pagination">
            <span class="swiper-pagination-bullet swiper2-pagination-bullet"></span>
            <span class="swiper-pagination-bullet swiper2-pagination-bullet"></span>
            <span class="swiper-pagination-bullet swiper2-pagination-bullet"></span>
          </div>
        
      </div>
    </div>  
    <div class="conter conter2">
      <div class="conter2-banner">
        <div class="conter2-banner-left">
          <div class="swiper3-pagination">           
            <span class="swiper-pagination-bullet" :class="page==index?'swiper-pagination-bullet-active':''" v-for="(item,index) in data3" :key="index" @click="swiperPage(index)">{{item}}</span>
          </div>
        </div>
        <div class="conter2-banner-right" :class="animation1?'animation1':''">
          <img :src="pagebanner[page]" :alt="page" >
        </div>
        <div class="conter2-banner-center">
          <div class="swiper3_btn">
            <div class="next_button swiper3-btnleft" @click="prevBannerThree"></div>
            <div class="next_button swiper3-btnright" @click="nextBannerThree"></div>
          </div>
          <div class="swiper-container swiper-container3" >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
               <div class="swiper3-list">
                 <img src="../assets/img/swiper3_list1.png" alt="">
               </div>
               <div class="swiper3-list swiper3-list2">
                 <div class="swiper3-list-name">制造</div>
                 <div class="swiper3-list-text">从选原材料 以及每一个生产工艺环节，到检测和包装，都按照严格的要求做好每一步，注重每一个细节，成就完美产品。以全新的管理模式，完善的技术，周到的服务，卓越的品质为生存根本。我们始终坚持用户至上，用心服务于客户，坚持以质量。</div>
                 <div class="swiper3-list-move">更多</div>
               </div>
              </div>
              <div class="swiper-slide">1</div>
              <div class="swiper-slide">1</div>
            </div>
             
            <!-- -->
            <!-- <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> -->
            <!-- <div class="swiper1-pagination"></div> -->
          </div>          
        </div>
      </div>
    </div>
    <div class="conter">
      <div class="conter-tittle1">
        <div>
          <div class="tittle-list1">Product Center</div>
          <div class="tittle-list2">产品展示</div>
        </div>
        <div class="tittle-move">更多></div>
      </div>
      <div class="conter-list">
        <div class="swiper-container swiper-container4" >
          <div class="swiper-wrapper">
            <div class="swiper-slide ">
              <div ><img src="../assets/img/list1.png" alt=""></div>            
            </div>
            <div class="swiper-slide ">
              <div ><img src="../assets/img/list1.png" alt=""></div>
            </div>
            <div class="swiper-slide ">2 
            </div>
            <div class="swiper-slide ">
              <div ><img src="../assets/img/list1.png" alt=""></div>              
            </div>
            <div class="swiper-slide ">
              <div ><img src="../assets/img/list1.png" alt=""></div>              
            </div>
          </div>            
        </div>
        <div class="next_button swiper2-btnleft"><img src="../assets/img/left.png" alt="上一页"  @click="prevBanner(4)"></div>
        <div class="next_button swiper2-btnright"><img src="../assets/img/left.png" alt="下一页"  @click="nextBanner(4)"></div>
        <!-- <div class="swiper4-pagination">
          <span class="swiper-pagination-bullet swiper4-pagination-bullet"></span>
          <span class="swiper-pagination-bullet swiper4-pagination-bullet"></span>
          <span class="swiper-pagination-bullet swiper4-pagination-bullet"></span>
        </div> -->
      </div>
    </div>
    <div class="conter conter3 ">
      <div class="conter3-audio"></div>
      <div class="conter-tittle">科技内涵，精于医械</div>
      <div class="conter-tittle2"><img src="../assets/img/play_button.png" alt="">     </div>
    </div>
    <div class="conter conter4">
      <div class="conter4-div">
        <img src="../assets/img/conter4_img1.png">
        <div class="conter4-div-list">
          <div class="text1">关于我们</div>
          <div class="text2">以全新的管理模式，完善的技术，周到的服务，卓越的品质为生存根本。我们始终坚持用户至上，用心服务于客户，坚持以质量。 </div>
          <div class="move-button">
            更多<img src="../assets/img/move_logo.png" alt="move">
          </div>
        </div>
      </div>
      <div class="conter4-div">
        <img src="../assets/img/conter4_img1.png">
        <div class="conter4-div-list">
          <div class="text1">关于我们</div>
          <div class="text2">以全新的管理模式，完善的技术，周到的服务，卓越的品质为生存根本。我们始终坚持用户至上，用心服务于客户，坚持以质量。 </div>
          <div class="move-button">
            更多
            <img src="../assets/img/move_logo.png" alt="move">
          </div>
        </div>
      </div>
    </div>
    <div class="foot">
      <div class="foot-div">
        <div class="foot-div-list">
          <div class="foot-div-logo"><img src="../assets/img/logo.png" alt=""></div>
          <div class="foot-div-title">
            全国热线:
            <p class="foot-div-phone">0759-82365148</p>
          </div>
          <div class="foot-div-share">
            
          </div>
          <div>

          </div>
        </div>
        <div class="foot-div-list">
          <ul>
            <li class="foot-div-title">产品中心</li>
            <li>公司简介
            </li>
            <li>企业文化</li>
            <li>社会责任</li>
            <li>团队精彩</li>
          </ul>
        </div>
        <div class="foot-div-list">
          <ul>
            <li class="foot-div-title"></li>
            <li>公司简介</li>
            <li>企业文化</li>
            <li>社会责任</li>
            <li>团队精彩</li>
          </ul>
        </div>
        <div class="foot-div-list">
          <ul>
            <li class="foot-div-title"></li>
            <li>公司简介</li>
            <li>企业文化</li>
            <li>社会责任</li>
            <li>团队精彩</li>
          </ul>
        </div>
        <div class="foot-div-list">
          <ul>
            <li class="foot-div-title"></li>
            <li>公司简介</li>
            <li>企业文化</li>
            <li>社会责任</li>
            <li>团队精彩</li>
          </ul>
        </div>
        <div class="foot-div-list">
          <div class="foot-div-logo"><img src="../assets/img/logo.png" alt=""></div>
          <div class="foot-div-title">
            全国热线:
            <p class="foot-div-phone">0759-82365148</p>
          </div>
          <div class="foot-div-share">
            
          </div>
        </div>
       
      </div>
      <div class="foot-last">
      
      </div>
    </div>
</div>
</template>
<script>
// import 'swiper/swiper-bundle.css';
// import Swiper from "swiper";
// import VueAwesomeSwiper from "vue-awesome-swiper";
// import Swiper from "swiper";
// import 'swiper/swiper-bundle.css'

import Swiper from 'swiper'
// import { Toast } from "vant";
// import "vant/lib/index.css";
// import login from "../components/login";
// import tips from "../components/tips";
// import { api, user } from "../api/login";
// // import { MSG } from "../config/config";
// import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
// import 'swiper/swiper-bundle.css'
// import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
export default {
  data() {
    return {
        mySwiper:"",
        mySwiper2:"",
        mySwiper3:"",
        wiondsWidth:0,
        data3:["焊接","焊接2","焊接3"],
        pagebanner:[require('../assets/img/swiper3_banner0.png'),require('../assets/img/swiper3_banner1.png'),require('../assets/img/swiper3_banner0.png')],
        page:0,
        animation1:false
    };
  },
  
  mounted() {
    let _this=this
    this.$nextTick(() => {
      setTimeout(()=>{
        _this.swipers()
      },1000)
    }); 
    this.wiondsWidth = document.body.clientWidth;
    //   window.onresize = () => {
    //     return (() => {
    //       _this.wiondsWidth = document.body.clientWidth;
    //     })();
    // };
     window.addEventListener("resize", function() {
      return (() => {
        _this.wiondsWidth = document.body.clientWidth;
      })();
    });
  },
  methods: {
    swipers() {
      var _this = this;
      _this.mySwiper = new Swiper(".swiper-container1", {
        // nextButton: '.next_button',
        autoplay:5000,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        pagination: '.swiper1-pagination',

      });
      _this.mySwiper2 = new Swiper(".swiper-container2", {
        pagination : '.swiper2-pagination',
      
      });
      _this.mySwiper3 = new Swiper(".swiper-container3", {
        onSlideChangeStart: function(){       
          _this.page=_this.mySwiper3.activeIndex
          _this.animation1=true
        },
        onSlideChangeEnd:function(){
          _this.animation1=false
        },
        paginationClickable :true,
        // paginationBulletRender: function (swiper, index, chooseswiper3) {
        //     return '<span class="' + chooseswiper3 + '">' + _this.data3[index]+ '</span>';
        // }
      });
      _this.mySwiper4 = new Swiper(".swiper-container4", {
        // pagination : '.swiper4-pagination',
        slidesPerView : 3,
        slidesPerGroup:1,
        spaceBetween : 20,
      
      });
    },
    nextBanner(index){ 
      this["mySwiper"+index].slideNext();
      // if(index==2){
      //   this.mySwiper2.slideNext();
      // }else if(index==4){
      //   this.mySwiper4.slideNext();
      // }  
    },
    prevBanner(index){
      this["mySwiper"+index].slidePrev();
      // if(index==2){
      //   this.mySwiper2.slidePrev();
      // }else if(index==4){
      //   this.mySwiper4.slidePrev();
      // }  
    },
    nextBannerThree(){
      this.mySwiper3.slideNext();
      let clickedIndex=this.mySwiper3.realIndex  
      this.page=clickedIndex
    },
    prevBannerThree(){
      this.mySwiper3.slidePrev();
      let clickedIndex=this.mySwiper3.realIndex  
      this.page=clickedIndex
    },
    swiperPage(index){
      console.log(index)
      this.mySwiper3.slideTo(index, 1000, false);
      this.page=index
    }
  },
  watch: {
    wiondsWidth:function(data1,data2){
      // this.wiondsWidth = document.body.clientWidthw
      console.log(data1,data2)
    }
  },
};
</script>

<style lang="less" >
@import "../assets/css/index.css";
@import "../assets/css/swiper.css";


.col6bc{
    color: #6b66bc;
    background: #fff;
}
// .swiper-container {
//     width: 100%;
//     margin:  auto;
//     position: absolute;
//     top: 0;
//     left: 0;
//     display: table;
// }
// .swiper-slide img{
//   width: 100%;
//   display: block;
// }
// .swiper-container,.swiper-slide {
//   width: 100%;
//   height: 100%;
// }
// .swiper-slide{
//   width: 100%;
//   height: 100%;
//   position: relative;
//   }
// swiper2



</style>
