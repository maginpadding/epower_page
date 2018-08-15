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
            <div class="desc">
                <b>安装成功！</b>
                <ul>
                    <li>
                        <em class="red">Access denied for user 'root'@'localhost' (using password: YES)</em>
                    </li>
                </ul><br>
                <span class="red">您必须解决以上问题，安装才可以继续</span><br><br><br><input type="button" onclick="history.back()" value="点击返回上一步"><br><br><br></div>
            <div class="footer">©2001 - 2017
                <a href="http://www.comsenz.com/">Comsenz</a> Inc.</div>
        </div>
    </div>
</template>
