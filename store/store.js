import { defineStore } from 'pinia'
export const useTestStore = defineStore('mystore', {
	state:()=>{
		// let goodlist=[]
		return {
			goodlist:[],
			buyData:[]
		};
	},
	persist: {
	    enabled: true, // 开启数据缓存
	    strategies: [
	      {
	        key: 'myuser',
	        storage: localStorage // 默认是sessionStorage
	      }
	    ],
	},
	actions:{
		setGood(goods){
			this.goodlist.push(goods)
			console.log('set',this.goodlist);
		},
		getGood(){
			console.log('get',this.goodlist);
			return this.goodlist
		},
		setBuy(data){
			
			this.buyData.push(data)
			console.log('setBuy',this.buyData);
		},
		getBuy(){
			console.log('getBuy',this.buyData);
			return this.buyData
		},
	}
})

