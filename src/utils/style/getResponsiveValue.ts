import { rem } from './rem'

export const getResponsiveValue = (
	value: number | ResponsiveProp<number> | undefined,
	type: 'desktop' | 'mobile'
): string | undefined => {
	if (typeof value === 'number') return rem(value)
	if (value && value[type]) return rem(value[type])
	return undefined
}
