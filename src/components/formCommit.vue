<template>
    <div>
        <div class="commit" style="background: #000 url('http://user.epower.cn/template/Home/Default/PC/Static/img/bg4.jpg') no-repeat center">
            <div class="center-1200">

                <div class="wrap clearfix hideshow on" data-topb="3378.0499755859373" data-tops="4831.8499755859375">
                    <!--提交需求表单-->
                    <form action="build/demand_save" method="post" class="applyform" id="applyform" name="applyform">

                        <div class="fix_1 clearfix">
                            <h4>
                                <font>提交我的需求</font>
                                <span>请认真填写需求信息,我们会尽快和您取得联系</span>
                            </h4>
                        </div>
                        <div class="fix_2 clearfix">
                            <div class="fl">
                                <p class="insf_1">
                                    <input type="text" id="Company" name="Company" required placeholder="公司名称" style="background-image: url('http://user.epower.cn/template/Home/Default/PC/Static/img/insf_1.png')">
                                    <span class="Validform_checktip"></span>
                                </p>
                                <p class="insf_2">
                                    <input type="text" id="tel" name="tel" datatype="m" required altercss="gray" sucmsg=" " errormsg=" " nullmsg=" " placeholder="联系电话" style="background-image: url('http://user.epower.cn/template/Home/Default/PC/Static/img/insf_2.png')">
                                    <span class="Validform_checktip"></span>
                                </p>
                                <div class="insf_3 clearfix">
                                    <p class="insf_3-1 fl">
                                        <input type="text" id="UserName" name="UserName" datatype="*" altercss="gray" sucmsg=" " errormsg=" " nullmsg=" " placeholder="联系人" style="background-image: url('http://user.epower.cn/template/Home/Default/PC/Static/img/insf_3.png')">
                                        <span class="Validform_checktip" style="left: 190px;"></span>
                                    </p>
                                    <p class="insf_3-2 fl">
                                        <input type="text" id="QQ" name="QQ" placeholder="QQ" style="background-image: url('http://user.epower.cn/template/Home/Default/PC/Static/img/insf_4.png')">
                                    </p>
                                </div>
                            </div>
                            <div class="fr">
                                <p class="insf_4">
                                    <textarea id="Content" name="Content" datatype="*" altercss="gray" nullmsg=" " errormsg=" " sucmsg=" " required placeholder="需求" style="background-image: url('http://user.epower.cn/template/Home/Default/PC/Static/img/insf_5.png')"></textarea>
                                    <span class="Validform_checktip"></span>
                                </p>
                                <p class="insf_5">
                                    <input type="text" id="checkcode" name="checkcode" maxlength="4" style="width:150px;background-image: url('http://user.epower.cn/template/Home/Default/PC/Static/img/insf_6.png')" datatype="*" altercss="gray" sucmsg=" " errormsg=" " nullmsg=" " placeholder="验证码">
                                    <span class="Validform_checktip" style="left:190px;"></span>
                                </p>
                                <span class="yzm">
                                    <a href="javascript:changecode2014()" class="ccode" title="不清楚？点击换个图片">
                                        <img src="http://user.epower.cn/?m=api&c=captcha&rnd=0.09758999459099726" alt="不清楚？换一张" id="cc" align="absmiddle" style="height:35px" class="show-captcha"></a>
                                </span>
                                <input class="zzz" type="submit" value="提交项目需求">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
</template>
<style scoped>
.commit {
  width: 100%;
  overflow: hidden;
}

.commit {
  height: 415px;
}

.commit .fix_1 {
  padding: 60px 0 42px 0;
}

.commit .fix_1 h4 {
  float: left;
}

.commit .fix_1 h4 font {
  display: block;
  font-size: 30px;
  color: #fff;
  line-height: 42px;
}

.commit .fix_1 h4 span {
  display: block;
  font-size: 14px;
  color: #a6c5e7;
  line-height: 30px;
}

.commit .fix_1 input {
  float: right;
  width: 260px;
  height: 50px;
  margin: 11px 25px 11px 0;
  border: none;
  border-radius: 3px;
  background: #0af;
  font-size: 16px;
  color: #fff;
}

.zzz {
  float: right;
  width: 220px;
  height: 45px;
  border: none;
  border-radius: 3px;
  background: #0af;
  font-size: 16px;
  color: #fff;
}

.commit .fix_2 p {
  width: 560px;
  height: 45px;
  margin-bottom: 10px;
  border-radius: 3px;
  background: #5ca6db;
}

.commit .fix_2 p input {
  width: 100%;
  height: 45px;
  padding-left: 35px;
  border: none;
  background: no-repeat 10px center;
  box-sizing: border-box;
  font-size: 14px;
  color: #fff;
  line-height: 45px;
}

.commit .fix_2 p input::-webkit-input-placeholder {
  color: #fff;
}

.commit .fix_2 .insf_3-1 {
  width: 234px;
}

.commit .fix_2 .insf_3-2 {
  width: 314px;
  margin-left: 12px;
}

.commit .fix_2 .insf_4 {
  width: 580px;
  height: 100px;
  border-radius: 3px;
}

.commit .fix_2 .insf_4 textarea {
  width: 100%;
  height: 100px;
  padding: 12px 40px;
  border: none;
  box-sizing: border-box;
  font-size: 14px;
  color: #fff;
  line-height: 20px;
      background-color: #5ca6db;
      background-repeat: no-repeat;
      background-position: 10px 10px;
}

.commit .fix_2 .insf_4 textarea::-webkit-input-placeholder {
  color: #fff;
}

.commit .fix_2 .insf_5 {
  float: left;
  width: 240px;
}

.commit .fix_2 > span {
  float: left;
  width: 97px;
  height: 45px;
  margin-left: 10px;
  border-radius: 3px;
  background: #fff;
}

.spe.commit .fix_2 p {
  background: #525b66;
}

.yzm {
  display: inline-block;
  height: 45px;
  line-height: 45px;
  margin-left: 10px;
}
</style>
