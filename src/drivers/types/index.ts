export type FileViewerProps = {
  url: string
  type: DocType | PdfType | ImgType
}

export type UrlProps = Omit<FileViewerProps, 'type'>
export type TypeProps = Omit<FileViewerProps, 'url'>

export type DocType = 'docx'
export type PdfType = 'pdf'
export type ImgType = 'jpg' | 'jpeg' | 'gif' | 'png' | 'bmp'
