window.onload = function () {
  // 指定图表的配置项和数据
  var option1 = {
    color: '#FFF', // 图表的颜色
    // backgroundColor: '#d48265',
    title: {
      text: '图表标题', // 标题
      x: 'center', // 居中
      textStyle: { // 标题样式
        color: '#F00'
      }
    },
    tooltip: {},
    legend: {
      data: ['销量']
    },
    xAxis: { // X轴
      data: ["1", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      axisLine: { // 轴线样式
        lineStyle: {
          color: '#FFF'
        }
      }
    },
    yAxis: { // Y轴
      type: 'value',
      axisLine: { // 轴线样式
        lineStyle: {
          color: '#FFF'
        }
      }
    },
    series: [{ // 数量
      // name: '销量',
      data: [5, 20, 36, 10, 10, 20],
      type: 'bar' // 类型
    }],
    grid: { // 位置
      top: '25px',
      right: '0',
      bottom: '10px',
      left: '0',
      containLabel: true // grid 区域是否包含坐标轴的刻度标签
    }
  };

  // 基于准备好的dom，初始化echarts实例
  var myChart1 = echarts.init(document.getElementById('echarts1'));
  // 使用刚指定的配置项和数据显示图表。
  myChart1.setOption(option1);

  // 动态获取数据
  function getData(){
    var request = new XMLHttpRequest();
    request.open('get', 'get_center1')
  }
  getData()


  // 饼图
  option2 = {
    title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [
        {
            // name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
  // 基于准备好的dom，初始化echarts实例
  var myChart2 = echarts.init(document.getElementById('echarts2'));
  // 使用刚指定的配置项和数据显示图表。
  myChart2.setOption(option2);

}