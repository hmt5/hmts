<template>
  <div class="box">
    <div class="tips">
      <div class="tips_text" v-html="text"></div>
      <div class="close_tips" @click="closebox">
        <img src="../assets/img/close_tips.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["text"],
  methods: {
    closebox() {
      this.$emit("closebox", "closeTip");
    }
  }
};
</script>

<style>
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
.tips {
  width: 6.39rem;
  height: 4.47rem;
  background: url("../assets/img/box_tips.png") no-repeat top;
  background-size: 100%;
  z-index: 11;
  padding: 1.06rem 0.9rem 0;
  box-sizing: border-box;
  padding: 1.2rem 1rem 0;
  box-sizing: border-box;
}
.tips_text {
  font-size: 0.3rem;
  text-align: left;
}
.close_tips {
  width: 3.86rem;
  margin: 0.8rem auto 0;
}
.close_tips img {
  width: 100%;
  display: block;
}
</style>
