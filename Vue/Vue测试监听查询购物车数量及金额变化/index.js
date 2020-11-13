window.onload = function () {
  const vm = new Vue({
    el: '#app',
    data: {
      input: '',
      items: [
          {name:'苹果', price:10, count :10, url:'./images/苹果.jpg'},
          {name:'生匣子', price:99.9, count:1, url:'./images/年匣子.jpg'},
          {name:'火龙果', price:23 , count:1, url:'./images/火龙果.jpg'},
          {name:'百香果', price:9.4, count:2, url:'./images/百香果.jpg'},
          {name:'哈密瓜', price:233, count:1, url:'./images/哈密瓜.jpg'},
          {name: '橘子', price:2, count:1, url:'./images/橘子.jpg'},
          {name:'桃子', price:34, count:1, url:'./images/桃子.jpg'},
          {name:'西瓜', price:34, count:1, url:'./images/西瓜.jpg'}
      ]
    },
    // 过滤器
    filters: {
      // data: 过滤器作用的值
      // toFixed(): 方法可把 Number 四舍五入为指定小数位数的数字。
      priceFilter: function (data, i) {
        return '￥' + data.toFixed(i)
      }
    }
  })
}