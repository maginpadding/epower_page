<template>
    <div class="container">
        <div class="header">
            <h1>Discuz! 安装向导</h1>
            <span>Discuz!X3.4 简体中文 UTF8 版 20180101</span>
            <div class="setup step2">
                <h2>设置运行环境</h2>
                <p>检测服务器环境以及设置 UCenter</p>
            </div>
            <div class="stepstat">
                <ul>
                    <li class="">检查安装环境</li>
                    <li class="current">设置运行环境</li>
                    <li class="unactivated">创建数据库</li>
                    <li class="unactivated last">安装</li>
                </ul>
                <div class="stepstatbg stepstat1"></div>
            </div>
        </div>
        <div class="main">
            <form method="post" action="/step3">
                <input type="hidden" name="step" value="2">
                <input type="hidden" name="install_ucenter" value="">
                <div class="desc">
                    <b><br>
                        <label><input type="radio" checked="checked" name="install_ucenter" value="yes" onclick="if(this.checked)$('form_items_2').style.display='none';"> 全新安装 Discuz! X (含 UCenter Server)</label>
                    </b>
                </div>
                <div class="desc">
                    <b><br>
                        <label><input type="radio" name="install_ucenter" value="no" onclick="if(this.checked)$('form_items_2').style.display='';"> 仅安装 Discuz! X (手工指定已经安装的 UCenter Server)</label>
                    </b>
                </div>
                <div id="form_items_2" style="display:none"><br>
                    <div class="desc">
                        <b>请填写 UCenter 相关信息</b><br>UCenter 是 Comsenz 公司产品的核心服务程序，Discuz! Board 的安装和运行依赖此程序。如果您已经安装了 UCenter，请填写以下信息。否则，请到
                        <a href="http://www.discuz.com/" target="blank">Comsenz 产品中心</a> 下载并且安装，然后再继续。</div>
                    <table class="tb2">
                        <tbody>
                            <tr>
                                <th class="tbopt" align="left">&nbsp;UCenter 的 URL:</th>
                                <td><input type="text" name="ucenter[ucurl]" value="http://dz.87th.cn/ucenter" size="35" class="txt"></td>
                                <td></td>
                            </tr>

                            <tr>
                                <th class="tbopt" align="left">&nbsp;UCenter 的IP地址:</th>
                                <td><input type="text" name="ucenter[ucip]" value="" size="35" class="txt"></td>
                                <td>绝大多数情况下您可以不填</td>
                            </tr>

                            <tr>
                                <th class="tbopt" align="left">&nbsp;UCenter 创始人密码:</th>
                                <td><input type="password" name="ucenter[ucpw]" value="" size="35" class="txt"></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="desc">
                        <b>请填写站点信息</b>
                    </div>
                    <table class="tb2">
                        <tbody>
                            <tr>
                                <th class="tbopt" align="left">&nbsp;站点名称:</th>
                                <td><input type="text" name="siteinfo[sitename]" value="Discuz!" size="35" class="txt"></td>
                                <td></td>
                            </tr>

                            <tr>
                                <th class="tbopt" align="left">&nbsp;站点 URL:</th>
                                <td><input type="text" name="siteinfo[siteurl]" value="http://dz.87th.cn" size="35" class="txt"></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <table class="tb2">
                    <tbody>
                        <tr>
                            <th class="tbopt" align="left">&nbsp;</th>
                            <td><input type="button" name="oldbtn" value="上一步" class="btn" onclick="history.back();">
                                <input type="submit" name="submitname" value="下一步" class="btn">
                            </td>
                            <td></td>
                        </tr>

                    </tbody>
                </table>
            </form>
            <div class="footer">©2001 - 2017
                <a href="http://www.comsenz.com/">Comsenz</a> Inc.</div>
        </div>
    </div>
</template>
