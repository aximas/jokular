import { defineStore } from 'pinia';
import { JokeInterface } from '@/core/models/interfaces/joke.interface';
import { IParams } from '@/services/jokeapi/props';
import { Jokeapi } from '@/services/jokeapi';

interface StateInterface {
	data: JokeInterface | null;
	filters: Partial<IParams> | null;
	isLoading: boolean;
}

export const useJokesStore = defineStore('jokes', {
	state: (): StateInterface => ({
		data: null,
		filters: null,
		isLoading: false
	}),
	getters: {},
	actions: {
		async getData() {
			this.isLoading = true;
			const res = await Jokeapi.get({ category: 'Any' });
			if (res) {
				this.data = res;
			}
			this.isLoading = false;
		},
		setLoading(payload: boolean) {
			this.isLoading = payload;
		}
	}
});
