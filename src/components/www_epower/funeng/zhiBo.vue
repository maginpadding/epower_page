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
export default {
  data() {
    return {
      isActive: false,
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
