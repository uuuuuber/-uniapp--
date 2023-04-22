"use strict";
const common_vendor = require("../../common/vendor.js");
const store_store = require("../../store/store.js");
const pinia = common_vendor.createPinia();
const store = store_store.useTestStore(pinia);
const _sfc_main = {
  data() {
    return {
      datas: {}
    };
  },
  onLoad: function(option) {
    this.datas = JSON.parse(decodeURIComponent(option.data));
    console.log(this.datas);
  },
  methods: {
    back() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    },
    addShop(datas) {
      if (!datas.isAdd) {
        store.setGood(datas);
        datas.isAdd = true;
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.back && $options.back(...args)),
    b: `../../static/goods-img/${$data.datas.img}.jpg`,
    c: common_vendor.t($data.datas.price),
    d: common_vendor.t($data.datas.title),
    e: !$data.datas.isAdd
  }, !$data.datas.isAdd ? {
    f: common_vendor.o(($event) => $options.addShop($data.datas))
  } : {}, {
    g: $data.datas.isAdd
  }, $data.datas.isAdd ? {
    h: common_vendor.o(($event) => $options.addShop($data.datas))
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/uniapp/app/pages/details/details.vue"]]);
wx.createPage(MiniProgramPage);
