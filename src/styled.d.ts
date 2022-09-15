import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            blue_900: string,
            blue_800: string,
            blue_700: string,
            blue_300: string,
            blue_100: string, 
          },
    }
}