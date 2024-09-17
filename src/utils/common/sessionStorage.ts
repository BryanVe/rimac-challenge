export const getItem = <TData>(key: string) => {
	const item = sessionStorage.getItem(key)
	return item ? (JSON.parse(item) as TData) : undefined
}

export const setItem = (key: string, value: unknown) =>
	sessionStorage.setItem(key, JSON.stringify(value))

export const removeItem = (key: string) => sessionStorage.removeItem(key)
