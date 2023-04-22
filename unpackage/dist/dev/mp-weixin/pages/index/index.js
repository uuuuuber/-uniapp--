"use strict";
const common_vendor = require("../../common/vendor.js");
const api_datas_good = require("../../api/datas/good.js");
const common_assets = require("../../common/assets.js");
const store_store = require("../../store/store.js");
if (!Array) {
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  _easycom_u_swiper2();
}
const _easycom_u_swiper = () => "../../node-modules/uview-ui/components/u-swiper/u-swiper.js";
if (!Math) {
  _easycom_u_swiper();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    store_store.useTestStore();
    const bannerImg = common_vendor.reactive({
      list: [
        {
          image: common_assets.jpg1
        },
        {
          image: common_assets.jpg2
        },
        {
          image: common_assets.jpg3
        }
      ]
    });
    const goods = common_vendor.reactive({
      list: [],
      arr: []
    });
    goods.list = api_datas_good.GOODS.goods();
    common_vendor.onMounted(() => {
      goods.list = api_datas_good.GOODS.goods();
      randomList();
    });
    const randomList = () => {
      let arr = randomNum();
      for (let num of arr) {
        goods.arr.push(goods.list[num]);
      }
    };
    const randomNum = () => {
      let con = /* @__PURE__ */ new Set();
      while (con.size < 6) {
        con.add(Math.floor(Math.random() * 12));
      }
      return [...con];
    };
    const toDetails = (itemInfo) => {
      common_vendor.index.navigateTo({ url: "../details/details?data=" + encodeURIComponent(JSON.stringify(itemInfo)) });
    };
    const toFenye = () => {
      common_vendor.index.navigateTo({ url: "../yemian/yemian" });
    };
    const shoping = () => {
      common_vendor.index.navigateTo({ url: "../shoping/shoping" });
    };
    const toOrder = () => {
      common_vendor.index.navigateTo({ url: "../order/order" });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          list: bannerImg.list
        }),
        b: common_vendor.o(toFenye),
        c: common_vendor.o(shoping),
        d: common_vendor.o(toOrder),
        e: common_vendor.f(goods.arr, (item, index, i0) => {
          return {
            a: `../../static/goods-img/${item == null ? void 0 : item.img}.jpg`,
            b: common_vendor.o(($event) => toDetails(item), item.id),
            c: common_vendor.t(item == null ? void 0 : item.title),
            d: common_vendor.t(item == null ? void 0 : item.price),
            e: item.id
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "E:/uniapp/app/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
