<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive><router-view :seller="seller"></router-view></keep-alive>
  </div>
</template>

<script>
import header from './components/header/header.vue'
import {urlParse} from './commom/js/until.js'

export default {
  name: 'App',
  data () {
    return {
      seller: {
        id: (() => {
          let queryParam = urlParse();
          return queryParam.id;
        })()
      }
    }
  },
  created () {
    this.$http.get('/api/seller?id='+ this.seller.id).then((response) => {
      response = response.body;
      if(response.errno === 0) {
        this.seller = Object.assign({}, this.seller, response.data);
      }
    })
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    position: relative;
    .tab-item {
      flex: 1;
      text-align: center;
      a.active {
        color: rgb(240, 20, 20);
      }
      a {
        display: block;
        font-size: 14px;
        color: #4d555d;
        text-decoration: none;
      }
    }
  }
  .tab:after {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-top: 1px solid rgba(7,17,27,0.1);
    content: "";
  }
}
</style>
