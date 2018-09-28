<template>
    <div>
        <div class="pay-container bg-f5 clearfix">
            <div class="center-1200">
                <ul id="pay_top" class="pay_top">
                    <li class="active">选择版本</li>
                    <li>支付充值</li>
                    <li>获取授权</li>
                </ul>
                <!-- 选择版本 -->
                <div class="pay-detail bg-fff clearfix">
                    <div class="step_1">
                        <div class="p_name step_div">
                            <label for="" class="p_label">产品名称：</label>
                            <ul class="type_list">
                                <li class="active">普通授权版</li>
                                <li>标准授权版</li>
                                <li>高级授权版</li>
                                <li>独立接口版</li>
                            </ul>
                        </div>
                        <div class="p_price step_div">
                            <label for="" class="p_label">产品价格：</label>
                            <div class="fl color-red" id="p_price">4980元</div>
                            
                        </div>
                        <div class="p_way step_div">
                            <label for="" class="p_label">支付方式：</label>
                            <div class="p_methods">
                                <div class="payment-item">
                                    <input type="radio" id="alipay" name="payType" value="alipay" checked="checked">
                                    <label for="alipay">
                                        <span class="payment-choose payment-alipay"></span>
                                    </label>
                                </div>
                                <div class="payment-item">
                                    <input type="radio" id="weixin" name="payType" value="weixin">
                                    <label for="weixin">
                                        <span class="payment-choose payment-weixin"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="step_div">
                            <label for="" class="p_label"></label>
                            <div class="go_pay fl">
                                <a href="javascript:;" @click="pay()" class="mod-btn fl">去支付</a>
                                <div class="agree fl">
                                    <input type="checkbox" name="" id="agreement" checked>
                                    <label for="agreement">我已阅读理解并接受
                                        <a href="http://"> 《ePower使用协议》</a>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="step_2 hide">
                        <div class="pay_load">
                            <i class="load_icon"></i>
                            <span>支付中</span>
                        </div>
                    </div>
                    <div class="step_3 hide">
                        <div class="icon_success"></div>
                        <div class="pay_success_title">充值成功，请联系客服补全授权资料。</div>
                        <a href="" class="mod-btn">联系客服</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      radio: 1
    }
  },
  methods: {
    pay() {
      $.ajax({
        type: 'post',
        url: '/user/payment/pay.html',
        data: {
            WIDtotal_fee:4980
        },
        dataType: 'JSON',
        success: function(response) {
            console.log(response)
        }
      })
    //   layer.open({
    //     title: ' ',
    //     type: 1,
    //     skin: 'layui-layer-pay', //样式类名
    //     closeBtn: 1, //不显示关闭按钮
    //     anim: 2,
    //     shadeClose: true, //开启遮罩关闭
    //     content: $('.step_2').html(),
    //     btn: ['取消'],
    //     yes: function() {
    //       location.reload()
    //     }
    //   })
    }
  }
}
</script>

<style>
@import url('../assets/css/global.css');
</style>

<style lang="less">
@import url('../style/less/pay.less');
</style>
