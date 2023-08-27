<script lang="ts">
import { defineComponent } from 'vue';
import Main from '@/components/DashboardComponents/Main.vue';
import Header from '@/components/DashboardComponents/Header.vue';
import Footer from '@/components/DashboardComponents/Footer.vue';

export default defineComponent({
	components: { Main, Header }
});
</script>

<template>
	<div class="ui-wrapper wrapper">
		<Header />
		<Main />
		<!--		<Footer />-->
	</div>
</template>
