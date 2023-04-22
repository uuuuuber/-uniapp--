"use strict";
const common_vendor = require("../../common/vendor.js");
const store_store = require("../../store/store.js");
const _sfc_main = {
  __name: "order",
  setup(__props) {
    const store = store_store.useTestStore();
    const goods = common_vendor.reactive({
      list: []
    });
    common_vendor.onMounted(() => {
      goods.list = store.getBuy();
    });
    const toFenye = () => {
      common_vendor.index.navigateTo({ url: "../yemian/yemian" });
    };
    const shoping = () => {
      common_vendor.index.navigateTo({ url: "../shoping/shoping" });
    };
    const toshouye = () => {
      common_vendor.index.navigateTo({ url: "../index/index" });
    };
    const back = () => {
      common_vendor.index.navigateBack({
        delta: 1
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(back),
        b: common_vendor.f(goods.list, (item, k0, i0) => {
          return {
            a: `../../static/goods-img/${item.img}.jpg`,
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.price),
            d: item.id
          };
        }),
        c: common_vendor.o(toshouye),
        d: common_vendor.o(toFenye),
        e: common_vendor.o(shoping)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/uniapp/app/pages/order/order.vue"]]);
wx.createPage(MiniProgramPage);
