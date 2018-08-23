<template>
    <div>
        <div class="box">

            <div class="list">
                <ul>
                    <!-- <li class="p7">
                        <a href="javascript:;"><img src="../../../style/gw_introduce/xz_2.png" alt="" /></a>
                    </li> -->
                    <li class="p6">
                        <a href="javascript:;"><img src="../../../style/gw_introduce/xz_1.png" alt="" /></a>
                    </li>
                    <li class="p5">
                        <a href="javascript:;"><img src="../../../style/gw_introduce/xz_2.png" alt="" /></a>
                    </li>
                    <li class="p4">
                        <a href="javascript:;"><img src="../../../style/gw_introduce/xz_3.png" alt="" /></a>
                    </li>
                    <li class="p3">
                        <a href="javascript:;"><img src="../../../style/gw_introduce/xz_1.png" alt="" /></a>
                    </li>
                    <li class="p2">
                        <a href="javascript:;"><img src="../../../style/gw_introduce/xz_2.png" alt="" /></a>
                    </li>
                    <li class="p1">
                        <a href="javascript:;"><img src="../../../style/gw_introduce/xz_3.png" alt="" /></a>
                    </li>
                </ul>
            </div>

            <a href="javascript:;" class="prev btn"></a>
            <a href="javascript:;" class="next btn"></a>

            <div class="buttons" v-show="false">
                <a href="javascript:;">
                    <span class="white"></span>
                </a>
                <a href="javascript:;">
                    <span></span>
                </a>
                <a href="javascript:;">
                    <span></span>
                </a>
                <!-- <a href="javascript:;">
                    <span></span>
                </a> -->
                <!-- <a href="javascript:;">
                    <span></span>
                </a>
                <a href="javascript:;">
                    <span></span>
                </a>
                <a href="javascript:;">
                    <span></span>
                </a> -->
            </div>
        </div>
    </div>
</template>



<style scoped >
a{
    border: 0;
    outline: none;
}
.box {
  margin-top: 0;
  width: 100%;
  height: 450px;
  position: relative;
}

.list {
  width: 1200px;
  height: 450px;
  overflow: hidden;
  position: absolute;
  left: 50%;
  margin-left: -600px;
}
.mobile .box{
height: 3.9rem;
}
.mobile .list{
    margin-left: -107vw;
}

.btn {
  position: absolute;
  top: 50%;
  margin-top: -50px;
  width: 60px;
  height: 100px;
  line-height: 100px;
  font-size: 30px;
  color: white;
  text-decoration: none;
  text-align: center;
  background: rgba(0, 255, 0, 0.5);
  cursor: pointer;
      background-color: transparent;
    background-size: 30px 60px;
    background-repeat: no-repeat;
    background-position: center center;
    opacity: .8;
}
.next {
  right: -80px;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E")
}

.prev{
    left: -80px;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E")
}
li {
  position: absolute;
  top: 0;
  left: 0;
  list-style: none;
  opacity: 0;
  transition: all 0.3s ease-out;
}
img {
  width: 780px;
  height: 450px;
  border: none;
  float: left;
}
.mobile img {
    width: 5.5rem;
    height: 3.2rem;
    margin-left: 1rem;
    width: 5.2rem;
}
.p1 {
  transform: translate3d(-224px, 0, 0) scale(0.81);
}
.p2 {
  transform: translate3d(0px, 0, 0) scale(0.81);
  transform-origin: 0 50%;
  opacity: 0.8;
  z-index: 2;
}
.p3 {
  transform: translate3d(224px, 0, 0) scale(1);
  z-index: 3;
  opacity: 1;
}
.p4 {
  transform: translate3d(449px, 0, 0) scale(0.81);
  transform-origin: 100% 50%;
  opacity: 0.8;
  z-index: 2;
}
.p5 {
  transform: translate3d(672px, 0, 0) scale(0.81);
}
.p6 {
  transform: translate3d(896px, 0, 0) scale(0.81);
}
.p7 {
  transform: translate3d(1120px, 0, 0) scale(0.81);
}

.buttons {
  position: absolute;
  width: 1200px;
  height: 30px;
  bottom: -40px;
  left: 50%;
  margin-left: -600px;
  text-align: center;
  padding-top: 10px;
  /* display: none; */
  
}
.mobile .buttons{
    display: block;
    bottom: 0;
}
.buttons a {
  display: inline-block;
  width: 35px;
  height: 5px;
  padding-top: 15px;
  cursor: pointer;
}
span {
  display: block;
  width: 35px;
  height: 1px;
  background: #74787a;
}
.white {
  background: #fff;
}
</style>
<style lang="less" scoped>
.mobile{
    .p1 {
  transform: translate3d(-224px, 0, 0) scale(0.9);
}
.p2 {
  transform: translate3d(0px, 0, 0) scale(0.9);
  transform-origin: 0 50%;
  opacity: 0.8;
  z-index: 2;
}
.p3 {
  transform: translate3d(224px, 0, 0) scale(1);
  z-index: 3;
  opacity: 1;
}
.p4 {
  transform: translate3d(449px, 0, 0) scale(0.9);
  transform-origin: 100% 50%;
  opacity: 0.8;
  z-index: 2;
}
.p5 {
  transform: translate3d(672px, 0, 0) scale(0.9);
}
.p6 {
  transform: translate3d(896px, 0, 0) scale(0.9);
}
.p7 {
  transform: translate3d(1120px, 0, 0) scale(0.9);
}
}

</style>
