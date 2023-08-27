<template>
	<Layout />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Layout from '@/components/Layout.vue';

@Options({
	components: {
		Layout
	},
	created() {
		setInterval(this.updateTime, 1000);
	},
	data() {
		return {
			hours: new Date().getHours(),
			minutes: new Date().getMinutes(),
			seconds: new Date().getSeconds()
		};
	},
	methods: {
		updateTime() {
			this.hours = new Date().getHours();
			this.minutes = new Date().getMinutes();
			this.seconds = new Date().getSeconds();
		}
	}
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
	text-align: center;
	color: #2c3e50;
}
</style>
