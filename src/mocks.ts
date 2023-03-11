import { FileViewerProps } from 'drivers'

export const pdf: FileViewerProps = {
  url: `${window.location.href}files/sample.pdf`,
  type: 'pdf',
}

export const docx: FileViewerProps = {
  url: `${window.location.href}files/sample.docx`,
  type: 'docx',
}

export const png: FileViewerProps = {
  url: `${window.location.href}files/sample.png`,
  type: 'png',
}
