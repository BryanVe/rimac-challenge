type ResponsiveProp<T> = Partial<Record<'mobile' | 'desktop', T>>
type ColorProp = 'black' | 'white' | 'gray' | 'blue'
type RimacColor = ColorProp
type FontWeightProp =
	| 'thin'
	| 'extralight'
	| 'light'
	| 'regular'
	| 'medium'
	| 'semibold'
	| 'bold'
	| 'black'
type RimacFontWeight = FontWeightProp

type CSSVariables = Partial<Record<`--${string}`, string | number>>
type StyleProp = React.CSSProperties & CSSVariables
