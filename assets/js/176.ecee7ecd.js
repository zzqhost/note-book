(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{592:function(s,t,a){"use strict";a.r(t);var n=a(25),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"基于全局锁实现悲观锁并发控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于全局锁实现悲观锁并发控制","aria-hidden":"true"}},[s._v("#")]),s._v(" 基于全局锁实现悲观锁并发控制")]),s._v(" "),a("h2",{attrs:{id:"悲观锁介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#悲观锁介绍","aria-hidden":"true"}},[s._v("#")]),s._v(" 悲观锁介绍")]),s._v(" "),a("p",[s._v("之前讲解了基于 version 的乐观锁并发控制")]),s._v(" "),a("p",[s._v("在数据建模章节，结合文件系统建模的这个案例，把悲观锁的并发控制，3 种锁粒度都给大家仔细讲解一下")]),s._v(" "),a("p",[s._v("本章讲解：最粗的一个粒度，全局锁")]),s._v(" "),a("p",[s._v("考虑一个场景：多个线程，并发地给 /workspace/projects/helloworld 下的 README.txt 修改文件名")]),s._v(" "),a("ul",[a("li",[s._v("乐观锁：\n"),a("ol",[a("li",[s._v("get current version")]),s._v(" "),a("li",[s._v("带着这个 current version 去执行修改，如果一旦发现数据已经被别人给修改了，\nversion 号跟之前自己获取的已经不一样了; 那么必须重新获取新的 version 号再次尝试修改")])])]),s._v(" "),a("li",[s._v("悲观锁\n"),a("ol",[a("li",[s._v("上来就先加锁")]),s._v(" "),a("li",[s._v("此时就只有你一个能对这数据进行修改")])])])]),s._v(" "),a("h2",{attrs:{id:"全局锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局锁","aria-hidden":"true"}},[s._v("#")]),s._v(" 全局锁")]),s._v(" "),a("p",[s._v("第一种锁，全局锁：直接锁掉整个 fs index")]),s._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("在应用中，利用 "),a("code",[s._v("_create")]),s._v(" 语法，创建空的 doc ，让 es 保证只能有一个被创建成功的思路")])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("PUT /fs/lock/global/_create\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("fs: 你要上锁的那个 index")]),s._v(" "),a("li",[s._v("lock: 就是你指定的一个对这个 index 上全局锁的一个 type")]),s._v(" "),a("li",[s._v("global: 就是你上的全局锁对应的这个 doc 的 id")]),s._v(" "),a("li",[a("code",[s._v("_create")]),s._v("：强制必须是创建，如果 /fs/lock/global 这个 doc 已经存在，那么创建失败，报错")])]),s._v(" "),a("p",[s._v("利用了 doc 来进行上锁 "),a("code",[s._v("/fs/lock/global /index/type/id --\x3e doc")])]),s._v(" "),a("p",[s._v("重复执行该创建语法就会报错，那么没有抢占到锁的线程需要重复此操作")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"error"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"root_cause"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"version_conflict_engine_exception"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"reason"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[lock][global]: version conflict, document already exists (current version [1])"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"index_uuid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IYbj0OLGQHmMUpLfbhD4Hw"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"shard"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"index"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fs"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"version_conflict_engine_exception"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"reason"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[lock][global]: version conflict, document already exists (current version [1])"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"index_uuid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IYbj0OLGQHmMUpLfbhD4Hw"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"shard"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"index"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fs"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("409")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("抢占到该锁的线程，就可以执行各种操作了，比如完成上面的需求，修改文件名称")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("POST /fs/file/"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/_update\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"doc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"README-update.txt"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("操作完成后，释放当前的锁，也就是删除那个空的 doc")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("DELETE /fs/lock/global\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这个时候，另外一个线程就会创建成功，然后执行它自己的逻辑")]),s._v(" "),a("h2",{attrs:{id:"全局锁的优点和缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局锁的优点和缺点","aria-hidden":"true"}},[s._v("#")]),s._v(" 全局锁的优点和缺点")]),s._v(" "),a("ul",[a("li",[s._v("优点：操作非常简单，非常容易使用，成本低")]),s._v(" "),a("li",[s._v("缺点：你直接就把整个 index 给上锁了，这个时候对 index 中所有的 doc 的操作，都会被 block 住，导致整个系统的并发能力很低")])]),s._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("这里只是利用了另外一个 type 来创建空的 doc，这样应该是一条 doc 吧？\n怎么说是整个 index 呢？难道意思是说所有的使用都是用这一个 doc？ "),a("code",[s._v("/fs/lock/global")])]),s._v(" "),a("p",[s._v("如果所有的都用这一个 doc 的话，那么的确的全局的")])]),s._v(" "),a("p",[s._v("什么时候使用？\n上锁解锁的操作不是频繁，每次上锁之后，执行的操作的耗时不会太长")])])},[],!1,null,null,null);t.default=e.exports}}]);