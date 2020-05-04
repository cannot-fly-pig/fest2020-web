<template>
  <div class="container">

		<section class="wrap-image">
			<img src="@/assets/logo/vi_published_t_13.svg" alt="ロゴ画像" class="logo-image-phone">
			<div class="title">
				<h1><span class="title-main">第<span class="black">74</span>回灘校文化祭</span></h1>
		<!--
				<div class="title-date">
					<h2>
						<span class="title-sub">2020.05.02 (土)</span> 
						<span class="title-sub">2020.05.03 (日)</span>
					</h2> 
				</div>
				<div class="title-time">
					<p><span class="title-sub">9:00-15:30</span></p>
				</div>
		-->
			</div>
		</section>

		<!--
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
					<img src="@/assets/img/comingsoon.png" alt="comming soon" class="comming-image">
				</div>
			</div>
		</section>
		-->
		<section class="wrap-notice">
			<h1 class="notice-h1">お知らせ</h1>
			<p>
				この度、5月2日～5月3日に開催を予定して<span class="text">おりました</span><br>
				第74回灘校文化祭 “vivid” の開催中止を決定<span class="text">いたしました。</span><br>
				今後、準備してきた成果をどのように発表するかは<span class="text">検討中です。</span>
			</p>
		</section>

		<section class="wrap-concept">
			<h1 class="concept-h1">Concept</h1>
			<p>
			“vivid” という言葉には、「生き生きとした」という意味が<span class="text">あります</span><br>
			活動する生徒やご来場になる皆さんなど、全ての人にとって活力のあふれた文化祭になることを<span class="text">願ったテーマです</span><br>
			また、もうひとつの「鮮やかな」という意味は、文化祭を訪れる全員が織りなす個性的な色が溶け合い、ひとつの鮮やかな文化祭が作られることを<span class="text">象徴しています</span>
			</p>
		</section>

		<section class="wrap-youtube">
			<iframe width="560" height="315" src="https://www.youtube.com/embed/FcUa_ghLW-M" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="youtube"/>
		</section>

		<!--
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
							<p class="main time">9:00–15:30</p>
							<p class="sub kaijyou">開場 9:00</p>
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
							<p class="sub-title">SNS</p>
							<p class="sub">最新情報をチェック!</p>
							<div class="line">
								<a href="https://twitter.com/Nada_festival" target="_blank" rel="noopener" class="main">Twitter</a>
			        </div>
							<div class="line">
								<a href="https://www.instagram.com/nada_schoolfestival/" target="_blank" rel="noopener" class="main">Instagram</a>
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
		-->
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
			this.count10 = require(`@/assets/count/ctdwn-0.svg`)
			this.count1 = require(`@/assets/count/ctdwn-${diff}.svg`)
		}else{
			this.count10 = require(`@/assets/count/ctdwn-${Math.floor(diff/10)}.svg`)
			this.count1 = require(`@/assets/count/ctdwn-${diff%10}.svg`)
		}
	}
}
</script>

<style>
	@import "@/assets/css/index/phone.css"
</style>

<style>
	@import "@/assets/css/index/pc.css"
</style>

<style>
</style>
