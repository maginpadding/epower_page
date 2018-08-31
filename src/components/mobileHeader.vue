<template>
    <div>
        <!-- 通用的手机版组件,存放rem相关函数以及通用的css -->
    </div>
</template>

<script>
export default {
  mounted() {
    this.change_fontSize(document, window)
  },
  methods: {
    change_fontSize: function(a, b) {
      var c = document.documentElement,
        d = 'orientationchange' in window ? 'orientationchange' : 'resize',
        e = ('orientationchange' in window,
        function() {
          var a = c.clientWidth
          a &&
            (a > 750 ? (a = 750) : a < 320 && (a = 320),
            (c.style.fontSize = 100 * (a / 750) + 'px'))
        })
      window.addEventListener || window.addEventListener(d, e, !1),
        (window.onorientationchange = function() {}),
        e()
    }
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  min-width: 320px;
  max-width: 750px;
  font-family: '微软雅黑';
  font-size: 14px;
  margin: 0 auto;
}
.hide {
  display: none;
}
h1,
h2,
h3,
h4 {
  font-weight: normal;
  margin: 0;
  padding: 0;
}
b{
    font-weight: normal;
}
i{
    font-style: normal;
}
p {
  margin: 0;
}
a {
  text-decoration: none;
}
ul,
li,
ol,
dl,
dt,
dd {
  list-style: none;
}
.color-fff {
  color: #fff;
}
.color-666 {
  color: #666;
}
.color-333 {
  color: #333;
}
.font-32 {
  font-size: 0.32rem;
}
.font-24 {
  font-size: 0.24rem;
}
.font-16 {
  font-size: 0.16rem;
}
.bold {
  font-weight: bold;
}
.text-center {
  text-align: center;
}
.lh-24 {
  line-height: 0.24rem;
}
.lh-36 {
  line-height: 0.36rem;
}
.lh-48 {
  line-height: 0.48rem;
}
.lh-64 {
  line-height: 0.64rem;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.bg-fff {
  background-color: #fff !important;
}
.bg-f5 {
  background-color: #f5f5f5 !important;
}
.bg-transparent {
  background-color: transparent !important;
}
.bg-common {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
}
.mb-20 {
  margin-bottom: 0.2rem;
}
.pd-20 {
  padding: 0 0.2rem;
}
.clearfix {
  clear: both;
  overflow: hidden;
}
.pr {
  position: relative;
}
.po {
  position: absolute;
}
.mod-btn {
  font-size: 16px;
  color: #fff;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  background: #009fe8;
  height: 50px;
  line-height: 50px;
  width: 120px;
  border-radius: 25px;
  -webkit-user-select: none;
}
.mod-btn {
  -webkit-box-shadow: 0 10px 15px -3px rgba(0, 159, 232, 0.5);
  -moz-box-shadow: 0 10px 15px -3px rgba(0, 159, 232, 0.5);
  box-shadow: 0 10px 15px -3px rgba(0, 159, 232, 0.5);
}
.mod-btn-narrow {
  width: 130px;
  margin-right: 15px;
}
.mod-btn:hover {
  color: #fff;
  -webkit-transform: translate(0, 3px);
  -moz-transform: translate(0, 3px);
  transform: translate(0, 3px);
  -webkit-box-shadow: 0 7px 15px -3px rgba(0, 159, 232, 0.5);
  -moz-box-shadow: 0 7px 15px -3px rgba(0, 159, 232, 0.5);
  box-shadow: 0 7px 15px -3px rgba(0, 159, 232, 0.5);
}
.mod-btn {
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.32rem;
}
</style>