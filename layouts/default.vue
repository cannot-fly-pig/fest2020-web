<template>
	<div class="wrapper">
		<div class="nav-wrapper">
			<Navbar />
		</div>
		<div class="main-wrapper">
			<nuxt />
			<Footer />
		</div>
	</div>
</template>

<script>
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default {
	components: {
		Footer,
		Navbar
	}
}
</script>

<style>
html {
	font-family: 'Roboto', 'Noto Sans JP';
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

@media screen and (min-width: 800px) {
	.wrapper {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
	}

	.nav-wrapper {
		width: 4vw;
		height: 100vh;
	}

	.main-wrapper {
		width: 96vw;
	}
}
</style>
