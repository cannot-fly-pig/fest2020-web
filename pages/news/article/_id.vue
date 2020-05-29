<template>
	<div class="container">
		<h1>article</h1>
		<h2>{{ this.$route.params.id }}</h2>
		<div id="title">{{ this.title }}</div>
		<div id="name">{{ this.name }}</div>
		<div id="timestamp">{{ this.timestamp }}</div>
		<div id="content" v-html="this.content"></div>
	</div>
</template>

<script>
import axios from "axios"

export default {
	data() {
		return{
			title: "",
			name: "",
			content: "",
			timestamp: ""
		}
	},
	mounted() {
		this.$axios.get("/api/get", {
			params: {
				id: this.$route.params.id
			}
		})
		.then(res => {
			const data = res.data[0]
			console.log(data)
			this.content = data.content
			this.name = data.name
			this.title = data.title
			this.timestamp = data.created_at
		})
		.catch(err => {
			console.log(err)
		})
	}
}
</script>
