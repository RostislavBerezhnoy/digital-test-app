import { FC } from 'react'
import { useGetDocxFileFromUrl } from 'drivers/hooks/useGetDocxFileFromUrl'
import { useGetParsedHtmlFromDocxFile } from 'drivers/hooks/useGetParsedHtmlFromDocxFile'
import { UrlProps } from 'drivers/types'

export const DocxViwer: FC<UrlProps> = ({ url }) => {
  const { data: file } = useGetDocxFileFromUrl(url)
  const html = useGetParsedHtmlFromDocxFile(file)

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
