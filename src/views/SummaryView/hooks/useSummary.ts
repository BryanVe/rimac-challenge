export const useSummary = () => {
	const user = sessionStorage.getItem('user')
	const selectedPlan = sessionStorage.getItem('selectedPlan')

	return {
		user: user ? (JSON.parse(user) as TUser) : undefined,
		selectedPlan: selectedPlan
			? (JSON.parse(selectedPlan) as TPlanWithDiscount)
			: undefined
	}
}
