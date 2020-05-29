import * as axios from "axios";


const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': 'dc838a0b-8b61-4e52-ba17-49724b1f4071',
	},
});

export const userAPI = {
	getUsers(currentPage, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
			return response.data;
		})
	},
	usersFromServer(userId) {
		console.warn('Obsolete method. Please use profileAPI object')
		return profileAPI.profileFromServer(userId);
	},
	buttonFollowPostFromServer(userId) {
		return instance.post(`follow/${userId}`).then(response => {
			return response.data;
		})
	},
	buttonUnFollowDeleteFromServer(userId) {
		return instance.delete(`follow/${userId}`).then(response => {
			return response.data;
		})
	}
}

export const profileAPI = {
	profileFromServer(userId) {
		return instance.get(`profile/${userId}`).then(response => {
			return response.data;
		})
	},
	getStatus(userId) {
		return instance.get(`profile/status/${userId}`)
	},
	updateStatus(status) {
		return instance.put('profile/status', {status: status})
	}
}

export const authAPI = {
	usersAuthFromServer() {
		return instance.get(`auth/me`).then(response => {
			return response.data;
		})
	},
	loginFromServer(email,password,rememberMe) {
		return instance.post(`auth/login`, {email, password, rememberMe}).then(response => {
			return response.data;
		})
	},
	logoutFromServer() {
		return instance.delete(`auth/login`).then(response => {
			return response.data;
		})
	}
}
