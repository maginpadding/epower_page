<template>
  <div class="mobile zhongqiu clearfix bg-common pd-20" id="zhongqiu">
    <mobileHeader></mobileHeader>
    <!-- <div class="bg-banner bg-common"></div> -->
    <div id="rule" class=" bg-common"></div>
    <div id="write_info" class=" clearfix">
      <div class="title bg-common"></div>
      <div class="form">
        <div class="inp_wrap">
          <div class="inp_login">
            <!-- 账号 -->
            <input type="text" class="inp" placeholder="请输入ePower账号" name="user" id="login_name" required>
            <!-- 密码 -->
            <input type="text" class="inp" placeholder="请输入密码" name="password" id="login_password" required>
          </div>

          <!-- 请输入收货人名字 -->
          <input type="text" class="inp" placeholder="请输入收货人名字" name="userName" id="address_name" required>
          <!-- 请输入收货人手机号码 -->
          <input type="text" class="inp" placeholder="请输入收货人手机号码" id="address_mobile" required>
          <!-- 请输入收货地址 -->
          <textarea name="message" id="address_textarea" class="inp" placeholder="请输入收货地址" required></textarea>
        </div>
        <div class="tips">为确保正常收发，请填写详细收件地址。</div>
        <div class="btn receive_btn" id="receive_btn">立即领取</div>
        <a href="http://www.epower.cn/" class="epower_btn">我要成为ePower合作伙伴>></a>
        <div class="copyRight">
          Copyright© 1999-2018
          <br> 杭州电商互联科技有限公司版权所有
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mobileHeader from '../components/mobileHeader.vue'
export default {
  data() {
    return {}
  },
  components: {
    mobileHeader
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      $('#receive_btn').click(function() {
        // 判断是否登录
        var reg_mobile = /^1[34578][0-9]{9}$/
        var login_name = $('#login_name').val()
        var login_password = $('#login_password').val()
        var address_name = $('#address_name').val()
        var address_mobile = $('#address_mobile').val()
        var address_message = $('#address_textarea').val()
        if (login_name == '') {
          layer.open({
            title: '系统提示',
            content: '<div class="tip-content">请输入ePower用户名</div>'
          })
          return false
        }
        if (login_password == '') {
          layer.open({
            title: '系统提示',
            content: '<div class="tip-content">请输入密码</div>'
          })
          return false
        }
        if (address_name == '') {
          layer.open({
            title: '系统提示',
            content: '<div class="tip-content">请输入收货人姓名</div>'
          })
          return false
        }
        if (!reg_mobile.test(address_mobile)) {
          layer.open({
            title: '系统提示',
            content: '<div class="tip-content">请输入收货人手机号</div>'
          })
          return false
        }
        if (address_message == '') {
          layer.open({
            title: '系统提示',
            content: '<div class="tip-content">请输入详细地址</div>'
          })
          return false
        }
        // layer.open({type: 2});
        $.ajax({
          type: 'post',
          url: '/index.php/home/Statistical/index',
          data: {
            login_name: login_name,
            login_password: login_password,
            address_name: address_name,
            address_mobile: address_mobile,
            address_message: address_message
          },
          dataType: 'JSON',
          success: function(res) {
            if (res.result) {
              layer.open({
                title: '系统提示',
                content:
                  '<div class="tip-content">' +
                  res.text +
                  '<br>我们将在一周内发货。</div>'
              })
            } else {
              if (res.text == '此次活动仅限购买授权伙伴参加。') {
                layer.open({
                  title: '系统提示',
                  content:
                    '<div class="tip-content">活动仅限购买授权伙伴参加<br><a href="/shouquan">立即购买授权</a></div>'
                })
                return false
              }
              layer.open({
                title: '系统提示',
                content: '<div class="tip-content">' + res.text + '</div>'
              })
            }
          }
        })
      })
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
b {
  font-weight: normal;
}
i {
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
.bg-common {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
}
.pd-20 {
  padding: 0 0.2rem;
}
.clearfix {
  clear: both;
  overflow: hidden;
}
#zhongqiu {
  width: auto;
  background-image: url('../style/huodong/zhongqiu/zhongqiu.png');
  background-size: cover;
  padding-top: 7rem;
}
#rule {
  width: auto;
  height: 3.2rem;
  background-image: url('../style/huodong/zhongqiu/zhongqiu_rule_bg.png');
}
#write_info .title {
  margin-top: 0.6rem;
  margin-bottom: 0.4rem;
  width: 3.64rem;
  height: 0.34rem;
  margin-left: auto;
  margin-right: auto;
  background-image: url('../style/huodong/zhongqiu/zhongqiu_title.png');
}
#write_info .form {
  width: auto;
}
.inp_wrap {
  padding: 0 0.25rem;
}
#write_info .form .inp {
  width: 100%;
  margin-bottom: 0.3rem;
  height: 0.9rem;
  line-height: 0.9rem;
  font-size: 0.26rem;
  color: #999;
  text-indent: 0.24rem;
  border-radius: 5px;
  display: block;
  background: #fff;
  outline: none;
  border: 0;
}
#write_info .form textarea.inp {
  height: 1.22rem;
  margin-bottom: 0;
  display: block;
}
#write_info .tips {
  width: auto;
  color: #fff;
  line-height: normal;
  margin: 0.15rem auto;
  margin-bottom: 0;
  text-align: center;
  font-size: 0.26rem;
}
#write_info .btn {
  height: 1.8rem;
  background-image: url('../style/huodong/zhongqiu/zhongqiu_btn_0.png');
  background-size: contain;
  font-size: 0.46rem;
  text-align: center;
  line-height: 1.7rem;
  color: #fd642d;
}
#write_info .btn.active {
  background-image: url('../style/huodong/zhongqiu/zhongqiu_btn_1.png');
  color: #999;
}
.epower_btn {
  text-align: center;
  line-height: 0.36rem;
  margin-bottom: 0.36rem;
  text-decoration: underline;
  color: #fff;
  font-size: 0.26rem;
  font-weight: bold;
  width: 3.64rem;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
.copyRight {
  color: #fff;
  text-align: center;
  line-height: 0.36rem;
  font-size: 0.24rem;
  margin-bottom: 0.3rem;
}
</style>


<style>
@import url('../style/css/global.css');
</style>

<style scoped>
</style>

