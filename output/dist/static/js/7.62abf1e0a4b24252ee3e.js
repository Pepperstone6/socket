"use strict";

webpackJsonp([7], { "6I+x": function IX(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var a = o(n("OhwO")),
        i = o(n("3JdW"));n("WJbf"), n("y+mr");var r = o(n("7+uW")),
        s = o(n("7ACz"));n("Fd2+");function o(e) {
      return e && e.__esModule ? e : { default: e };
    }r.default.component(i.default.name, i.default), t.default = { data: function data() {
        return { friendInfo: null };
      }, mounted: function mounted() {
        var e = this;console.log(this.$route.params.requestname);var t = this.$route.params.requestname;this.$http({ method: "GET", url: "/api/agreeFriendInfo", params: { requestname: t } }).then(function (t) {
          var n = t.data;n.success && (e.friendInfo = n.data);
        });
      }, methods: { preview: function preview() {
          (0, a.default)({ images: [this.friendInfo.avatar], startPosition: 1, onClose: function onClose() {} });
        }, agree: function agree() {
          this.$http({ method: "POST", url: "/api/agreeRequest", data: { requestname: this.friendInfo.name, friendname: this.$store.state.userInfo.username } }).then(function (e) {
            console.log(e);
          });
        }, getMessage: function getMessage() {
          this.$router.push({ name: "messagebox", params: { friendname: this.friendInfo.name, friendnickname: this.friendInfo.nickname } });
        } }, components: { PrevTop: s.default } };
  }, "C8+5": function C85(e, t) {}, "Cj3+": function Cj3(e, t) {}, M4qq: function M4qq(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var a = n("6I+x"),
        i = n.n(a);for (var r in a) {
      "default" !== r && function (e) {
        n.d(t, e, function () {
          return a[e];
        });
      }(r);
    }var s = n("zapu");var o = function o(e) {
      n("mpjj");
    },
        f = n("VU/8")(i.a, s.a, !1, o, "data-v-35aaec81", null);t.default = f.exports;
  }, "NHd/": function NHd(e, t) {}, WJbf: function WJbf(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var a = n("f4F5"),
        i = (n.n(a), n("Cj3+")),
        r = (n.n(i), n("NHd/")),
        s = (n.n(r), n("C8+5"));n.n(s);
  }, mpjj: function mpjj(e, t) {}, zapu: function zapu(e, t, n) {
    "use strict";
    var a = { render: function render() {
        var e = this,
            t = e.$createElement,
            n = e._self._c || t;return n("div", { attrs: { id: "detailInfo" } }, [n("prev-top", { attrs: { title: "详细信息" } }), e._v(" "), n("div", { staticClass: "userinfo" }, [n("div", { staticClass: "icon", on: { click: e.preview } }, [e.friendInfo ? n("img", { attrs: { src: e.friendInfo.avatar, alt: "" } }) : e._e()]), e._v(" "), n("div", { staticClass: "account" }, [e.friendInfo ? n("div", { staticClass: "nickname" }, [n("span", [e._v(e._s(e.friendInfo.nickname))]), n("icon", { attrs: { width: "20", height: "15", name: 0 == e.friendInfo.sex ? "man" : "woman" } })], 1) : e._e()]), e._v(" "), e._m(0)]), e._v(" "), n("div", { staticClass: "submit" }, [e.friendInfo && !e.friendInfo.isAgree ? n("mt-button", { attrs: { type: "primary", size: "large" }, on: { click: e.agree } }, [e._v("通过验证")]) : e._e(), e._v(" "), e.friendInfo && e.friendInfo.isAgree ? n("mt-button", { attrs: { type: "primary", size: "large" }, on: { click: e.getMessage } }, [e._v("发送消息")]) : e._e()], 1)], 1);
      }, staticRenderFns: [function () {
        var e = this.$createElement,
            t = this._self._c || e;return t("div", { staticClass: "p" }, [t("p")]);
      }] };t.a = a;
  } });
//# sourceMappingURL=7.62abf1e0a4b24252ee3e.js.map