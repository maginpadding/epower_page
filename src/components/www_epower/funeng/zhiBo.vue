<template>
  <div>
    <div class="live-wrap">
      <section class="cat-content" id="cat-content" style="display: block;">
        <div class="container clearfix">
          <div class="container-1200">
            <div class="mod-sub " data-mod="live-courses" data-order="1">
                <h2>免费直播课</h2>
              <div class="js-live-courses mod-live" >
                <div class="live-schedule"  data-sr="enter left,over .7s,move 100px ,wait .1s">
                  <div class="live-schedule-screen" v-for="(item, index) in liveList" :key="index" :class="{active:index==isActive}">
                    <img class="screen-img" alt="课程封面" title="课程封面" :src="'http://www.epower.cn/template/Home/Default/PC/Static/epower/images/yyfn/course_'+(index+1)+'.jpg'">
                    <div class="screen-mask"></div>
                    <div class="screen-bd">
                      <div class="screen-infos">
                        <div class="course-name">
                          <h3>{{item.text.split('】')[0]+'】'}}</h3>
                          <p>{{item.text.split('】')[1]}}</p>
                        </div>
                        <a id="js-course-apply" class="course-apply mod-btn" href="javascript:;" title="立即报名" @click="layerWeixin('http://www.epower.cn/template/Home/Default/PC/Static/epower/images/yyfn/'+(index+2)+'.png')">立即报名</a>
                      </div>
                    </div>
                  </div>
                  <div class="live-schedule-list nano has-scrollbar"  data-sr="enter right,over .7s,move 100px ,wait .1s">
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
                      <div class="nano-slider"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import liveList from '../../../style/js/funeng';
export default {
  data() {
    return {
      isActive: false,
      liveList
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
    },
    layerWeixin(src) {
      //捕获页
      layer.open({
        type: 1,
        title:'微信扫码听课',
        skin: 'layui-layer-weixin', //样式类名
        closeBtn: 1, //不显示关闭按钮
        anim: 1,
        shadeClose: true, //开启遮罩关闭
        content: '<img src="'+src+'" />',
        area:['240px','260px']
      })
    }
  },
  mounted() {}
}
</script>
