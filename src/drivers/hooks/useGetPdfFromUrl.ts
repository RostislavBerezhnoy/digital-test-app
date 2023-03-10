import * as pdfjsLib from 'pdfjs-dist'
import type { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api'
import { useQuery } from '@tanstack/react-query'

pdfjsLib.GlobalWorkerOptions.workerSrc = require('pdfjs-dist/build/pdf.worker.entry.js')

const getPdfFromUrl = async (fileUrl: string): Promise<PDFDocumentProxy> => {
  if (!fileUrl) throw new Error('Url does not exist')

  try {
    const loadingTask = pdfjsLib.getDocument(fileUrl)

    return (await loadingTask.promise) as PDFDocumentProxy
  } catch (error) {
    throw new Error(`PDF request error: ${error}`)
  }
}

export const useGetPdfFromUrl = (fileUrl: string) =>
  useQuery({
    queryKey: ['pdfFile'],
    queryFn: () => getPdfFromUrl(fileUrl),
  })
