<template>
	<view class="box">
		<view class="back" @tap="back">
			<image src="../../static/navImg/返回.png" mode=""></image>
		</view>
		
		<view class="order">
			<view class="top">
				我的订单
			</view>
			<view class="bottom">
				<view class="card" v-for="item in goods.list" :key="item.id">
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
						<view class="state">
							发货中
						</view>
					</view>
				</view>
			</view>
		</view>

		
		<view class="nav3">
			<view class="home3" @tap="toshouye">
				<image src="../../static/navImg/home.png" mode=""></image>
				首页
			</view>
			<view @tap="toFenye">分类页</view>
			<view @tap="shoping">购物车</view>
			<view >个人中心</view>
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
		goods.list=store.getBuy()
	})
	const toFenye=()=>{
		uni.navigateTo({url: '../yemian/yemian'});
	}
	
	const shoping=()=>{
		uni.navigateTo({url: '../shoping/shoping'});
	}
	const toshouye=()=>{
		uni.navigateTo({url: '../index/index'});
	}
	const back=()=>{
		uni.navigateBack({
			delta:1
		})
	}
</script>

<style lang="scss">
	.box{
		width: 100%;
		height: 100%;
		padding-top: 30rpx;
		
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
		.order{
			width: 100%;
			.top{
				width: 100%;
				height: 60rpx;
				font-size: 32rpx;
				border-bottom: 1px solid #eee;
			}
			.bottom{
				width: 100%;
				padding: 0 20rpx;
				.card{
					width: 100%;
					display: flex;
					position:relative;
					margin-top: 20rpx;
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
							font-size: 20rpx;
						}
						.state{
							position: absolute;
							right: 10rpx;
							top: 30rpx;
							color: red;
						}
					}
				}
			}
		}
		
		.nav3{
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
			
			.home3{
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
