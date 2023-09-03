<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useJokesStore } from '@/core/store/jokes/useJokesStore';
import { storeToRefs } from 'pinia';
import PuzzleImg from '@/assets/img/puzzle.png';
import { JokeInterface } from '@/core/models/interfaces/joke.interface';

export default defineComponent({
	data() {
		return {
			puzzleSrc: PuzzleImg,
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

			if (data.value) {
				setJokeData(data.value);
			}
		});

		function setJokeData(data: JokeInterface) {
			if (data) {
				if (data && data.setup && data.delivery) {
					jokeText.value = data.setup;

					jokeClue.value = data.delivery;
					isJokeHasClue.value = true;
				} else if (data?.joke) {
					jokeText.value = data.joke;

					jokeClue.value = '';
					isJokeHasClue.value = false;
				}
			}
		}

		return {
			jokeText,
			jokeClue,
			isLoading,
			isJokeHasClue,
			data,
			setJokeData,
			jokesStore
		};
	},
	methods: {
		handleShowClue(state: boolean) {
			this.isShowClue = state;
		},
		async getNewJoke() {
			this.handleShowClue(false);
			await this.jokesStore.getData();
		}
	},
	watch: {
		data: {
			handler(updatedData) {
				this.setJokeData(updatedData);
			},
			deep: true
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
				<button
					class="btn warning animated"
					:class="{ button: true }"
					@click="handleShowClue(true)"
				>
					<img :src="puzzleSrc" alt="puzzle" />
				</button>
				<p class="title" :class="{ jokeClueText: true }" v-show="isShowClue">
					{{ jokeClue }}
				</p>
			</div>
			<div :class="{ controls: true }">
				<button class="btn primary borderLess body-sm" @click="getNewJoke">
					Generate new
				</button>
			</div>
		</div>
	</main>
</template>

<style lang="scss">
.additional {
	margin-top: 64px;
}

.button {
	width: 80px;
	height: 60px;
	margin-top: 6px;
}

.jokeClueText {
	margin-top: 20px;
}

.controls {
	margin-top: 36px;
}
</style>
