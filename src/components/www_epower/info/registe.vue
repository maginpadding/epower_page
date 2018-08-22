<template>
    <div>
        <div class="registe">
            <div class="center-1000">
                <div class="re-info user_name">
                    <i class="re-icon"></i>
                    <input type="text" class="re-input" name="user_name" placeholder="您的名字？">
                </div>
                <div class="re-info user_phone">
                    <i class="re-icon"></i>
                    <input type="text" class="re-input" name="user_phone" placeholder="您的手机号码？">
                </div>
                <div class="re-info user_psd">
                    <i class="re-icon"></i>
                    <input type="password" class="re-input" name="user_psd" placeholder="请设置您的密码">
                </div>
                <div class="re-info mod-btn" id="fast_reg" @click="layerShow()">立即注册</div>
            </div>
        </div>
        <div class="content-html hide">
            <div class="layer-html">
                <input type="hidden" name="user_name" id="user_name">
                <input type="hidden" name="user_phone" id="user_phone">
                <input type="hidden" name="user_psd" id="user_psd">
                <div class="layer-phone">
                    <div class="layer-html-label fl">您的手机:</div>
                    <input class="layer-html-input fl">
                    <span class="layer-tips fl">*</span>
                    <div class="layer-html-tip fl">您也可以更换验证手机</div>
                </div>
                <div class="layer-code">
                    <div class="layer-html-label">验证码:</div>
                    <input class="layer-html-code" value="" id="check_code">
                    <button type="button" class="layer-html-btn">获取验证码</button>
                </div>
                <!-- <div class="layer-yz-btn">立即验证</div> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted(){
        this.layerShow();
    },
    methods: {
        layerShow: function() {
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        var user_name = $('.re-input[name="user_name"]').val();
        var user_phone = $('.re-input[name="user_phone"]').val();
        var user_psd = $('.re-input[name="user_psd"]').val();
        if(!user_name || !user_phone || !user_psd){
            layer.msg('请输入必填项！',{time:800});
            return false;
        }
      layer.open({
        title:'请验证您的手机！',
        area: [520,200],
        type: 1,
        skin: 'layui-layer-reg', //样式类名
        closeBtn: 1, //不显示关闭按钮
        anim: 2,
        shadeClose: true, //开启遮罩关闭
        content: $('.content-html').html(),
        btn: ['立即验证'],
        yes:function(){
            
        }
      })
    },
    isPoneAvailable: function($poneInput){
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test($poneInput.val())) {
            return false;
        } else {
            return true;
        }
    }
  }
}
</script>
<style lang="less">
.hide {
  display: none;
}
.fl {
  float: left;
}
.layui-layer-reg * {
  box-sizing: border-box;
}
.layui-layer-reg {
    .layui-layer-btn{
        text-align: left;
        margin-left: 110px;
        padding-bottom: 30px;
    }
    .layui-layer-btn0 {
    width: 140px;
    height: 40px;
    color: #ffffff;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    border-radius: 25px;
    background: #009fe8;
  }
  .layui-layer-title {
    background: #009fe8;
    color: #ffffff;
    height: 40px;
    line-height: 40px;
  }
  a{
      outline: none;
      border: 0;
  }
  .layui-layer-setwin .layui-layer-close1{
      background: url("../../../style/single/layer-close.png") no-repeat center center;
      background-size: contain;
  }
  .layui-layer-setwin{
      top: 13px;
  }
}
.layer-html {
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
  padding-top: 40px;
//   padding-bottom: 30px;
  overflow: hidden;
  .layer-phone,
  .layer-code {
    overflow: hidden;
    margin-bottom: 20px;
    height: 32px;
    line-height: 32px;
  }
  .layer-code {
    margin-bottom: 10px;
  }
  .layer-html-label {
    width: 120px;
    height: 32px;
    line-height: 32px;
    text-align: right;
    float: left;
    font-size: 14px;
    color: #666;
    margin-right: 10px;
  }
  .layer-tips {
    color: #e2383a;
    width: 16px;
    text-align: center;
    height: 32px;
    line-height: 36px;
    font-size: 14px;
  }
  .layer-html-tip {
    color: #999999;
    font-size: 12px;
    width: 170px;
    height: 32px;
    line-height: 32px;
  }
  input {
    float: left;
    width: 200px;
    height: 32px;
    border-radius: 5px;
    border: #e6e6e6;
    padding-left: 8px;
    border: solid 1px #e6e6e6;
    line-height: 30px;
    font-size: 16px;
    color: #829398;
  }
  .layer-html-code {
    width: 100px;
    margin-right: 10px;
  }
  .layer-html-btn {
    width: 90px;
    height: 32px;
    border-radius: 5px;
    border: #e6e6e6;
    border: solid 1px #e6e6e6;
    text-align: center;
    line-height: 32px;
    font-size: 12px;
    color: #333333;
  }
  .layer-yz-btn {
    width: 140px;
    height: 40px;
    color: #ffffff;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    border-radius: 25px;
    background: #009fe8;
    margin-left: 130px;
  }

}
* {
  margin: 0;
  padding: 0;
}
.re-fixed {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  display: none;
}
.registe * {
  box-sizing: border-box;
}
input,
button {
  outline: none;
  border: 0;
  background-color: transparent;
}
.registe {
  background: #fff;
  height: 120px;
  box-sizing: border-box;
  padding: 35px 0;
  .center-1000 {
    width: 1000px;
    margin: 0 auto;
  }
  .re-info {
    float: left;
    width: 240px;
    height: 50px;
    margin-right: 30px;
    border: solid 1px #829398;
    line-height: normal;
    position: relative;
    margin-right: 30px;
    border-radius: 5px;
    .re-icon {
      height: 48px;
      width: 36px;
      position: absolute;
      left: 10px;
      top: 0;
      display: block;
      background-repeat: no-repeat;
      background-position: center center;
    }

    .re-input {
      line-height: 48px;
      left: 48px;
      top: 0;
      width: 192px;
      height: 48px;
      position: absolute;
         font-size: 16px;
    color: #829398;
    }
  }
  .re-info.active {
    border-color: #009fe8;
  }
  .user_name .re-icon {
    background-image: url('../../../style/single/re_icon1.png');
    background-size: 16px 21px;
  }
  .user_phone .re-icon {
    background-image: url('../../../style/single/re_icon2.png');
    background-size: 12px 21px;
  }
  .user_psd .re-icon {
    background-image: url('../../../style/single/re_icon3.png');
    background-size: 18px 21px;
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
    width: 180px;
    border-radius: 25px;
    -webkit-user-select: none;
    cursor: pointer;
    margin-right: 0;
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
}
</style>

