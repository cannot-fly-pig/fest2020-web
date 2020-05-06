<template>
	<div class="container">
		<h1>2020文化祭　来訪証</h1>
		<canvas id="canvas"></canvas>
		<form id="data">
			<label for="name">名前: </label>
			<input id="name" type="text" v-model="name">
			<label>生年月日: </label>
			<select id="year" v-model="birthYear">
				<option value="0" selected>----</option>
				<option v-for="year in yearList" :value="year">{{ year }}</option>
			</select>
			<select id="month" v-model="birthMonth">
				<option value="0" selected>----</option>
				<option v-for="month in monthList" :value="month">{{ month }}</option>
			</select>
			<select id="day" v-model="birthDay">
				<option value="0" selected>----</option>
				<option v-for="day in dayList" :value="day">{{ day }}</option>
			</select>
			<label for="file">画像: </label>
			<input type="file" id="file" accept="image/jpeg,image/png" @change="loadImg">
			<button type="button" id="make" @click="make">作成</button>
		</form>
		<img :src="result" v-if="result" class="result">

		<div class="triming" v-show="triming">
			<vue-croppie
				ref = "croppieRef"
				:boundary="{ width: 450, height: 600}"
				:viewport="{ width: 300, height: 400}"
			/>
			<button @click="crop">トリミング</button>
		</div>
	</div>
</template>

<script>
export default {
	head () {
		return {
			link: [
				{ rel: "stylesheet", href: "https://jpafonts.osdn.jp/webfonts/jpafonts.css" }
			]
		}
	},
	data(){
		return {
			name: "",
			birth: "",
			result: "",
			yearList: [...Array(120).keys()].map(i => i+1900).reverse(),
			birthYear: "0",
			monthList: [...Array(12).keys()].map(i => i+1),
			birthMonth: "0",
			dayList: [...Array(31).keys()].map(i => i+1),
			birthDay: "0",
			faceImage: "",
			triming: false
		}
	},
	mounted() {
	},
	methods: {
		crop: function(e){
			let options = {
        type: 'base64',
        size: { width: 702, height: 936 },
        format: 'png'
      }
      this.$refs.croppieRef.result(options, output => {
        this.faceImage = output
				console.log(output)
			})
			this.triming = false
		},
		loadImg: function(e){
			const reader = new FileReader()

			reader.onload = (e) => {
				this.triming = true
				this.$refs.croppieRef.bind({
					url: e.target.result,
				})
			}

			reader.readAsDataURL(e.target.files[0])
		},
		make: async function(){
			this.$store.commit("counter/increment")
			const canvas = document.getElementById("canvas")
			const ctx = canvas.getContext("2d")
			await this.canvasInit(canvas, ctx)
			this.writeName(ctx)
			this.writeDay(ctx)
			this.writeBirth(ctx)
			await this.drawFace(ctx)
			this.result = canvas.toDataURL()
			console.log(this.$store.state.counter.counter)
		},
		canvasInit: function(canvas, ctx){
			return new Promise((resolve, reject) => {
				const image = new Image()
				image.src = require("@/assets/img/student-card.png")
				image.onload = () => {
					canvas.width = image.width
					canvas.height = image.height
					ctx.drawImage(image, 0, 0, canvas.height, canvas.width)
					resolve()
			}
			})
		},
		writeName: function(ctx){
			ctx.font = "140px JPAexMincho"
			ctx.fillText(this.name, 1180, 786, 900)
		},
		writeDay: function(ctx){
			const date = new Date()
			const month = date.getMonth() + 1
			ctx.font = "75px JPAexMincho"
			ctx.fillText(month, 1400, 1235)
			const day = date.getDate()
			ctx.fillText(month, 1600, 1235)
		},
		writeBirth: function(ctx){
			ctx.font = "75px JPAexMincho"
			ctx.fillText(this.birthYear, 1400, 913)
			ctx.fillText(this.birthMonth, 1700, 913)
			ctx.fillText(this.birthDay, 1880, 913)
		},
		drawFace: function(ctx){
			return new Promise((resolve, reject) => {
				const image = new Image()
				image.src = this.faceImage
				image.onload = function(){
					ctx.drawImage(image, 152, 652)
					resolve()
				}
			})
		}
	}
}
</script>

<style>
	#canvas {
		display: none;
		font-family: "JPAexMincho";
	}

	.result {
		width: 563px;
		height: 563px;
	}

	.triming {
		width: 95%;
		height: 95%;
		position: absolute;
		z-index: 100;
		top: 5%;
		left: 5%;
		background-color: white;
		border: solid black 1px;
	}
</style>
