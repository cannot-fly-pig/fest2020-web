<template>
	<footer id="the-footer">
		<div class="info">
			<div class="el">74th Nada School Festival</div>
			<div class="el">“vivid”</div>
			<div class="el">
				<a href="https://twitter.com/Nada_festival" target="_blank" rel="noopener" aria-label="Twitter">Tw</a>
				<a href="https://www.instagram.com/nada_schoolfestival/" target="_blank" rel="noopener" aria-label="Instagram">IG</a>
				<a href="https://www.facebook.com/NadaSchoolFestival/" target="_blank" rel="noopener" aria-label="Facebook">Fb</a>
			</div>
			<div class="el">Design Team © 2020</div>
		</div>
	</footer>
</template>

<style>
	@media screen and (min-width: 800px) {
			#the-footer {
			grid-column: 23 span;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 20vh;
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
	}
	@media screen and (max-width: 799px) {
		#the-footer {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 60vh;
			width: 100%;
			background-color: #000;
			color: #7f7f7f;
		}

		.info {
			display: flex;
			flex-direction: column;
			width: 70%;
		}

		.el {
			margin-bottom: 1.5rem;
		}

		.el > a:link {
			color: #7f7f7f;
		}

		.el > a:visited {
			color: #7f7f7f;
		}
	}
</style>
