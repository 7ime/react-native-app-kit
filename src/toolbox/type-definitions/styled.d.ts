import 'styled-components'
import {IColors} from '../../styles/variables/colors'
import {IFont} from '../../styles/variables/font'

declare module 'styled-components/native' {
    export interface DefaultTheme {
        colors: IColors
        font: IFont
    }
}
