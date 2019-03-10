(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{590:function(e,a,t){"use strict";t.r(a);var l=t(25),_=Object(l.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"内置分词器和分词器是什么？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内置分词器和分词器是什么？","aria-hidden":"true"}},[e._v("#")]),e._v(" 内置分词器和分词器是什么？")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#什么是分词器"}},[e._v("什么是分词器")])]),t("li",[t("a",{attrs:{href:"#内置分词器的介绍"}},[e._v("内置分词器的介绍")])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"什么是分词器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是分词器","aria-hidden":"true"}},[e._v("#")]),e._v(" 什么是分词器")]),e._v(" "),t("p",[e._v("切分词语，normalization（提升 recall 召回率）")]),e._v(" "),t("p",[e._v("给你一段句子，然后将这段句子拆分成一个一个的单个的单词，同时对每个单词进行 normalization（时态转换，单复数转换）分词器")]),e._v(" "),t("p",[e._v("recall，召回率：搜索的时候，增加能够搜索到的结果的数量")]),e._v(" "),t("p",[e._v("分词器主要由三个部分组成：")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("character filter")]),e._v(" "),t("p",[e._v("在一段文本进行分词之前，先进行预处理，比如说最常见的就是，")]),e._v(" "),t("ul",[t("li",[e._v("过滤 html 标签（"),t("code",[e._v("<span>hello<span>")]),e._v(" --\x3e hello）")]),e._v(" "),t("li",[e._v("& --\x3e and（I&you --\x3e I and you）")])])]),e._v(" "),t("li",[t("p",[e._v("tokenizer：分词")]),e._v(" "),t("p",[e._v("比如：hello you and me --\x3e hello, you, and, me")])]),e._v(" "),t("li",[t("p",[e._v("token filter：")]),e._v(" "),t("p",[e._v("比如 lowercase，stop word，synonymom，")]),e._v(" "),t("ul",[t("li",[e._v("dogs --\x3e dog")]),e._v(" "),t("li",[e._v("liked --\x3e like")]),e._v(" "),t("li",[e._v("Tom --\x3e tom")]),e._v(" "),t("li",[e._v("a/the/an --\x3e 干掉")]),e._v(" "),t("li",[e._v("mother --\x3e mom")]),e._v(" "),t("li",[e._v("small --\x3e little")])])])]),e._v(" "),t("p",[e._v("一个分词器，很重要，将一段文本进行各种处理，最后处理好的结果才会拿去建立倒排索引")]),e._v(" "),t("h2",{attrs:{id:"内置分词器的介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内置分词器的介绍","aria-hidden":"true"}},[e._v("#")]),e._v(" 内置分词器的介绍")]),e._v(" "),t("p",[e._v("比如一句话：Set the shape to semi-transparent by calling set_trans(5)")]),e._v(" "),t("p",[e._v("被以下 4 种分词器（内置常用）处理之后，会得到不同的结果：")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("standard analyzer （默认）")]),e._v(" "),t("p",[e._v("set, the, shape, to, semi, transparent, by, calling, set_trans, 5（默认的是standard）")])]),e._v(" "),t("li",[t("p",[e._v("simple analyzer")]),e._v(" "),t("p",[e._v("set, the, shape, to, semi, transparent, by, calling, set, trans")])]),e._v(" "),t("li",[t("p",[e._v("whitespace analyzer")]),e._v(" "),t("p",[e._v("Set, the, shape, to, semi-transparent, by, calling, set_trans(5)")])]),e._v(" "),t("li",[t("p",[e._v("language analyzer（特定的语言的分词器，比如说，english，英语分词器）")]),e._v(" "),t("p",[e._v("set, shape, semi, transpar, call, set_tran, 5")])])]),e._v(" "),t("p",[e._v("做的处理前面都说过了，大小写、单复数、按照空格或者下划线横线等切分词语；")])])},[],!1,null,null,null);a.default=_.exports}}]);