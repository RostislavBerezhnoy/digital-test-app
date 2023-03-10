export type FileViewerProps = {
  url: string
  type: DocType | PdfType | ImgType
}

export type DocType = 'doc' | 'docx' | 'rtf'
export type PdfType = 'pdf'
export type ImgType = 'jpg' | 'jpeg' | 'gif' | 'png' | 'bmp'
