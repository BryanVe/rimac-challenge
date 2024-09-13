export const generateId = () => {
	const [firstString, secondString] = crypto.randomUUID().split('-')
	return `${firstString}${secondString}`
}
