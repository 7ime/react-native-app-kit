import React from 'react'
import ITypography from '../../model'
import TypographyStyles from '../../styles/typography.styles'

const Text: React.FC<ITypography.TextProps> = (props) => {
    const {
        children,
        ...restProps
    } = props

    return <TypographyStyles.Text {...restProps}>{children}</TypographyStyles.Text>
}

export default Text
