import { DOCS_TYPE, IMG_TYPE, PDF_TYPE } from 'drivers/config/files'
import { FileViewerProps, DocType, ImgType } from 'drivers/types'

export const isPdfType = (type: FileViewerProps['type']) => PDF_TYPE === type
export const isDocsType = (type: FileViewerProps['type']) => DOCS_TYPE.includes(type as DocType)
export const isImgType = (type: FileViewerProps['type']) => IMG_TYPE.includes(type as ImgType)
