import { useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import { useAuth } from '~/hooks'
import { getPlansRequest } from '~/network/plans'
import { getAgeFromBirthDay } from '~/utils/user'

export const usePlans = () => {
	const { user } = useAuth()
	const [selectedQuoteTypeId, setSelectedQuoteTypeId] = useState<
		'myself' | 'someone'
	>()
	const { isLoading: arePlansLoading, data: plans } = useQuery({
		queryKey: ['plans', selectedQuoteTypeId],
		queryFn: async () => {
			try {
				return await getPlansRequest()
			} catch (error) {
				console.log(error)
			}
		},
		enabled: Boolean(selectedQuoteTypeId)
	})

	const selectQuoteType = (quoteTypeId: 'myself' | 'someone') => () =>
		setSelectedQuoteTypeId(
			selectedQuoteTypeId === quoteTypeId ? undefined : quoteTypeId
		)

	const userAge = user ? getAgeFromBirthDay(user.birthDay) : undefined
	const filteredPlans =
		userAge && plans ? plans.filter(plan => userAge < plan.age) : []

	return {
		selectedQuoteTypeId,
		selectQuoteType,
		plans: filteredPlans,
		arePlansLoading,
		discount: selectedQuoteTypeId === 'someone' ? 5 : undefined
	}
}
