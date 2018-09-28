<template>
    <div class="mobile">
        <mobileHeader></mobileHeader>
        <div id="payTop">
            <div class="pay_step">
                <div class="step_div">
                    <i class="step_icon">1</i>选择版本</div>
                <div class="step_line"></div>
                <div class="step_div">
                    <i class="step_icon">2</i>支付充值</div>
                <div class="step_line"></div>
                <div class="step_div">
                    <i class="step_icon">3</i>获取版权</div>
            </div>
        </div>
        <div class="step_1 hide">
            <div class="version_list">
                <div class="p_content">
                    <div class="product_li">
                        <h4>普通授权版</h4>
                        <p class="price">4980元</p>
                    </div>
                    <div class="product_li"></div>
                    <div class="product_li"></div>
                    <div class="product_li"></div>
                </div>
            </div>
            <div class="payType">
                <h3>支付方式：</h3>
                <div class="pay_alipay pay_div"></div>
                <div class="pay_weixin pay_div"></div>
            </div>
            <a href="javascript:;" class="pay_btn">去支付</a>
            <div class="payBtn">

            </div>
            <div class="agree"><input type="checkbox" name="protocol" id="protocol" checked>
                <label for="protocol">我已阅读理解并接受
                    <a href="http://bbs.epower.cn/thread-2-1-1.html" target="_blank"> 《ePower使用协议》</a>
                </label>
            </div>
        </div>
        <div class="step_2 hide">
            <div class="pay_load">
                <i class="load_icon"></i>
                <span>支付中</span>
            </div>
        </div>
        <div class="step_3">
            <div class="icon_success"></div>
            <div class="pay_success_title">充值成功，请联系客服补全授权资料。</div>
            <a href="" class="mod-btn">联系客服</a>
        </div>
    </div>
</template>

<script>
import mobileHeader from '../components/mobileHeader'
export default {
  components: {
    mobileHeader
  }
}
</script>

<style lang="less" scoped>
.mobile {
  background: #f7f7f7;
  padding-bottom: 0.6rem;
}
#payTop {
  padding: 0.56rem 0.2rem;
  overflow: hidden;
}
.step_1 {
  padding-bottom: 0.4rem;
}
.pay_step .step_div {
  line-height: 0.36rem;
  font-size: 0.32rem;
  color: #999;
  width: 1.8rem;
  float: left;
  .step_icon {
    width: 0.36rem;
    height: 0.36rem;
    display: inline-block;
    line-height: 0.36rem;
    text-align: center;
    color: #ffffff;
    background: #999999;
    border-radius: 0.25rem;
    vertical-align: -0.02rem;
    margin-right: 0.05rem;
  }
}

.step_line {
  float: left;
  width: 0.6rem;
  height: 0.4rem;
  background: url('../assets/pay/next_line_03.png') no-repeat center center;
  background-size: contain;
  margin-right: 0.15rem;
  margin-left: 0.05rem;
}
.step_line.active {
  background: url('../assets/pay/active_line_03.png') no-repeat center center;
}
.pay_step {
  overflow: hidden;
//   padding-bottom: 0.4rem;
}
.pay_step .step_div.active {
  color: #009fe8;
  .step_icon {
    background: #009fe8;
  }
}
.p_content {
    padding-left: 0.64rem;
  padding-top: 0.4rem;
  overflow: hidden;
  .product_li {
    background: #ffffff;
    float: left;
    width: 2.6rem;
    height: 1.8rem;
    border: solid 1px #cccccc;
    margin-right: 0.4rem;
    margin-bottom: 0.4rem;
    border-radius: 5px;
    padding-top: 0.2rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    text-align: center;
    h4 {
      border-bottom: 1px dashed #ccc;
      line-height: 0.72rem;
      font-size: 0.32rem;
      color: #666666;
    }
    p {
      line-height: 0.6rem;
      font-size: 0.28rem;
      color: #ff0707;
    }
  }
  .product_li:nth-child(3),
  .product_li:nth-child(4) {
    margin-bottom: 0.2rem;
  }
  .product_li.active {
    border: solid 1px #009fe8;
    box-shadow: #009fe8 0 0 5px;
    h4 {
      color: #009fe8;
      border-bottom: 1px dashed #009fe8;
    }
  }
}
.payType {
  overflow: hidden;
  padding: 0 0.7rem;
  margin: 0 auto;
  padding-bottom: 0.48rem;
  h3 {
    font-size: 0.32rem;
    line-height: 0.76rem;
    text-align: left;
    color: #666;
  }
}
.pay_div {
  border: 1px solid #ccc;
  height: 0.72rem;
  width: 2.64rem;
  float: left;
}
.pay_div.active {
  border: solid 1px #009fe8;
  box-shadow: #009fe8 0 0 5px;
}
.pay_alipay {
  margin-right: 0.4rem;
  background: #fff url('../assets/pay/pay_type_03.png') no-repeat center center;
  background-size: contain;
}
.pay_weixin {
  background: #fff url('../assets/pay/pay_type_05.png') no-repeat center center;
  background-size: contain;
}
.pay_btn {
  text-align: center;
  line-height: 0.7rem;
  width: 3rem;
  height: 0.7rem;
  margin: 0 auto;
  border-radius: 0.5rem;
  box-shadow: #009fe8 0 0 5px;
  background: #009fe8;
  margin-bottom: 0.3rem;
  display: block;
  color: #fff;
  font-size: 0.32rem;
}
.agree {
  font-size: 0.28rem;
  color: #666;
  text-align: center;
  input {
    vertical-align: middle;
  }
  a {
    color: #009fe8;
  }
}


.pay_load {
  line-height: 48px;
  height: 48px;
  text-align: center;
  margin: .56rem 1.8rem;
  .load_icon {
    width: .48rem;
    height: .48rem;
    display: inline-block;
    background: url('../assets/pay/loading-1.gif') no-repeat center center;
    background-size: contain;
    vertical-align: middle;
  }
  span {
    display: inline-block;
    line-height: .48rem;
    vertical-align: middle;
  }
}

.layui-layer-pay .layui-layer-btn {
  background: #f8f8f8;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
}


  .icon_success {
    width: 1rem;
    height: 1rem;
    margin: 0 auto;
    background: url('../assets/pay/pay_icon_07.png') no-repeat center center;
    background-size: contain;
  }
  .pay_success_title {
    font-size: .32rem;
    color: #333;
    text-align: center;
    line-height: 1rem;
    margin-bottom: 1.2rem;
  }
  .step_3{
      background: #ffffff;
      margin: 0 .2rem;
      width: auto;
      overflow: hidden;
      padding-top: 1.5rem;
      padding-bottom: 0.5rem;
  }
  .step_3 a {
    margin: 0 auto;
    display: block;
    width: 3rem;
    height: 0.72rem;
    text-align: center;
    line-height: 0.72rem;
    color: #fff;
    font-size: 0.28rem;
    border-radius: .5rem;
    background: #009fe8;
    box-shadow: #009fe8 0 0 5px;
  }
</style>
