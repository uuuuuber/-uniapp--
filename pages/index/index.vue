<template>
	<view class="banner">
		<u-swiper :list="bannerImg.list"></u-swiper>
	</view>
	
    <view class="nav">
    	<view class="home">
    		<image src="../../static/navImg/home.png" mode=""></image>
    		首页
    	</view>
    	<view @tap="toFenye">分类页</view>
    	<view @tap="shoping">购物车</view>
    	<view @tap="toOrder">个人中心</view>
    </view>
	
	<view class="list" >
		<ul class="goodsList" v-for="(item,index) in goods.arr" :key="item.id">
			<li>
				<view @tap="toDetails(item)">
					<image :src="`../../static/goods-img/${item?.img}.jpg`"></image>
				</view>
				<p class="title">{{ item?.title}}</p>
				<p class="price">{{item?.price}}</p>
				<p class="buy">
					<view  class="add-cart" style="margin-left: -5px;">
						点击查看详情
					</view>
				</p>
			</li>
		</ul>
	</view>

</template>

<script setup>

import {reactive,onMounted,ref} from 'vue'
import GOODS from '../../api/datas/good.js';

import jpg1 from '../../static/banner/1.jpg';
import jpg2 from '../../static/banner/2.jpg';
import jpg3 from '../../static/banner/3.jpg';


import { useTestStore} from '@/store/store.js' // 引用 pinia 数据 
const store = useTestStore()

const bannerImg=reactive({
	list: [{
		image: jpg1,
	},
	{
		image: jpg2,
	},
	{
		image:jpg3,
	}
	]
})
const goods=reactive({
	list:[],
	arr:[]
})
goods.list=GOODS.goods()

// console.log(goods.list)
onMounted(()=>{
	goods.list=GOODS.goods();
	randomList()
})

const randomList=()=>{

	let arr=randomNum();
	for(let num of arr){
		goods.arr.push(goods.list[num])
	}

}
const randomNum=()=>{
	let con =new Set();
	while(con.size<6){
		con.add(Math.floor(Math.random()*12))
	}
	return [...con]
}

const toDetails=(itemInfo)=>{
	uni.navigateTo({url: '../details/details?data='+encodeURIComponent(JSON.stringify(itemInfo))});
}

const toFenye=()=>{
	uni.navigateTo({url: '../yemian/yemian'});
}


//加入购物车
const addShop=(item)=>{
	store.setGood(item)
	item.isAdd=true;
}

const shoping=()=>{
	uni.navigateTo({url: '../shoping/shoping'});
}
const toOrder=()=>{
	uni.navigateTo({url: '../order/order'});
}
</script>

<style scoped lang="scss">

	.banner{
		box-sizing: border-box;
		width: 100%;
		height: 300rpx;
		padding: 40rpx;
	}
	
	.nav{
		z-index: 99999;
		border-top: 1px solid #eee;
		position: fixed;
		display: flex;
		height: 100rpx;
		width: 100%;
		bottom:0;
		justify-content:space-around;
		align-items: center;
		color: $uni-text-color;
		background-color: #fff;
		
		.home{
			display: flex;
			justify-content: center;
			align-items: center;
			image{
				width: $uni-img-size-lg;
				height: $uni-img-size-lg;
			}
		}
	}
	
	.goods{
		width: 100%;
		.goods-left{
			image{
				width: 250rpx;
				height: 250rpx;
			}
		}
	}
	.list{
		width: 100%;
		padding:  40rpx 40rpx 80rpx 40rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.goodsList{
			position: relative;
			width: 330rpx;
			height: 330rpx;
			border-radius: 20rpx;
			border: 1px solid #F0F8FF;
			margin-bottom: 40rpx;
			image{
				width: 100%;
				height: 200rpx;
				border-radius: 20rpx 20rpx 0 0;
			}
			.title{
				width: 100%;
				display:-webkit-box;
				-webkit-box-orient:vertical;
				-webkit-line-clamp:1;
				overflow:hidden;
				font-size: 32rpx;
				font-weight: 800;
			
			}
			.price{
				font-size: 28rpx;
				color: $uni-color-error;
				height: 20rpx;
			}
			.buy{
				position: absolute;
				bottom: 0;
				width: 100%;
				height: 40rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				border-top: 1px solid #F0F8FF;
				background-color: #FFFF00;
				border-radius: 0 0 20rpx 20rpx;
				
				.success{
					
				}
			}
		}
	}
	
</style>
