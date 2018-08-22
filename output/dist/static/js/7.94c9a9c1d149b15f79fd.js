"use strict";

webpackJsonp([7], { "6I+x": function IX(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });var a = o(t("OhwO")),
        i = o(t("3JdW"));t("WJbf"), t("y+mr");var r = o(t("7+uW")),
        s = o(t("7ACz"));t("Fd2+");function o(e) {
      return e && e.__esModule ? e : { default: e };
    }r.default.component(i.default.name, i.default), n.default = { data: function data() {
        return { friendInfo: null };
      }, mounted: function mounted() {
        var e = this;console.log(this.$route.params.requestname);var n = this.$route.params.requestname;this.$http({ method: "GET", url: "/api/agreeFriendInfo", params: { requestname: n } }).then(function (n) {
          var t = n.data;t.success && (e.friendInfo = t.data);
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
  }, "C8+5": function C85(e, n) {}, "Cj3+": function Cj3(e, n) {}, M4qq: function M4qq(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });var a = t("6I+x"),
        i = t.n(a);for (var r in a) {
      "default" !== r && function (e) {
        t.d(n, e, function () {
          return a[e];
        });
      }(r);
    }var s = t("aczz");var o = function o(e) {
      t("O+iM");
    },
        f = t("VU/8")(i.a, s.a, !1, o, null, null);n.default = f.exports;
  }, "NHd/": function NHd(e, n) {}, "O+iM": function OIM(e, n) {}, WJbf: function WJbf(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });var a = t("f4F5"),
        i = (t.n(a), t("Cj3+")),
        r = (t.n(i), t("NHd/")),
        s = (t.n(r), t("C8+5"));t.n(s);
  }, aczz: function aczz(e, n, t) {
    "use strict";
    var a = { render: function render() {
        var e = this,
            n = e.$createElement,
            t = e._self._c || n;return t("div", { attrs: { id: "detailInfo" } }, [t("prev-top", { attrs: { title: "详细信息" } }), e._v(" "), t("div", { staticClass: "userinfo" }, [t("div", { staticClass: "icon", on: { click: e.preview } }, [e.friendInfo ? t("img", { attrs: { src: e.friendInfo.avatar, alt: "" } }) : e._e()]), e._v(" "), t("div", { staticClass: "account" }, [e.friendInfo ? t("div", { staticClass: "nickname" }, [t("span", [e._v(e._s(e.friendInfo.nickname))]), t("icon", { attrs: { width: "20", height: "15", name: 0 == e.friendInfo.sex ? "man" : "woman" } })], 1) : e._e()]), e._v(" "), e._m(0)]), e._v(" "), t("div", { staticClass: "submit" }, [e.friendInfo && !e.friendInfo.isAgree ? t("mt-button", { attrs: { type: "primary", size: "large" }, on: { click: e.agree } }, [e._v("通过验证")]) : e._e(), e._v(" "), e.friendInfo && e.friendInfo.isAgree ? t("mt-button", { attrs: { type: "primary", size: "large" }, on: { click: e.getMessage } }, [e._v("发送消息")]) : e._e()], 1)], 1);
      }, staticRenderFns: [function () {
        var e = this.$createElement,
            n = this._self._c || e;return n("div", { staticClass: "p" }, [n("p")]);
      }] };n.a = a;
  } });
//# sourceMappingURL=7.94c9a9c1d149b15f79fd.js.map