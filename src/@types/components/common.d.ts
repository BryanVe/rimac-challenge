type ResponsiveProp<T> = Partial<Record<'mobile' | 'desktop', T>>
type CSSVariables = Partial<Record<`--${string}`, string | number>>
type StyleProp = React.CSSProperties & CSSVariables

type RimacColor = 'black' | 'white' | 'gray' | 'blue'
type RimacFontWeight =
	| 'thin'
	| 'extralight'
	| 'light'
	| 'regular'
	| 'medium'
	| 'semibold'
	| 'bold'
	| 'black'
