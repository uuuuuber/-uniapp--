<template>

		<view class="nav1">
			<view class="home1" @tap="toshouye">
				<image src="../../static/navImg/home.png" mode=""></image>
				首页
			</view>
			<view>分类页</view>
			<view @tap="toShoping">购物车</view>
			<view @tap="toOrder">个人中心</view>
		</view>
		
		<view class="back" @tap="back">
			<image src="../../static/navImg/返回.png" mode=""></image>
		</view>
		
		<view class="nav">
			<view class="nav-left">
				<view class="ul">
					<view class="li" @tap='select(1)'>推荐</view>
					<view class="li" @tap='select(2)'>居家</view>
					<view class="li" @tap='select(3)'>服装</view>
				</view>
			</view>
			<view class="nav-rigth">
				<view class="goods" v-for="item in data.show" :key="item.id">
					<image :src="`../../static/goods-img/${item?.img}.jpg`" mode=""></image>
					<view class="name">
						{{item.title}}
					</view>
				</view>
			</view>
		</view>

</template>

<script setup>
	import {ref, reactive} from 'vue'
	const data=reactive({
		list:[
			{id:1,img:'毛巾',title:'毛巾'},
			{id:2,img:'被子',title:'被子'},
			{id:3,img:'水杯',title:'水杯'},
		],
		show:[{id:1,img:'毛巾',title:'毛巾'},]
	})
	const back=()=>{
		uni.navigateBack({
			delta:1
		})
	}
	const toshouye=()=>{
		uni.navigateTo({url: '../index/index'});
	}
	const value=ref(1);
	const select=(num)=>{
		data.show=data.list.filter(v=>v.id==num)
	}
	const toShoping=()=>{
		uni.navigateTo({url: '../shoping/shoping'});
	}
	const toOrder=()=>{
		uni.navigateTo({url: '../order/order'});
	}
</script>

<style lang="scss" scoped>

	.back{
		width: 100%;
		height: 70rpx;
		margin-top: 50rpx;
		background-color: rgba(#fff,0.5);
		image{
			width: 40rpx;
			height: 40rpx;
			padding-top: 15rpx;
		}
	}
	
	.nav1{
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
		
		.home1{
			display: flex;
			justify-content: center;
			align-items: center;
			image{
				width: $uni-img-size-lg;
				height: $uni-img-size-lg;
			}
		}
	}

.nav{
	background-color: #eee;
	width: 100%;
	height: 667px;
	display: flex;
	.nav-left{
		width: 100rpx;
		height: 100%;
		background-color: #fff;
		.ul .li{
			width: 100%;
			height: 75rpx;
			font-size: 32rpx;
			font-weight: bold;
			text-align: center;
			line-height: 75rpx;
		}
	}
	.nav-rigth{
		padding: 30rpx;
		image{
			width: 200rpx;
			height: 200rpx;
		}
	}
}
	
</style>
