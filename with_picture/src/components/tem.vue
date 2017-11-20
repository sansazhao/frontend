<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <ul>
        账号: <input type="text" v-model="stuNumber">
        密码: <input type="text" v-model="passW">
        <button v-on:click="Login">login</button>
      </ul>
      <input
        type="checkbox"
        v-model="state"
        v-bind:true-value="a"
        v-bind:false-value="b">
      <p>{{ toggle }}</p>
      <p>Message: {{ toggle }}</p>
      <ul>
        <li v-for="value in arr">
          {{ value }}
        </li>
      </ul>
      <br>
      <span v-bind:title="time">
        鼠标悬停冒泡
      </span>
      <br>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        bind: '',
        msg2: 'msg2',
        arr: ['a', 'b', 'c', 'd'],
        time: 'time',
        stuNumber: '',
        passW: '',
        a: '勾选',
        b: '不勾选'
      }
    },
    methods: {
      Login: function () {
        this.stuNumber = ''
        this.passW = ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  input {
    color: grey;
  }

</style>

