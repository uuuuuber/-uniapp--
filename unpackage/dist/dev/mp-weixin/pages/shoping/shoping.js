"use strict";
const common_vendor = require("../../common/vendor.js");
const store_store = require("../../store/store.js");
const _sfc_main = {
  __name: "shoping",
  setup(__props) {
    const store = store_store.useTestStore();
    const goods = common_vendor.reactive({
      list: []
    });
    common_vendor.onMounted(() => {
      goods.list = store.getGood();
      console.log(store.getGood());
    });
    const back = () => {
      common_vendor.index.navigateBack({
        delta: 1
      });
    };
    const toshouye = () => {
      common_vendor.index.navigateTo({ url: "../index/index" });
    };
    const toFenye = () => {
      common_vendor.index.navigateTo({ url: "../yemian/yemian" });
    };
    const isbuy = common_vendor.ref(false);
    const buy = (item) => {
      isbuy.value = !isbuy.value;
      store.setBuy(item);
    };
    const toOrder = () => {
      common_vendor.index.navigateTo({ url: "../order/order" });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(back),
        b: common_vendor.f(goods.list, (item, k0, i0) => {
          return {
            a: `../../static/goods-img/${item.img}.jpg`,
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.price),
            d: common_vendor.o(($event) => buy(item), item.id),
            e: item.id
          };
        }),
        c: common_vendor.t(isbuy.value ? "已购买" : "购买"),
        d: isbuy.value,
        e: common_vendor.o(toshouye),
        f: common_vendor.o(toFenye),
        g: common_vendor.o((...args) => _ctx.shoping && _ctx.shoping(...args)),
        h: common_vendor.o(toOrder)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/uniapp/app/pages/shoping/shoping.vue"]]);
wx.createPage(MiniProgramPage);
