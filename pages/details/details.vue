<template>
	<view>
		<view class="back" @tap="back">
			<image src="../../static/navImg/返回.png" mode=""></image>
		</view>
		<image :src="`../../static/goods-img/${datas.img}.jpg`" class="imgBg"></image>
		<view class="price-row">
			<span class="left">￥{{datas.price}}</span>
			<span class="rigth">店铺卷满50减5></span>
		</view>
		<view class="detail">
			<view class="shanjia">
				淘宝
			</view>
			<view class="detailTitle">
				{{datas.title}}
			</view>
		</view>
		
		<view class="foot">
			<view class="icon">
				<view class="dianpu box">
					<image src="../../static/navImg/_店铺.png" mode=""></image>
					<span>店铺</span>
				</view>
				<view class="kefu box">
					<image src="../../static/navImg/客服.png" mode=""></image>
					<span>客服</span>
				</view>
				<view class="shouchang box">
					<image src="../../static/navImg/收藏.png" mode=""></image>
					<span>收藏</span>
				</view>
			</view>
			
			<view class="apply">
				<view class="jiaru" @tap="addShop(datas)" v-if='!datas.isAdd'>
					加入购物车
				</view>
				<view class="jiaru" @tap="addShop(datas)" v-if='datas.isAdd'>
					已添加到购物车
				</view>
				<view class="liji">
					立即购买
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { data } from 'uview-ui/libs/mixin/mixin';
import {useTestStore} from '../../store/store.js';
import { createPinia } from 'pinia';
const pinia = createPinia();
const store = useTestStore(pinia)
export default {
	data(){
		return{
			datas:{},
		}
	},
	onLoad: function (option) {
		this.datas=(JSON.parse(decodeURIComponent(option.data)))
		console.log(this.datas);
	},
	methods:{
		back(){
			uni.navigateBack({
				delta:1
			})
		},
		addShop(datas){
			if(!datas.isAdd){
				store.setGood(datas)
				datas.isAdd=true;
			}
		}
	}
}
</script>

<style lang="scss">
	.back{
		width: 100%;
		height: 70rpx;
		margin-top: 50rpx;
		background-color: rgba(#000,0.5);
		image{
			width: 40rpx;
			height: 40rpx;
			padding-top: 15rpx;
		}
	}
	.imgBg{
		width: 100%;
		height: 400rpx;
		
	}
	.price-row{
		padding:0 10rpx;
		width: 100%;
		height: 50rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.left{
			font-size: 32rpx;
			color: red;
			
		}
		.rigth{
			border: 1 solid red;
			background-color: red;
			border-radius: 5rpx;
			color: #fff;
		}
	}
	.detail{
		padding:0 10rpx;
		width: 100%;
		height: 40rpx;
		display: flex;
		justify-content: start;
		align-items: center;
		.shanjia{
			background-color: red;
			width: 50rpx;
			height:35rpx ;
			border-radius: 15rpx;
			color: #fff;
			font-size: 25rpx;
		}
		.detailTitle{
			font-size: 30rpx;
			font-weight: 800;
			margin-left: 10rpx;
		}
	}

	.foot{
		width: 100%;
		height: 100rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		border-top: 1px solid #eee;
		display: flex;
		justify-content: space-around;
		.icon{
			width: 40%;
			height: 100%;
			display: flex;
			image{
				width: 32rpx;
				height: 32rpx;
			}
			.box{
				display: flex;
				flex-direction: column;
				height: 100%;
				width: 33.33%;
				justify-content: center;
				align-items: center;
			}
		}
		
		.apply{
			width: 50%;
			height: 80%;
			display: flex;
			justify-content: space-between;
			margin-top: 10rpx;
			.jiaru{
				width: 50%;
				height: 100%;
				background-color: #F09819;
				font-size: 28rpx;
				padding-left: 10rpx;
				color: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				border-top-left-radius:50rpx;
				border-bottom-left-radius:50rpx;
			}
			.liji{
				width: 50%;
				height: 100%;
				background-color: #FF512F;
				font-size: 32rpx;
				color: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				border-top-right-radius:50rpx;
				border-bottom-right-radius:50rpx;
			}
		}
	}
</style>
