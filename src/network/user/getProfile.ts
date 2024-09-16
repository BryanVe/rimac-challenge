import { axiosInstance } from '..'

export const getProfileRequest = () =>
	axiosInstance.get<TUserProfile>('/user.json')
