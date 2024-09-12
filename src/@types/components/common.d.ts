type ResponsiveProp<T> = Partial<Record<'mobile' | 'desktop', T>>
type ColorProp = 'black'
type FontWeightProp =
	| 'thin'
	| 'extralight'
	| 'light'
	| 'regular'
	| 'medium'
	| 'semibold'
	| 'bold'
	| 'black'

type CSSVariables = Partial<Record<`--${string}`, string | number>>
type StyleProp = React.CSSProperties & CSSVariables
