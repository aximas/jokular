<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useJokesStore } from '@/core/store/jokes/useJokesStore';
import { storeToRefs } from 'pinia';
import puzzle from '@/assets/img/puzzle.png';

export default defineComponent({
	data() {
		return {
			puzzleSrc: puzzle,
			isShowClue: false
		};
	},
	setup() {
		const jokesStore = useJokesStore();

		const { data, isLoading, filters } = storeToRefs(jokesStore);

		const jokeText = ref('');
		const jokeClue = ref('');
		const isJokeHasClue = ref(false);

		onMounted(async () => {
			await jokesStore.getData();

			if (data) {
				if (data?.value && data.value.setup && data.value.delivery) {
					jokeText.value = data.value.setup;
					jokeClue.value = data.value.delivery;
					isJokeHasClue.value = true;
				} else if (data?.value?.joke) {
					jokeText.value = data.value.joke;
				}
			}
		});

		return {
			jokeText,
			isLoading,
			jokeClue,
			isJokeHasClue
		};
	},
	methods: {
		showClue() {
			if (!this.isShowClue) this.isShowClue = true;
		}
	}
});
</script>

<template>
	<main>
		<div class="container">
			<p v-if="isLoading" class="h3">Loading ...</p>
			<h3 v-else class="h3">{{ jokeText }}</h3>
			<div :class="{ additional: true }" v-show="isJokeHasClue">
				<p class="body">Not understand ?</p>
				<button class="btn yellow" :class="{ button: true }" @click="showClue">
					<img :src="puzzleSrc" alt="puzzle" />
				</button>
				<p class="title" :class="{ jokeClueText: true }" v-show="isShowClue">
					{{ jokeClue }}
				</p>
			</div>
		</div>
	</main>
</template>

<style lang="scss">
.additional {
	margin-top: 64px;
}

.btn {
	width: 80px;
	height: 60px;
	margin-top: 6px;
	border-radius: 8px;
}

.jokeClueText {
	margin-top: 20px;
}
</style>
