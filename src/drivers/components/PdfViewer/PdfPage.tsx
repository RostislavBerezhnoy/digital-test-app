import { FC, useCallback, useEffect, useRef } from 'react'
import type { PDFDocumentProxy, PDFPageProxy } from 'pdfjs-dist/types/src/display/api'
import { DEFAULT_SCALE } from './helpers'

export type PdfPageProps = {
  pdf: PDFDocumentProxy
  pageCount: number
  containerWidth: number
}

export const PdfPage: FC<PdfPageProps> = ({ pdf, pageCount, containerWidth }) => {
  const canvas = useRef<HTMLCanvasElement>(null)

  const renderPage = useCallback(
    (page: PDFPageProxy) => {
      const calculatedScale = containerWidth / page.getViewport({ scale: DEFAULT_SCALE }).width
      const scale = calculatedScale > DEFAULT_SCALE ? DEFAULT_SCALE : calculatedScale
      const viewport = page.getViewport({ scale })
      const { width, height } = viewport

      if (canvas.current) {
        const context = canvas.current.getContext('2d')

        if (context) {
          context.fillRect(0, 0, width, height)

          page.render({
            canvasContext: context as any,
            viewport,
          })
        }
      }
    },
    [containerWidth],
  )

  const getPageFromPdfAndRenderIt = useCallback(async () => {
    const page = await pdf.getPage(pageCount)
    renderPage(page)
  }, [pdf, pageCount, renderPage])

  useEffect(() => {
    if (pdf) void getPageFromPdfAndRenderIt()
  }, [pdf, getPageFromPdfAndRenderIt])

  return <canvas ref={canvas} width='670' height='870' />
}
