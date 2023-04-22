"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "yemian",
  setup(__props) {
    const data = common_vendor.reactive({
      list: [
        { id: 1, img: "毛巾", title: "毛巾" },
        { id: 2, img: "被子", title: "被子" },
        { id: 3, img: "水杯", title: "水杯" }
      ],
      show: [{ id: 1, img: "毛巾", title: "毛巾" }]
    });
    const back = () => {
      common_vendor.index.navigateBack({
        delta: 1
      });
    };
    const toshouye = () => {
      common_vendor.index.navigateTo({ url: "../index/index" });
    };
    common_vendor.ref(1);
    const select = (num) => {
      data.show = data.list.filter((v) => v.id == num);
    };
    const toShoping = () => {
      common_vendor.index.navigateTo({ url: "../shoping/shoping" });
    };
    const toOrder = () => {
      common_vendor.index.navigateTo({ url: "../order/order" });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(toshouye),
        b: common_vendor.o(toShoping),
        c: common_vendor.o(toOrder),
        d: common_vendor.o(back),
        e: common_vendor.o(($event) => select(1)),
        f: common_vendor.o(($event) => select(2)),
        g: common_vendor.o(($event) => select(3)),
        h: common_vendor.f(data.show, (item, k0, i0) => {
          return {
            a: `../../static/goods-img/${item == null ? void 0 : item.img}.jpg`,
            b: common_vendor.t(item.title),
            c: item.id
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4749e66e"], ["__file", "E:/uniapp/app/pages/yemian/yemian.vue"]]);
wx.createPage(MiniProgramPage);
