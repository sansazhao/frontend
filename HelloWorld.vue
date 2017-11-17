<template>
  <nav class="navbar navbar-default" role="navigation">
    <h1>{{ msg }}</h1>
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">Link</a></li>
          <li><a href="#">Link</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Curriculum Catelog <span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="http://se.sjtucloud.com/accounts/login?next=/courses/se/SE117-2017/2017_spr/examinationtest/6">Software Engineering</a></li>
              <li><a href="http://ipads.se.sjtu.edu.cn/courses/ics/index.shtml">Introduction to Computer Systems</a></li>
              <li><a href="https://basics.sjtu.edu.cn/~liguoqiang/teaching/Ualgo17/">Theory of Algorithms</a></li>
              <li class="divider"></li>
              <li><a href="http://xsb.seiee.sjtu.edu.cn/xsb/list/239-1-20.htm">Student Affairs</a></li>
              <li class="divider"></li>
              <li><a href="http://www.se.sjtu.edu.cn//">About SE</a></li>
            </ul>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </li>
          </li>
        </ul>
        <form class="navbar-form navbar-left" role="search">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search">
          </div>
          <button type="submit" class="btn btn-default">Submit</button>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">Link</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>
<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Fast Entry to Curriculums for SE-2016',
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
