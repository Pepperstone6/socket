"use strict";

webpackJsonp([11], { G95M: function G95M(e, t, a) {
    "use strict";
    var r = { render: function render() {
        var e = this,
            t = e.$createElement,
            a = e._self._c || t;return a("div", { attrs: { id: "requestAdd" } }, [a("prev-top", { attrs: { title: "添加通讯录" } }), e._v(" "), a("div", { staticClass: "form-wrap" }, [a("div", { staticClass: "hint" }, [e._v("\n      你需要发送验证申请，等对方通过\n    ")]), e._v(" "), a("mt-field", { ref: "haha", attrs: { attr: { autofocus: "autofocus" } }, model: { value: e.remark, callback: function callback(t) {
              e.remark = t;
            }, expression: "remark" } }), e._v(" "), a("mt-button", { attrs: { type: "primary", size: "large" }, on: { click: function click(t) {
              return t.preventDefault(), e.fly(t);
            } } }, [e._v("发送")])], 1)], 1);
      }, staticRenderFns: [] };t.a = r;
  }, c6LI: function c6LI(e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = i(a("ZQVe")),
        n = i(a("3JdW"));a("f1Vh"), a("y+mr");var s = i(a("7ACz")),
        u = i(a("7+uW"));function i(e) {
      return e && e.__esModule ? e : { default: e };
    }u.default.component(n.default.name, n.default), u.default.component(r.default.name, r.default), t.default = { data: function data() {
        return { remark: "", params: "" };
      }, mounted: function mounted() {
        this.params = this.$route.params, console.log(this.params), this.remark = "我是" + this.params.requestnickname, this.$refs.haha.$el.querySelector("input").focus();
      }, methods: { fly: function fly() {
          this.$http({ method: "POST", url: "/api/requestAdd", data: { requestremark: this.remark, requestname: this.params.requestname, friendname: this.params.friendusername, friendavatar: this.params.avatar, requestnickname: this.params.requestnickname } }).then(function (e) {
            e.data.success;
          });
        } }, components: { PrevTop: s.default } };
  }, omXp: function omXp(e, t) {}, pIqY: function pIqY(e, t, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = a("c6LI"),
        n = a.n(r);for (var s in r) {
      "default" !== s && function (e) {
        a.d(t, e, function () {
          return r[e];
        });
      }(s);
    }var u = a("G95M");var i = function i(e) {
      a("omXp");
    },
        o = a("VU/8")(n.a, u.a, !1, i, null, null);t.default = o.exports;
  } });
//# sourceMappingURL=11.9d05e496791f7644d92b.js.map