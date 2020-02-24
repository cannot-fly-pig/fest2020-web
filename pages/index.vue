<template>
  <div class="container">

		<div class="wrap-toolbar">
		</div>

		<section class="wrap-image">
			<img src="../assets/img/top_05.png" alt="背景画像" class="bg-image">
			<div class="title">
				<h1><span class="title-main">第74回灘校文化祭</span></h1>
				<h2><span class="title-sub">2020.05.02 (土)</span> <span class="title-sub">2020.05.02 (日)</span></h2> <h2><span class="title-sub">9:00-15:00</span></h2>
			</div>
		</section>

		<section class="wrap-count">
			<div class="count">
				<h1 class="count-made">第74回灘校文化祭開催まで</h1>
				<div class="count-suji">
					あと &nbsp;
					<img :src="count10" alt="10の位" class="count-image">
					<img :src="count1" alt="1の位" class="count-image">
					&nbsp;	日
				</div>
				<div class="wrap-commingimage">
					<img src="../assets/img/comingsoon.png" alt="comming soon" class="comming-image">
				</div>
			</div>
		</section>

		<section class="wrap-concept">
			<h1 class="concept-h1">Concept</h1>
			<p>
				“vivid” という言葉には、「生き生きとした」という意味があます <br>
				活動する生徒やご来場になる皆さんなど、全ての人にとって活力のあふれた文化祭になることを願ったテーマです <br>
				また、もうひとつの「鮮やかな」という意味は、文化祭を訪れる全員が織りなす個性的な色が溶け合い、ひとつの鮮やかな文化祭が作られることを象徴しています
			</p>
		</section>

		<section class="wrap-youtube">
			<iframe width="560" height="315" src="https://www.youtube.com/embed/FcUa_ghLW-M" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="youtube"/>
		</section>

		<section class="wrap-table">
			<h2 class="title">開催要項</h2>
			<div class="columns">
				<div class="column">
					<div class="sidebar"></div>
					<ul>
						<li>
							<p class="sub-title narrow">day 1</p>
							<p class="main">2020/05/02<span class="jp">(土)</span></p>
		        </li>
		        <li>
							<p class="sub-title narrow">day 2</p>
							<p class="main">2020/05/03<span class="jp">(日)</span></p>
		        </li>
		        <li>
							<p class="sub-title">time</p>
							<p class="main">9:00–15:30</p>
							<p class="sub">開場 9:00</p>
		        </li>
		      </ul>
			  </div>
				<div class="column">
					<div class="sidebar"></div>
					<ul>
						<li>
							<p class="sub-title">theme</p>
							<p class="main">vivid</p>
						</li>
						<li>
							<p class="sub-title">sns</p>
							<p class="sub">最新情報をチェック!</p>
							<div class="line">
								<a href="https://twitter.com/Nada_festival" target="_blank" rel="noopener" class="main">Twitter</a>
			        </div>
							<div class="line">
								<a href="https://www.instagram.com/nadafestival_official/" target="_blank" rel="noopener" class="main">Instagram</a>
							</div>
							<div class="line">
								<a href="https://www.facebook.com/NadaSchoolFestival/" target="_blank" rel="noopener" class="main">Facebook</a>
							</div>
						</li>
					</ul>
				</div>
			</div>

			<h2 class="title">アクセス</h2>
			<div class="columns">
				<div class="column">
					<div class="sidebar"></div>
					<ul>
						<li>
							<p class="sub-title">place</p>
							<p class="main">灘中学校・高等学校</p>
							<p class="sub">〒658-0082</p>
							<p class="sub">兵庫県神戸市東灘区魚崎北町8丁目5番1号</p>
							<p class="sub">公共交通機関をご利用ください</p>
							<a href="http://www.nada.ac.jp/index.html" target="_blank" rel="noopener" class="sub">学校公式Webサイト</a>
						</li>
					</ul>
				</div>
				<div class="column">
					<div class="sidebar"></div>
					<ul>
						<li>
							<p class="sub-title">access</p>
							<div class="line">
								<p class="main">JR住吉駅<span class="jp">徒歩10分</span></p>
							</div>
							<div class="line">
								<p class="main">阪神魚崎駅<span class="jp">徒歩10分</span></p>
							</div>
							<div class="line">
								<p class="main">阪急岡本駅<span class="jp">徒歩25分</span></p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>

		<section class="footer">
			<footer id="the-footer">
				<div class="info">
					<div class="el">74rd Nada School Festival</div>
					<div class="el">vivid</div>
					<div class="el">2020.05.02–0</div>
					<div class="el">
						<a href="https://twitter.com/Nada_festival" target="_blank" rel="noopener" aria-label="Twitter">Tw</a>
						<a href="https://www.instagram.com/nadafestival_official/" target="_blank" rel="noopener" aria-label="Instagram">IG</a>
						<a href="https://www.facebook.com/NadaSchoolFestival/" target="_blank" rel="noopener" aria-label="Facebook">Fb</a>
					</div>
					<div class="el">Design Team © 2020</div>
				</div>
			</footer>
		</section>

  </div>
