<script lang="ts">
import { defineComponent } from 'vue';
import logo from '@/assets/img/logo.png';

export default defineComponent({
	data() {
		return { logoSrc: logo };
	}
});
</script>

<template>
	<header :class="{ header: true }">
		<div class="container">
			<img :src="logoSrc" alt="logo" :class="{ logo: true }" />
		</div>
	</header>
</template>

<style lang="scss">
.header {
	padding-top: 24px;
	padding-bottom: 24px;
}

.logo {
	width: 140px;
}
</style>
