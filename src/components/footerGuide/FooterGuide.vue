<template>
  <div class="footer-guide">
      <span class="footer-guide-item " :class="{on:$route.path==='/miste'}" @click="goto('/miste')">
        <span class="iconfont icon-shouye"></span>
        <span><i>首页</i></span>
      </span>
      <span class="footer-guide-item" :class="{on:$route.path==='/search'}" @click="goto('/search')">
        <span class="iconfont icon-sousuo"></span>
        <span><i>搜索</i></span>
      </span>
      <span class="footer-guide-item" :class="{on:$route.path==='/order'}" @click="goto('/order')">
        <span class="iconfont icon-ding_huabanfuben"></span>
        <span><i>订单</i></span>
      </span>
      <span class="footer-guide-item" :class="{on:$route.path==='/profile'}" @click="goto('/profile')">
        <span class="iconfont icon-tubiaozhizuomoban"></span>
        <span><i>个人</i></span>
      </span>
  </div>
</template>

<script>
export default {

  methods:{
    
    goto(path1){
      if(this.$route.path!==path1){
        this.$router.replace(path1)
      }
      
    }
  }
}
</script>

<style lang="stylus">
  @import '../../common/stylus/mixins.styl';
  .footer-guide{
    position fixed
    left 0
    bottom 0
    height 50px
    width 100%
    display flex
    .footer-guide-item{
      flex 1
      display flex
      text-align center
      flex-direction column
      &.on{
        color $green
      } 
        
      span{
        padding 2px
        font-size 18px
      }
      i{
        font-size 18px
      }       
    }
  }
</style>