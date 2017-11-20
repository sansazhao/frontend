import Vue from 'vue';
import app from '../../src/App.vue'

Vue.config.productionTip = false;

describe('App.vue', () => {
  it('设置message为『你好世界』', () => {
    let vm = new Vue(app).$mount();
    vm.setMessage('HelloWorld');
    expect(vm.message).toEqual('HelloWorld');
  });
});

