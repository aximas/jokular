import { IParams } from '@/services/jokeapi/props';
import { API } from '@/core/config/api';
import { getSearchParams } from '@/core/utils/helpers/getSearchParams';

export const Jokeapi = {
	async get(params: Partial<IParams>) {
		const { category, ...queryParams } = params;
		try {
			const assignedParams = new URLSearchParams(getSearchParams(queryParams));
			const uriParams = [...assignedParams.keys()].length
				? '&' + assignedParams
				: '';

			console.log('uriParams', uriParams);
			const res = await fetch(`${API.jokeapi}/${category}${uriParams}`);

			if (!res.ok) {
				console.error('res not ok', await res.json());
				return false;
			}

			return await res.json();
		} catch (e) {
			console.error('error', e);
			return false;
		}
	}
};
