export const getAgeFromBirthDay = (birthDay: string) => {
	const [day, month, year] = birthDay.split('-').map(Number)

	const birthDate = new Date(year, month - 1, day)
	const today = new Date()

	let age = today.getFullYear() - birthDate.getFullYear()

	const currentMonth = today.getMonth()
	const currentDay = today.getDate()

	if (
		currentMonth < month - 1 ||
		(currentMonth === month - 1 && currentDay < day)
	)
		age--

	return age
}
