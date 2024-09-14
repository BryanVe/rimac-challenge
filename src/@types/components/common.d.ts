type ResponsiveProp<T> = Partial<Record<'mobile' | 'desktop', T>>
type CSSVariables = Partial<Record<`--${string}`, string | number>>
type StyleProp = React.CSSProperties & CSSVariables

type ColorTones = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950
type RimacColor = 'white' | `darkblue-${ColorTones}`
type RimacFontWeight =
	| 'thin'
	| 'extralight'
	| 'light'
	| 'regular'
	| 'medium'
	| 'semibold'
	| 'bold'
	| 'black'