</template>

<script>
export default {
  components: {},
	data() {
		return {
			count10: "",
			count1: "",
		}
	},
	created () {
		const date = new Date()
		const month = date.getMonth() + 1
		const day = date.getDate()
		let diff = 0
		if (month == 2) {
			diff += 63 + 29 - day
		}else if(month == 3) {
			diff += 32 + 31 - day
		}else if(month == 4) {
			diff += 2 + 30 - day
		}else if(month == 5) {
			diff = 1
		}

		if (diff < 10) {
			this.count10 = require(`../assets/count/ctdwn-0.svg`)
			this.count1 = require(`../assets/count/ctdwn-${diff}.svg`)
		}else{
			this.count10 = require(`../assets/count/ctdwn-${Math.floor(diff/10)}.svg`)
			this.count1 = require(`../assets/count/ctdwn-${diff%10}.svg`)
		}
	}
}
</script>

<style>
.container {
	display: grid;
  grid-template-columns: repeat(24, 1fr);
}

.bg-image {
	width: 100%;
	height: 100vh;
	object-fit: cover;
	left: 0;
	top: 0;
}

.wrap-image {
	padding: 0 !important;
	margin: 0 !important;
	grid-column: 23 span;
}

.wrap-toolbar {
	padding: 0 !important;
	margin: 0 !important;
	background-color: #dfdfdf;
	grid-column: 1 span;
	grid-row: 7 span;
}

.wrap-image > .title {
	position: absolute;
	left: 8%;
	bottom: 12%;
	color: #595757;
}

.title-main {
	font-size: 3rem;
	background-color: white;
	padding: 0.3rem;
}

.title-sub {
	background-color: white;
	padding: 0.3rem;
}

.title > h2 {
	margin-top: 1rem;
}

.wrap-count {
	grid-column: 23 span;
	height: 100vh;
}

.count {
	background-color: #343434;
	background-image: url("../assets/img/Countdown.png");
	background-repeat: no-repeat;
	background-position: top;
	background-size: 120%;
	height: 80%;
	width: 80%;
	margin-left: 10%;
	margin-top: 5%;
	color: white
}

.count-made {
	text-align: center;
	padding-top: 3rem;
	font-size: 2rem;
}

.comming-image {
	width: 60%;
	padding-top: 3rem;
}

.wrap-commingimage{
	width: 100%;
	text-align: center;
}

.count-suji {
	padding-top: 3rem;
	text-align: center;
	font-size: 2.5rem;
}
.count-image {
	width: 15%;
}

.wrap-concept {
	grid-column: 23 span;
	background-image: url("../assets/logo/clipped.svg");
	background-repeat: no-repeat;
	background-position: center;
	background-size: 75%;
	padding-left: 10%;
	color: #595757;
	height: 40vh;
	margin-bottom: 10%;
}

.wrap-concept > h1 {
	margin-bottom: 1rem;
	font-size: 3rem;
}

.wrap-concept > p {
	line-height: 2.5rem;
	font-size: 1.2rem;
}

.wrap-youtube {
	grid-column: 23 span;
	text-align: center;
}

.youtube {
	width: 60%;
	height: 60vh;
}

.wrap-table {
	grid-column: 23 span;
	padding-left: 10%;
	color: #595757;
	background-image: url("../assets/img/top_06.png");
	background-size: 100% auto;
	padding-bottom: 15vh;
}

.wrap-table > .title {
	font-size: 3rem;
	padding-top: 10%;
}


li{
	margin-bottom: 2rem;
}

.columns {
	display: flex;
	flex-direction: row;
	margin-top: 3em;
	margin-left: 5%;
}

.column {
	display: flex;
	width: 45%;
}

.sidebar {
	width: 2px;
	height: 100%;
	background-color: #666666;
}

.sub-title {
	color: #1F6DFF;
	font-weight: bold;
	margin-bottom: 1rem;
}

.main {
	font-size: 2rem;
	font-weight: bold;
}

.sub {
	font-weight: bold;
	margin-top: 0.8rem;
	margin-bottom: 0.8rem;
	color: #666666;
}

.jp {
	color: #666666;
	margin-left: 2rem;
}

.line {
	height: 3.5rem;
}

ul {
	list-style: none;
}

.footer {
	grid-column: 23 span;
	height: 30vh;
}

#the-footer {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	background-color: #000;
	color: #7f7f7f;
}

.info {
	display: flex;
	flex-direction: row;
	width: 70%;
	align-items: center;
	justify-content: space-around;
}

.el {
	margin: 0,auto;
}

.el > a:link {
	color: #7f7f7f;
}

.el > a:visited {
	color: #7f7f7f;
}


</style>
