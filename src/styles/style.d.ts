import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            primary: string,
            secondary: string,
            tertiary: string,

            quartiary: string,

            white: string,
            black: string,
            gray: string,

            success: string,
            info: string,
            warning: string,
            textBallon: string,
            linearGradient: string,
            boxShadow: string
            linearGradientBg: string


        },
    }
}