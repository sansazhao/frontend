<template>
  <nav class="navbar navbar-default" role="navigation">
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-user" style="text-shadow: black 2px 1px 1px"></span> Register</a></li>
      <li><a href="#"><span class="glyphicon glyphicon-log-in" style="text-shadow: black 2px 1px 1px"></span>       Login    </a></li>
    </ul>
    <h2>{{ msg }}</h2>
    <div id="myCarousel" class="carousel slide">
      <!-- 轮播（Carousel）指标 -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
        <li data-target="#myCarousel" data-slide-to="4"></li>
      </ol>
      <!-- 轮播（Carousel）项目 -->
      <div class="carousel-inner">
        <div class="item active">
          <img src="../static/3.jpg" style="height: 550px; width: 980px"alt="First slide">
        </div>
        <div class="item">
          <img src="../static/5.jpg" alt="Second slide">
        </div>
        <div class="item">
          <img src="../static/2.jpg" style="height: 550px; width: 980px"alt="Third slide">
        </div>
        <div class="item">
          <img src="../static/6.jpg" style="height: 550px; width: 980px"alt="Forth slide">
        </div>
        <div class="item">
          <img src="../static/1.jpg" style="height: 550px; width: 980px"alt="Fifth slide">
        </div>
      </div>
      <!-- 轮播（Carousel）导航 -->
      <a class="carousel-control left" href="#myCarousel"
         data-slide="prev">&lsaquo;
      </a>
      <a class="carousel-control right" href="#myCarousel"
         data-slide="next">&rsaquo;
      </a>
    </div>
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
    </div>
    <nav class="navbar navbar-fixed-top"  role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Directory</a>
        </div>
        <div>
          <ul class="nav navbar-nav">
            <li class="dropdown" >
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                Life  <b class="caret"></b>
              </a>
              <ul class="dropdown-menu" >
                <li><a href="electsys.sjtu.edu.cn/edu/">
                  Information in SJTU</a></li>
                <li><a href="https://www.dianping.com/search/keyword/1/0_闵行区">
                  Eating in Min Big Huang</a></li>
                <li><a href="http://www.ctrip.com/?utm_source=baidu&utm_medium=cpc&utm_campaign=baidu81&campaign=CHNbaidu81&adid=index&gclid=&isctrip=T">
                  Traveling </a></li>
                <li class="divider"></li>
                <li><a href="#" v-on:click="help">Need Help?</a></li>
              </ul>
            </li>
          </ul>
          <ul class="nav navbar-nav">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                Learning <b class="caret"></b>
              </a>
              <ul class="dropdown-menu">
                <li><a href="http://se.sjtucloud.com/accounts/login?next=/courses/se/SE117-2017/2017_spr/examinationtest/6">
                  Software Engineering</a></li>
                <li><a href="http://ipads.se.sjtu.edu.cn/courses/ics/index.shtml">
                  Introduction to Computer Systems</a></li>
                <li><a href="https://basics.sjtu.edu.cn/~liguoqiang/teaching/Ualgo17/">
                  Theory of Algorithms</a></li>
                <li><a href="https://mooc.guokr.com/">MOOC</a></li>
                <li><a href="https://www.coursera.org/">Coursera</a></li>
                <li class="divider"></li>
                <li><a href="http://xsb.seiee.sjtu.edu.cn/xsb/list/239-1-20.htm">Student Affairs</a></li>
              </ul>
            </li>
          </ul>
          <ul class="nav navbar-nav">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                Interests <b class="caret"></b>
              </a>
              <ul class="dropdown-menu">
                <li><a href="https://www.bilibili.com/">bilibili</a></li>
                <li><a href="https://www.zhihu.com/">Zhihu</a></li>
                <li class="divider"></li>

              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">Back to top</a></li>
        </ul>
        <form class="navbar-form navbar-center" role="search">Others:
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search" v-model="_input1" ref="input1">
          </div>
          <button type="submit" class="btn btn-default" v-on:click="Login">Submit</button>
        </form>
      </div><!-- /.navbar-collapse -->
    <button class="btn btn-primary navbar-right" data-toggle="modal" data-target="#myModal">Contact us</button>

    <blockquote class="pull-right">
      <small>A convenient and useful website for you. </small>
    </blockquote>
    <!-- 按钮触发模态框 -->
    <!-- 模态框（Modal） -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="myModalLabel">Warning</h4>
          </div>
          <div class="modal-body">There is something wrong with the Internet.</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">close</button>
            <!--<button type="button" class="btn btn-primary" data-dismiss="modal">submit</button>-->
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal -->
    </div>

  </nav>

</template>
<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Information Website for SE-2016',
        bind: '',
        msg2: 'msg2',
        arr: ['a', 'b', 'c', 'd'],
        input1:''
      }
    },
    methods: {
      Login: function () {
        var to = this.$refs.input1.value.toString();
        window.open("https://www.baidu.com/s?wd="+to);
        // window.location.href="http://www.se.sjtu.edu.cn//";
        // window.location.href 也是可以的 看你有没有用vue-router
      },
      help : function() {
        alert("You can call 54749110 for help!");
      },
    }
  }

</script>

