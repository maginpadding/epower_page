<template>
    <div>
        <div class="zx-hot-news choice-reason">
            <div class="section-title">资讯热点</div>
            <ul class="new-list">
                <li>
                    <span class="title fl">【商标服务】</span>
                    <span class="desc fl">义乌红糖”取得首个地理证明...</span>
                    <span class="time fl">2017-10-07</span>
                </li>
            </ul>
            <a class="look-btn">查看更多>></a>
        </div>
    </div>
</template>

<style lang="less" scoped>
.zx-hot-news {
  .new-list {
    height: 2.72rem;
    padding: 0 0.2rem;
    li {
      height: 0.52rem;
      padding-bottom: 0.2rem;
      .title {
        color: #333;
        width: 25%;
      }
      span {
        font-size: 0.24rem;
        line-height: 0.32rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .desc {
        color: #666;
        width: 55%;
      }
      .time {
        color: #999;
        width: 20%;
      }
    }
  }
  .look-btn {
    display: block;
    color: #e2383a;
    line-height: 0.36rem;
    height: 0.36rem;
    width: 1.6rem;
    margin: 0 auto;
    margin-bottom: 0.5rem;
    font-size: 0.28rem;
  }
}
</style>

