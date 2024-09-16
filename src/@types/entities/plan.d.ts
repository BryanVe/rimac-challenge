type TPlan = {
	name: string
	price: number
	age: number
	description: string[]
}

type TPlanWithDiscount = TPlan & {
	discount?: number
}

type TPlanList = {
	list: TPlan[]
}
