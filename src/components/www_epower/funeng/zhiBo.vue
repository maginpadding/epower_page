<template>
  <div>
    <div class="live-wrap">
      <section class="cat-content" id="cat-content" style="display: block;">
        <div class="container clearfix">
          <div class="container-1200">
            <div class="mod-sub " data-mod="live-courses" data-order="1">
              <h2>免费直播课</h2>
              <div class="js-live-courses mod-live">
                <div class="live-schedule">
                  <div class="live-schedule-screen" v-for="(item, index) in liveList" :key="index" :class="{active:index==isActive}">
                    <img class="screen-img" alt="课程封面" title="课程封面" :src="'http://www.epower.cn/template/Home/Default/PC/Static/epower/images/yyfn/course_'+(index+1)+'.jpg'">
                    <div class="screen-mask"></div>
                    <div class="screen-bd">
                      <div class="screen-infos">
                        <div class="course-name">
                          <h3>{{item.text.split('】')[0]+'】'}}</h3>
                          <p>{{item.text.split('】')[1]}}</p>
                        </div>
                        <a id="js-course-apply" class="course-apply mod-btn" href="javascript:;" title="立即报名">立即报名</a>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="swiper-container"> -->
                    <!-- <div class="swiper-wrapper"> -->
                      <!-- <div class="live-schedule-list nano has-scrollbar swiper-slide"> -->
                      <div class="live-schedule-list nano has-scrollbar">
                        <!-- 时间轴 -->
                        <div class="time-axis"></div>
                        <ul class="nano-content" tabindex="0" style="right: -10px;">
                          <!-- 任务项 -->
                          <li class="list-item task-item" v-for="(item, index) in liveList" :key="index" @mouseenter="mouseEnter(index)" :class="{active:index==isActive}">
                            <a class="item-link" :title="item.text" :href="item.href" target="_blank">
                              <div class="item-wrap">
                                <span class="item-time">{{item.time}}</span>
                                <div class="item-info">
                                  <span class="item-name">{{item.text}}</span>
                                </div>
                              </div>
                              <div class="item-time-point"></div>
                            </a>
                          </li>
                        </ul>
                        <div class="nano-pane">
                            <div class="nano-slider" style="height: 239px; transform: translate(0px, 0px);"></div>
                        </div>
                      </div>
                    <!-- </div> -->
                    <!-- <div class="swiper-scrollbar"></div> -->
                  <!-- </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- 二维码弹框 -->
    <!-- <div class="alert-ewm"></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      imgList: [
        {
          course: 'course_1.jpg',
          ewm: '2.png'
        },
        {
          course: 'course_1.jpg',
          ewm: '2.png'
        }
      ],
      liveList: [
        {
          href:
            'https://m.qlchat.com/wechat/page/topic-intro?topicId=2000001885124813&pro_cl=link&wcl=custom_QLlive',
          text: '【侵权维权】电商行业的知识产权侵权认定以及维权方法',
          index: 'id_8_22',
          time: '08.22'
        },
        {
          href:
            'https://m.qlchat.com/wechat/page/topic-intro?topicId=2000001839768919&pro_cl=link&wcl=custom_QLlive',
          text: '【注册疑难】商标注册中的补正、驳回及复审的解读',
          index: 'id_8_15',
          time: '08.15'
        },
        {
          href:
            'https://m.qlchat.com/wechat/page/get-coupon-topic-batch/2000001775115279?codeId=3000000017320159&officialKey=',
          text:
            '【商标交易】细节披露商标转让过程中存在的问题，包括可能存在的风险',
          index: 'id_8_08',
          time: '08.08'
        },
        {
          href:
            'https://m.qlchat.com/wechat/page/get-coupon-topic-batch/2000001725010373?codeId=3000000016124406&officialKey=',
          text: '【商标查询】图形、组合、颜色及立体商标的审查要点剖析',
          index: 'id_8_01',
          time: '08.01'
        },
        {
          href:
            'https://m.qlchat.com/wechat/page/get-coupon-topic-batch/2000001669509198?codeId=3000000015459724&officialKey=',
          text: '【商标查询】查询的作用以及方式，文字商标查询的方法及重点',
          index: 'id_7_25',
          time: '07.25'
        },
        {
          href:
            'https://m.qlchat.com/wechat/page/get-coupon-topic-batch/2000001634961203?codeId=3000000014707426&officialKey=',
          text:
            '【注册类别】旅游及共享行业商标注册选择，明者因时而变，知者随事而制。',
          index: 'id_7_18',
          time: '07.18'
        },
        {
          href:
            'https://m.qlchat.com/wechat/page/get-coupon-topic-batch/2000001598568130?codeId=3000000014003328&officialKey=',
          text:
            '【注册类别】家是安身立命之本，房产、建材以及家居行业又该如何注册商标',
          index: 'id_7_11',
          time: '07.11'
        },
        {
          href:
            'https://m.qlchat.com/wechat/page/get-coupon-topic-batch/2000001564158431?codeId=3000000009800030&officialKey=',
          text: '【注册类别】民以食为天，食品、商超行业如何选择',
          index: 'id_7_04',
          time: '07.04'
        },
        {
          href:
            'https://m.qlchat.com/wechat/page/get-coupon-topic-batch/2000001529446934?codeId=2000001528385117&officialKey=',
          text: '【注册类别】服装、电商以及餐饮酒店行业如何选择？',
          index: 'id_6_27',
          time: '06.27'
        },
        {
          href:
            'https://m.qlchat.com/wechat/page/get-coupon-topic-batch/2000001494593773?codeId=2000001495078709&officialKey=',
          text: '【商标注册】商标注册内含的千万财富！',
          index: 'id_6_02',
          time: '06.02'
        },
        {
          href:
            'https://m.qlchat.com/wechat/page/get-coupon-topic-batch/2000001458949073?codeId=2000001459952534&officialKey=',
          text:
            '【数字转型】论传统机构及个体从业者，如何快捷高效的布局线上商标业务？',
          index: 'id_6_13',
          time: '06.13'
        }
      ]
    }
  },
  methods: {
    mouseShow(index) {
      console.log(index)
      this.liveList[index][index] = false
    },
    mouseEnter(index) {
      this.isActive = index
    },
    mouseLeave() {
      this.isActive = null
    }
  },
  mounted() {

  }
}
</script>

