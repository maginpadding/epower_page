<template>
    <div class="container">
        <div class="header">
            <h1>ePower 安装向导</h1>
            <span>ePower!X3.4 简体中文 UTF8 版 20180101</span>
            <div class="setup step1">
                <h2>开始安装</h2>
                <p>环境以及文件目录权限检查</p>
            </div>
            <div class="stepstat">
                <ul>
                    <li class="current">检查安装环境</li>
                    <li class="unactivated">设置运行环境</li>
                    <li class="unactivated">创建数据库</li>
                    <li class="unactivated last">安装</li>
                </ul>
                <div class="stepstatbg stepstat1"></div>
            </div>
        </div>
        <div class="main">
            <h2 class="title">环境检查</h2>
            <table class="tb" style="margin:20px 0 20px 55px;">
                <tbody>
                    <tr>
                        <th>项目</th>
                        <th class="padleft">Discuz! 所需配置</th>
                        <th class="padleft">Discuz! 最佳</th>
                        <th class="padleft">当前服务器</th>
                    </tr>
                    <tr>
                        <td>操作系统</td>
                        <td class="padleft">不限制</td>
                        <td class="padleft">类Unix</td>
                        <td class="w pdleft1">Linux</td>
                    </tr>
                    <tr>
                        <td>PHP 版本</td>
                        <td class="padleft">5.2</td>
                        <td class="padleft">7.0</td>
                        <td class="w pdleft1">5.5.38</td>
                    </tr>
                    <tr>
                        <td>附件上传</td>
                        <td class="padleft">不限制</td>
                        <td class="padleft">2M</td>
                        <td class="w pdleft1">50M</td>
                    </tr>
                    <tr>
                        <td>GD 库</td>
                        <td class="padleft">1.0</td>
                        <td class="padleft">2.0</td>
                        <td class="w pdleft1">bundled (2.1.0 compatible)</td>
                    </tr>
                    <tr>
                        <td>cURL 库</td>
                        <td class="padleft">不限制</td>
                        <td class="padleft">开启</td>
                        <td class="w pdleft1">开启 7.54.1</td>
                    </tr>
                    <tr>
                        <td>OPcache</td>
                        <td class="padleft">不限制</td>
                        <td class="padleft">开启</td>
                        <td class="w pdleft1">关闭</td>
                    </tr>
                    <tr>
                        <td>磁盘空间</td>
                        <td class="padleft">30MB</td>
                        <td class="padleft">不限制</td>
                        <td class="w pdleft1">27GB</td>
                    </tr>
                </tbody>
            </table>
            <h2 class="title">目录、文件权限检查</h2>
            <table class="tb" style="margin:20px 0 20px 55px;width:90%;">
                <tbody>
                    <tr>
                        <th>目录文件</th>
                        <th class="padleft">所需状态</th>
                        <th class="padleft">当前状态</th>
                    </tr>
                    <tr>
                        <td>./config/config_global.php</td>
                        <td class="w pdleft1">可写</td>
                        <td class="w pdleft1">可写</td>
                    </tr>
                    <tr>
                        <td>./config/config_ucenter.php</td>
                        <td class="w pdleft1">可写</td>
                        <td class="w pdleft1">可写</td>
                    </tr>
                    <tr>
                        <td>./config</td>
                        <td class="w pdleft1">可写</td>
                        <td class="w pdleft1">可写</td>
                    </tr>
                    <tr>
                        <td>./data</td>
                        <td class="w pdleft1">可写</td>
                        <td class="w pdleft1">可写</td>
                    </tr>
                    <tr>
                        <td>./data/cache</td>
                        <td class="w pdleft1">可写</td>
                        <td class="w pdleft1">可写</td>
                    </tr>
                    <tr>
                        <td>./data/avatar</td>
                        <td class="w pdleft1">可写</td>
                        <td class="w pdleft1">可写</td>
                    </tr>
                    <tr>
                        <td>./data/plugindata</td>
                        <td class="w pdleft1">可写</td>
                        <td class="w pdleft1">可写</td>
                    </tr>
                    <tr>
                        <td>./data/download</td>
                        <td class="w pdleft1">可写</td>
                        <td class="w pdleft1">可写</td>
                    </tr>
                    <tr>
                        <td>./data/addonmd5</td>
                        <td class="w pdleft1">可写</td>
                        <td class="w pdleft1">可写</td>
                    </tr>
                    <tr>
                        <td>./data/template</td>
                        <td class="w pdleft1">可写</td>
                        <td class="w pdleft1">可写</td>
                    </tr>
                    <tr>
                        <td>./data/threadcache</td>
                        <td class="w pdleft1">可写</td>
                        <td class="w pdleft1">可写</td>
                    </tr>
                    <tr>
                        <td>./data/attachment</td>
                        <td class="w pdleft1">可写</td>
                        <td class="w pdleft1">可写</td>
                    </tr>
                    <tr>
                        <td>./data/attachment/album</td>
                        <td class="w pdleft1">可写</td>
                        <td class="w pdleft1">可写</td>
                    </tr>
                    <tr>
                        <td>./data/attachment/forum</td>
                        <td class="w pdleft1">可写</td>
                        <td class="w pdleft1">可写</td>
                    </tr>
                    <tr>
                        <td>./data/attachment/group</td>
                        <td class="w pdleft1">可写</td>
                        <td class="w pdleft1">可写</td>
                    </tr>
                    <tr>
                        <td>./data/log</td>
                        <td class="w pdleft1">可写</td>
                        <td class="w pdleft1">可写</td>
                    </tr>
                    <tr>
                        <td>./uc_client/data/cache</td>
                        <td class="w pdleft1">可写</td>
                        <td class="w pdleft1">可写</td>
                    </tr>
                    <tr>
                        <td>./uc_server/data/</td>
                        <td class="w pdleft1">可写</td>
                        <td class="w pdleft1">可写</td>
                    </tr>
                    <tr>
                        <td>./uc_server/data/cache</td>
                        <td class="w pdleft1">可写</td>
                        <td class="w pdleft1">可写</td>
                    </tr>
                    <tr>
                        <td>./uc_server/data/avatar</td>
                        <td class="w pdleft1">可写</td>
                        <td class="w pdleft1">可写</td>
                    </tr>
                    <tr>
                        <td>./uc_server/data/backup</td>
                        <td class="w pdleft1">可写</td>
                        <td class="w pdleft1">可写</td>
                    </tr>
                    <tr>
                        <td>./uc_server/data/logs</td>
                        <td class="w pdleft1">可写</td>
                        <td class="w pdleft1">可写</td>
                    </tr>
                    <tr>
                        <td>./uc_server/data/tmp</td>
                        <td class="w pdleft1">可写</td>
                        <td class="w pdleft1">可写</td>
                    </tr>
                    <tr>
                        <td>./uc_server/data/view</td>
                        <td class="w pdleft1">可写</td>
                        <td class="w pdleft1">可写</td>
                    </tr>
                </tbody>
            </table>
            <h2 class="title">函数依赖性检查</h2>
            <table class="tb" style="margin:20px 0 20px 55px;width:90%;">
                <tbody>
                    <tr>
                        <th>函数名称</th>
                        <th class="padleft">检查结果</th>
                        <th class="padleft">建议</th>
                    </tr>
                    <tr>
                        <td>mysql_connect()</td>
                        <td class="w pdleft1">支持</td>
                        <td class="padleft">无</td>
                    </tr>
                    <tr>
                        <td>gethostbyname()</td>
                        <td class="w pdleft1">支持</td>
                        <td class="padleft">无</td>
                    </tr>
                    <tr>
                        <td>file_get_contents()</td>
                        <td class="w pdleft1">支持</td>
                        <td class="padleft">无</td>
                    </tr>
                    <tr>
                        <td>xml_parser_create()</td>
                        <td class="w pdleft1">支持</td>
                        <td class="padleft">无</td>
                    </tr>
                    <tr>
                        <td>fsockopen()</td>
                        <td class="w pdleft1">支持</td>
                        <td class="padleft">无</td>
                    </tr>
                </tbody>
            </table>
            <form action="/step2" method="post">
                <input type="hidden" name="step" value="2"><input type="hidden" name="uchidden" value="">
                <div class="btnbox marginbot"><input type="button" onclick="history.back();" value="上一步"><input type="submit" value="下一步">
                </div>
            </form>
            <div class="footer">©2001 - 2017
                <a href="http://www.comsenz.com/">Comsenz</a> Inc.</div>
        </div>
    </div>
</template>
