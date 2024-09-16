import { axiosInstance } from '..'

export const getPlansRequest = async () => {
	const response = await axiosInstance.get<TPlanList>('/plans.json')
	return response.data.list
}
