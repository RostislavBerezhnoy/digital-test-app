import { FC } from 'react'
import { useGetDocxFileFromUrl } from 'drivers/hooks/useGetDocxFileFromUrl'
import { useGetParsedHtmlFromDocxFile } from 'drivers/hooks/useGetParsedHtmlFromDocxFile'

export type DocxViwerProps = {
  url: string
}

export const DocxViwer: FC<DocxViwerProps> = ({ url }) => {
  const { data: file } = useGetDocxFileFromUrl(url)
  const html = useGetParsedHtmlFromDocxFile(file)

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
