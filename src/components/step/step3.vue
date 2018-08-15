<template>
    <div class="container">
        <div class="header">
            <h1>Discuz! 安装向导</h1>
            <span>Discuz!X3.4 简体中文 UTF8 版 20180101</span>
            <div class="setup step3">
                <h2>安装数据库</h2>
                <p>正在执行数据库安装</p>
            </div>
            <div class="stepstat">
                <ul>
                    <li class="">检查安装环境</li>
                    <li class="">设置运行环境</li>
                    <li class="current">创建数据库</li>
                    <li class="unactivated last">安装</li>
                </ul>
                <div class="stepstatbg stepstat1"></div>
            </div>
        </div>
        <div class="main">
            <form method="post" action="/step4">
                <input type="hidden" name="step" value="3">
                <input type="hidden" name="install_ucenter" value="yes">
                <div id="form_items_3"><br>
                    <div class="desc">
                        <b>填写数据库信息</b>
                    </div>
                    <table class="tb2">
                        <tbody>
                            <tr>
                                <th class="tbopt" align="left">&nbsp;数据库服务器:</th>
                                <td><input type="text" name="dbinfo[dbhost]" value="localhost" size="35" class="txt"></td>
                                <td>数据库服务器地址, 一般为 localhost</td>
                            </tr>

                            <tr>
                                <th class="tbopt" align="left">&nbsp;数据库名:</th>
                                <td><input type="text" name="dbinfo[dbname]" value="ultrax" size="35" class="txt"></td>
                                <td></td>
                            </tr>

                            <tr>
                                <th class="tbopt" align="left">&nbsp;数据库用户名:</th>
                                <td><input type="text" name="dbinfo[dbuser]" value="root" size="35" class="txt"></td>
                                <td></td>
                            </tr>

                            <tr>
                                <th class="tbopt" align="left">&nbsp;数据库密码:</th>
                                <td><input type="text" name="dbinfo[dbpw]" value="root" size="35" class="txt"></td>
                                <td></td>
                            </tr>

                            <tr>
                                <th class="tbopt" align="left">&nbsp;数据表前缀:</th>
                                <td><input type="text" name="dbinfo[tablepre]" value="pre_" size="35" class="txt"></td>
                                <td>同一数据库运行多个论坛时，请修改前缀</td>
                            </tr>

                            <tr>
                                <th class="tbopt" align="left">&nbsp;系统信箱 Email:</th>
                                <td><input type="text" name="dbinfo[adminemail]" value="admin@admin.com" size="35" class="txt"></td>
                                <td>用于发送程序错误报告</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="desc">
                        <b>填写管理员信息</b>
                    </div>
                    <table class="tb2">
                        <tbody>
                            <tr>
                                <th class="tbopt" align="left">&nbsp;管理员账号:</th>
                                <td><input type="text" name="admininfo[username]" value="admin" size="35" class="txt"></td>
                                <td></td>
                            </tr>

                            <tr>
                                <th class="tbopt" align="left">&nbsp;管理员密码:</th>
                                <td><input type="password" name="admininfo[password]" value="" size="35" class="txt"></td>
                                <td>管理员密码不能为空</td>
                            </tr>

                            <tr>
                                <th class="tbopt" align="left">&nbsp;重复密码:</th>
                                <td><input type="password" name="admininfo[password2]" value="" size="35" class="txt"></td>
                                <td></td>
                            </tr>

                            <tr>
                                <th class="tbopt" align="left">&nbsp;管理员 Email:</th>
                                <td><input type="text" name="admininfo[email]" value="admin@admin.com" size="35" class="txt"></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <table class="tb2">
                    <tbody>
                        <tr>
                            <th class="tbopt" align="left">&nbsp;</th>
                            <td><input type="submit" name="submitname" value="下一步" class="btn">
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
