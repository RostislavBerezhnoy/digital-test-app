import { FC } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { DocxViwer } from './components/DocsViwer'
import { FileViewerProps } from './types'
import { DOCX_TYPE } from './config/files'

const queryClient = new QueryClient()

export const FileViewer: FC<FileViewerProps> = ({ type, url }) => {
  const renderDocxFile = () => {
    if (type === DOCX_TYPE) return <DocxViwer url={url} />
  }

  return <QueryClientProvider client={queryClient}>{renderDocxFile()}</QueryClientProvider>
}
