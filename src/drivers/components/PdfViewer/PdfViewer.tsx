import { FC, useRef } from 'react'
import { useGetPdfFromUrl } from 'drivers/hooks/useGetPdfFromUrl'
import { PdfPage } from './PdfPage'
import { UrlProps } from 'drivers/types'

export const PdfViewer: FC<UrlProps> = ({ url }) => {
  const container = useRef<HTMLInputElement>(null)
  const { data: pdf } = useGetPdfFromUrl(url)

  const renderPages = () => {
    if (!pdf) return null

    const pages = Array.from({ length: pdf.numPages })

    return pages.map((_, i) => (
      <PdfPage
        key={i}
        pageCount={i + 1}
        pdf={pdf}
        containerWidth={container?.current?.getBoundingClientRect()?.width || 0}
      />
    ))
  }

  return (
    <div
      ref={container}
      style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: 800 }}
    >
      {renderPages()}
    </div>
  )
}
