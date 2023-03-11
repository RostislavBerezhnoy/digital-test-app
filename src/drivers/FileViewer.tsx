import { FC } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { DocxViwer } from './components/DocsViewer'
import { PdfViewer } from './components/PdfViewer'
import { ImageViewer } from './components/ImageViewer'
import { UnsupportedViewer } from './components/UnsupportedViewer'
import { isDocsType, isPdfType, isImgType } from './utils/guards'
import { FileViewerProps } from './types'

const queryClient = new QueryClient()

export const FileViewer: FC<FileViewerProps> = ({ type, url }) => {
  const renderViewer = () => {
    if (isDocsType(type)) return <DocxViwer url={url} />

    if (isPdfType(type)) return <PdfViewer url={url} />

    if (isImgType(type)) return <ImageViewer url={url} />

    return <UnsupportedViewer type={type} />
  }

  return <QueryClientProvider client={queryClient}>{renderViewer()}</QueryClientProvider>
}
