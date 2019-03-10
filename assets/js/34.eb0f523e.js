(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{396:function(t,a,s){t.exports=s.p+"assets/img/markdown-img-paste-20190303213046518.8bc29f45.png"},397:function(t,a,s){t.exports=s.p+"assets/img/markdown-img-paste-20190303213414289.2a405ce5.png"},642:function(t,a,s){"use strict";s.r(a);var r=s(25),e=Object(r.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"聚合算法讲解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#聚合算法讲解","aria-hidden":"true"}},[t._v("#")]),t._v(" 聚合算法讲解")]),t._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#易并行算法-max"}},[t._v("易并行算法 max")])]),r("li",[r("a",{attrs:{href:"#三角选择原则"}},[t._v("三角选择原则")])]),r("li",[r("a",{attrs:{href:"#近似聚合算法"}},[t._v("近似聚合算法")])])])]),r("p"),t._v(" "),r("h2",{attrs:{id:"易并行算法-max"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#易并行算法-max","aria-hidden":"true"}},[t._v("#")]),t._v(" 易并行算法 max")]),t._v(" "),r("p",[t._v("有些聚合分析的算法，是很容易就可以并行的，比如说 max，流程如下：")]),t._v(" "),r("ul",[r("li",[t._v("假设有 3 和 shard 查找最大值")]),t._v(" "),r("li",[t._v("每个 shard 查找并返回一个最大值")]),t._v(" "),r("li",[t._v("在聚合节点上会拿到 3 个值，然后在这三个值中排序出最大的一个即可")])]),t._v(" "),r("p",[r("img",{attrs:{src:s(396),alt:""}})]),t._v(" "),r("p",[t._v("有些聚合分析的算法是不好并行的，比如说 "),r("code",[t._v("count(distinct)")]),t._v("（去重后统计剩余数量，也就是唯一值个数），\n并不是说在每个 node 上直接就出一些 distinct value 就可以的，因为每个 shard 之间可能还有重复的数据，所以就不准的，\n这个时候就需要从每个 shard 上把所有相关数据都获取过来，然后计算\n如下图")]),t._v(" "),r("p",[r("img",{attrs:{src:s(397),alt:""}})]),t._v(" "),r("p",[t._v("不易并行算法进行聚合的时候，由于数据量可能太大会导致内存占用过多，性能严重影响，甚至内存溢出，\n这个时候 es 会采取近似聚合的方式，就是采用在每个 node 上进行近估计的方式，\n得到最终的结论，如："),r("code",[t._v("cuont(distcint)")]),t._v(" 本来是 100 万，可能会返回 105 万，\n近似估计后的结果，不完全准确，但是速度会很快，一般会达到完全精准的算法的性能的数十倍。")]),t._v(" "),r("p",[t._v("这就会出现一个概念，三角选择原则")]),t._v(" "),r("h2",{attrs:{id:"三角选择原则"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三角选择原则","aria-hidden":"true"}},[t._v("#")]),t._v(" 三角选择原则")]),t._v(" "),r("p",[t._v("精准 + 实时 + 大数据只能选择 2 个")]),t._v(" "),r("ul",[r("li",[t._v("精准+实时: 没有大数据，数据量很小，那么一般就是单机跑，随便你则么玩儿就可以")]),t._v(" "),r("li",[t._v("精准+大数据：hadoop 批处理，非实时，可以处理海量数据，保证精准，可能会跑几个小时")]),t._v(" "),r("li",[t._v("大数据+实时：es，不精准，近似估计，可能会有百分之几的错误率")])]),t._v(" "),r("h2",{attrs:{id:"近似聚合算法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#近似聚合算法","aria-hidden":"true"}},[t._v("#")]),t._v(" 近似聚合算法")]),t._v(" "),r("ul",[r("li",[t._v("如果采取近似估计的算法：延时在 100ms 左右，0.5% 错误")]),t._v(" "),r("li",[t._v("如果采取 100% 精准的算法：延时一般在 ns~几十s，甚至几十分钟，几小时， 0% 错误")])]),t._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("对于这个错误率不知道是怎么出来的，就是一句话数据量非百分百准确")])])])},[],!1,null,null,null);a.default=e.exports}}]);