import styled from 'styled-components/native'

const Text = styled.Text`
  font-family: ${({ theme }) => theme.font.family.os_regular};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.default}px;
  color: ${({ theme }) => theme.colors.black};
`

const TypographyStyles = {
    Text
}

export default TypographyStyles

