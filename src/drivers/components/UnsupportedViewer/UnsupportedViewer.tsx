import { FC } from 'react'
import { TypeProps } from 'drivers/types'

export const UnsupportedViewer: FC<TypeProps> = ({ type }) => (
  <div style={{ color: '#B22222' }}>
    <strong>.{type}</strong> format is not supported
  </div>
)
