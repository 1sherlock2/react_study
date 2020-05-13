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
	},
	profileFromServer(userId) {
		return instance.get(`profile/${userId}`).then(response => {
				return response.data;
		})
	},
	buttonFollowPostFromServer(id) {
		return instance.post(`follow/${id}`).then(response => {
			return response.data;
		})
	},
	buttonUnFollowDeleteFromServer(id) {
		return instance.delete(`follow/${id}`).then(response => {
			return response.data;
		})
	}
}



