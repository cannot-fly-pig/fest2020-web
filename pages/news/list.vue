<template>
	<div class="container">
		<h1>news</h1>
		<div class="article" v-for="article in articles">
			<router-link :to="`/news/article/${article.id}`"></router-link>
			<div class="title">
				{{ article.title }}
			</div>
			<div class="name">
				{{ article.name }}
			</div>
			<div class="timestamp">
				{{ article.created_at }}
			</div>
			<div class="content">
				{{ article.content }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			articles: [],
		}
	},
	async created() {
		const res = await this.$axios.get("/api/list")
		const data = res.data
		this.articles = data.map(article => {
			article.content = article.content.replace(/<(\/"[^"]*"|'[^']*'|[^'">])*>/g,'\n')
																			  .replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'')
																			  .replace(/\n+/g,'\n')
																			  .replace(/\n$/g,'')
																			  .replace(/^\n/g,'')
			return article
		})
	}
}
</script>

<style>
.article {
	position: relative;
	border: solid black 1px;
	margin-bottom: 5px;
}

.article > a {
	display: block;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
}
</style>