<style lang="less" scoped>
.alert-ewm {
  background-color: #fff;
}
.container {
  margin-top: 48px;
  background-color: #fff;
}

.container-1200 {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.mod-sub {
  margin-bottom: 55px;
  width: 100%;
}

.mod-sub h2 {
  font-size: 30px;
  line-height: 30px;
  text-align: center;
  position: relative;
}

.mod-sub h2 .btn-more {
  font-size: 16px;
  line-height: inherit;
  color: #333;
  position: absolute;
  right: -3px;
}

.mod-sub h2 .btn-more .icon-font {
  font-weight: 700;
  vertical-align: 1px;
}

.mod-sub h2 .btn-more:hover {
  color: #23b8ff;
}

.mod-gray-bg {
  background-color: #f4f4f4;
  padding: 55px 0;
}

.mod-all-courses {
  text-align: center;
  height: 70px;
  line-height: 60px;
  box-sizing: border-box;
  border: 5px solid #f4f4f4;
  border-radius: 1px;
}

.mod-all-courses-link {
  font-size: 18px;
  color: #333;
}

.mod-all-courses-link .icon-font {
  font-size: 18px;
  font-weight: 700;
  vertical-align: 1px;
}

.mod-all-courses-link:hover {
  color: #23b8ff;
}
.nano {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.nano > .nano-content {
  position: absolute;
  overflow: scroll;
  overflow-x: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.nano > .nano-content:focus {
  outline: thin dotted;
}

.nano > .nano-content::-webkit-scrollbar {
  display: none;
}

.has-scrollbar > .nano-content::-webkit-scrollbar {
  display: block;
}

.nano > .nano-pane {
  background: #dedede;
  position: absolute;
  width: 8px;
  right: 0;
  top: 0;
  bottom: 0;
  visibility: hidden\9;
  opacity: 0.01;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  -o-transition: 0.2s;
  transition: 0.2s;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}

.nano > .nano-pane > .nano-slider {
  background: #a6a6a6;
  position: relative;
  margin: 0 1px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
}

.nano:hover > .nano-pane,
.nano-pane.active,
.nano-pane.flashed {
  visibility: visible\9;
  opacity: 0.99;
}

.mod-live {
  width: 100%;
  margin-top: 30px;
}

.live-schedule-screen {
  width: 620px;
  height: 348px;
  float: left;
  position: relative;
  background-color: #eee;
  box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1),
    inset -1px -1px 0 rgba(0, 0, 0, 0.07);
  display: none;
}
.live-schedule-screen.active {
  display: block;
}

.live-schedule-screen:hover .screen-mask {
  display: block;
}
.screen-bd {
  display: none;
}
.live-schedule-screen:hover .screen-bd {
  display: block;
}
.live-schedule-screen .screen-img {
  width: 100%;
  height: 100%;
}

.live-schedule-screen .screen-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.7;
  filter: alpha(opacity=70);
  display: none;
}

.live-schedule-screen .screen-infos {
  margin-top: 64px;
}

.live-schedule-screen .screen-bd {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
}

.live-schedule-screen .screen-bd .course-name {
  margin: 0 auto;
  width: 482px;
  font-size: 24px;
  line-height: 24px;
  text-shadow: 0 0 20px rgba(102, 102, 102, 0.5);
  text-align: center;
}
.live-schedule-screen .screen-bd .course-name h3 {
  font-size: 28px;
  line-height: 48px;
}
.live-schedule-screen .screen-bd .course-name p {
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 48px;
}
.live-schedule-screen .screen-bd .course-name h3,
.live-schedule-screen .screen-bd .course-name p {
  color: #fff;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-wrap: normal;
  display: block;
}

.live-schedule-screen .screen-bd .course-info {
  position: absolute;
  width: 100%;
  height: 70px;
  line-height: 70px;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  text-align: left;
}

.live-schedule-screen .screen-bd .teacher-info {
  font-size: 18px;
  padding-left: 15px;
  color: #fff;
  max-width: 220px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-wrap: normal;
}

.live-schedule-screen .screen-bd .teacher-info img {
  width: 40px;
  height: 40px;
  margin-right: 8px;
  border-radius: 50%;
}

.live-schedule-screen .screen-bd .course-link {
  display: block;
  position: absolute;
  top: 0;
  right: 15px;
  font-size: 16px;
  color: #fff;
}

.live-schedule-screen .screen-bd .course-link:hover {
  color: #23b8ff;
}

.live-schedule-screen .screen-bd .course-link span {
  float: left;
  max-width: 334px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-wrap: normal;
}

.live-schedule-screen .screen-bd .course-status {
  width: 100%;
  margin-top: 30px;
  line-height: 30px;
}

.live-schedule-screen .screen-bd .course-status .text {
  width: 280px;
  margin: 0 auto;
  font-size: 18px;
  color: #fff;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.69);
}

.live-schedule-screen .screen-bd .course-status .text span {
  color: #23b8ff;
  padding: 0 6px;
  font-weight: 700;
}

.live-schedule-screen .screen-bd .course-apply {
  display: block;
  margin: 30px auto 0;
  background-color: #23b8ff;
  border: 0;
  box-shadow: none;
  outline: none;
}

.live-schedule-screen .screen-bd .icon-live {
  display: inline-block;
  vertical-align: text-bottom;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  background: url(//8url.cn/edu/modules/category/live-courses/img/linux-live.c1ff3138.gif);
}

.live-schedule-list {
  width: auto;
  height: 348px;
  // margin-left: 620px;
  background-color: #f4f4f4;
  border: 1px solid #eee;
  border-left: 0;
  top: -1px;
}

.live-schedule-list .time-axis {
  position: absolute;
  border-left: 2px dotted #e8e8e8;
  height: 100%;
  left: 43px;
  z-index: 1;
}

.live-schedule-list .nano-pane {
  background: #eee !important;
}

.live-schedule-list .nano-pane .nano-slider {
  margin: 0;
  background: #ddd !important;
}

.live-schedule-list .list-item {
  height: 49.71429px;
  line-height: 49.71429px;
  padding: 0 48px;
  position: relative;
  font-size: 16px;
}

.live-schedule-list .list-item .item-time {
  float: left;
  width: 30px;
  padding-left: 25px;
  color: #bbb;
}

.live-schedule-list .list-item .item-time--classing {
  color: #23b8ff;
}

.live-schedule-list .list-item .item-time-point {
  width: 6px;
  height: 6px;
  background: #ccc;
  border: 1px solid #ccc;
  border-radius: 100%;
  position: absolute;
  left: 40px;
  top: 20.85714px;
  z-index: 2;
}

.live-schedule-list .list-item .item-time-icon-live {
  position: absolute;
  left: 32px;
  top: 12.85714px;
  width: 24px;
  height: 24px;
  background: url(//8url.cn/edu/modules/category/live-courses/img/linux-live.c1ff3138.gif);
  z-index: 2;
}

.live-schedule-list .list-item .item-info {
  margin-left: 80px;
  color: #333;
}

.live-schedule-list .slash-item .item-time {
  float: none;
  display: block;
  width: auto;
}

.live-schedule-list .slash-item .item-time-point {
  background: #f4f4f4;
}

.live-schedule-list .task-item .item-link {
  display: block;
}

.live-schedule-list .task-item .item-name {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-wrap: normal;
}

.live-schedule-list .active,
.live-schedule-list .task-item:hover {
  background-color: #fff;
}

.live-schedule-list .active .item-time,
.live-schedule-list .task-item:hover .item-time {
  color: #23b8ff;
}

.live-schedule-list .active .item-time-point,
.live-schedule-list .task-item:hover .item-time-point {
  background-color: #23b8ff;
  border-color: #23b8ff;
}

.live-schedule-list .active .item-info,
.live-schedule-list .task-item:hover .item-info {
  color: #23b8ff;
}

.live-schedule-list .active:after,
.live-schedule-list .task-item:hover:after {
  content: '';
  position: absolute;
  width: 5px;
  height: 100%;
  background-color: #23b8ff;
  left: 0;
  top: 0;
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
  border: 1px solid #fff;
  width: 160px;
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
.mod-btn-green {
  background: #53b958;
  -webkit-box-shadow: 0 10px 15px -3px rgba(83, 185, 88, 0.5);
  -moz-box-shadow: 0 10px 15px -3px rgba(83, 185, 88, 0.5);
  box-shadow: 0 10px 15px -3px rgba(83, 185, 88, 0.5);
}
.mod-btn-green:hover {
  -webkit-box-shadow: 0 7px 15px -3px rgba(83, 185, 88, 0.5);
  -moz-box-shadow: 0 7px 15px -3px rgba(83, 185, 88, 0.5);
  box-shadow: 0 7px 15px -3px rgba(83, 185, 88, 0.5);
}
.mod-btn-black {
  background: #344451;
  -webkit-box-shadow: 0 10px 15px -3px rgba(52, 68, 81, 0.5);
  -moz-box-shadow: 0 10px 15px -3px rgba(52, 68, 81, 0.5);
  box-shadow: 0 10px 15px -3px rgba(52, 68, 81, 0.5);
}
.mod-btn-black:hover {
  -webkit-box-shadow: 0 10px 15px -3px rgba(52, 68, 81, 0.5);
  -moz-box-shadow: 0 10px 15px -3px rgba(52, 68, 81, 0.5);
  box-shadow: 0 10px 15px -3px rgba(52, 68, 81, 0.5);
}
.mod-btn-red {
  background: #fc4861;
  -webkit-box-shadow: 0 10px 15px -3px rgba(252, 72, 97, 0.5);
  -moz-box-shadow: 0 10px 15px -3px rgba(252, 72, 97, 0.5);
  box-shadow: 0 10px 15px -3px rgba(252, 72, 97, 0.5);
}
.mod-btn-red:hover {
  -webkit-box-shadow: 0 10px 15px -3px rgba(252, 72, 97, 0.5);
  -moz-box-shadow: 0 10px 15px -3px rgba(252, 72, 97, 0.5);
  box-shadow: 0 10px 15px -3px rgba(252, 72, 97, 0.5);
}
</style>
