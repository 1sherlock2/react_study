import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'dc838a0b-8b61-4e52-ba17-49724b1f4071',
  },
});

export const userAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data);
  },
  usersFromServer(userId) {
    console.warn('Obsolete method. Please use profileAPI object');
    return profileAPI.profileFromServer(userId);
  },
  buttonFollowPostFromServer(userId) {
    return instance.post(`follow/${userId}`);
  },
  buttonUnFollowDeleteFromServer(userId) {
    return instance.delete(`follow/${userId}`);
  },
};

export const profileAPI = {
  profileFromServer(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put('profile/status', { status });
  },
  changeImageFromServer(file) {
    const formData = new FormData();
    formData.append('image', file);
    return instance.put('profile/photo', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
  },
  changeProfileInformationFromServer(formData) {
    return instance.put('profile', formData);
  },
};

export const authAPI = {
  usersAuthFromServer() {
    return instance.get('auth/me').then((response) => response.data);
  },
  loginFromServer(email, password, rememberMe, captcha = null) {
    return instance.post('auth/login', {
      email, password, rememberMe, captcha,
    });
  },
  logoutFromServer() {
    return instance.delete('auth/login').then((response) => response.data);
  },
};

export const securityAPI = {
  getCaptchFromServer() {
    return instance.get('/security/get-captcha-url').then((response) => response.data);
  },
};
