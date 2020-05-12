import * as axios from "axios";


const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': 'd3e184b5-2525-4316-8fdb-e696fcf93fc5',
	},
});

export const userAPI = {
	getUsersFromServer(currentPage, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
				return response.data;
		})
	},
	getChangesPagesFromServer(page, pageSize) {
		return instance.get(`users?page=${page}&count=${pageSize}`).then(response => {
				return response.data;
			})
	},
	usersAuthFromServer() {
		return instance.get(`auth/me`).then(response => {
				return response.data;
		})
	}
}



