import { ComponentProps } from '@stitches/react'
import { Check } from 'phosphor-react'
import * as S from './styles'

export interface CheckboxProps
  extends ComponentProps<typeof S.CheckboxContainer> {}

export const Checkbox = (props: CheckboxProps) => {
  return (
    <S.CheckboxContainer {...props}>
      <S.CheckboxIndicator asChild>
        <Check weight="bold" />
      </S.CheckboxIndicator>
    </S.CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
