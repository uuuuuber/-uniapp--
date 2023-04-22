<template>
	<view class="box">
		<view class="back" @tap="back">
			<image src="../../static/navImg/返回.png" mode=""></image>
		</view>
		
		<view class="list" v-for="item in goods.list" :key="item.id">
			<view class="left">
				<image :src="`../../static/goods-img/${item.img}.jpg`" mode=""></image>
			</view>
			<view class="rigth">
				<view class="name">
					{{item.title}}
				</view>
				<view class="jiage">
					{{item.price}}
				</view>
				<button class="buy" @tap="buy(item)" :disabled="isbuy">{{ isbuy? '已购买' : '购买'}}</button>
			</view>
		</view>
		
		<view class="nav2">
			<view class="home2" @tap="toshouye">
				<image src="../../static/navImg/home.png" mode=""></image>
				首页
			</view>
			<view @tap="toFenye">分类页</view>
			<view @tap="shoping">购物车</view>
			<view @tap="toOrder">个人中心</view>
		</view>
	</view>
</template>

<script setup>
	import { useTestStore} from '@/store/store.js'

	import {onMounted, reactive,ref} from 'vue'

	const store = useTestStore()
	
	const goods=reactive({
		list:[]
	})
	
	onMounted(()=>{
		goods.list=store.getGood()
		console.log(store.getGood());
	})
	
const back=()=>{
	uni.navigateBack({
		delta:1
	})
}
const toshouye=()=>{
	uni.navigateTo({url: '../index/index'});
}
const toFenye=()=>{
	uni.navigateTo({url: '../yemian/yemian'});
}
const isbuy=ref(false)
const buy=(item)=>{
	isbuy.value=!isbuy.value
	store.setBuy(item)
}
const toOrder=()=>{
	uni.navigateTo({url: '../order/order'});
}
</script>

<style lang="scss">
	.box{
		width: 100%;
		height: 100%;
		padding-top: 150rpx;
	
		.back{
			width: 100%;
			height: 70rpx;
			background-color: rgba(#fff,0.5);
			image{
				width: 40rpx;
				height: 40rpx;
				padding-top: 15rpx;
			}
		}
		.list{
			width: 100%;
			height: 250rpx;
			display: flex;
			.left{
				image{
					width: 150rpx;
					height: 150rpx;
				}
			}
			
			.rigth{
				margin-left: 10rpx;
				
				.name{
					font-size: 30rpx;
					margin-bottom: 20rpx;
				}
				.jiaru{
					color: #000;
				}
				.buy{
					width: 100rpx;
					height: 50rpx;
					position: absolute;
					right: 10rpx;
					font-size: 20rpx;
				}
			}
		}
		
		.nav2{
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
			
			.home2{
				display: flex;
				justify-content: center;
				align-items: center;
				image{
					width: $uni-img-size-lg;
					height: $uni-img-size-lg;
				}
			}
		}
	}
</style>
