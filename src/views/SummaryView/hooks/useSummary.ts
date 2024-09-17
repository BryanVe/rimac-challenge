import { storage } from '~/utils/common'

export const useSummary = () => {
	const user = storage.getItem<TUser>('user')
	const selectedPlan = storage.getItem<TPlanWithDiscount>('selectedPlan')

	return {
		user,
		selectedPlan
	}
}
