import { FC } from 'react'
import { UrlProps } from 'drivers/types'

export const ImageViewer: FC<UrlProps> = ({ url }) => <img src={url} alt='' />
