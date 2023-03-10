import { useEffect, useState } from 'react'
// @ts-ignore - ts требует тип у mammoth у которого в свою очередь его просто нет, поэтому игнор варнинга
import * as mammoth from 'mammoth/mammoth.browser.js'

export const useGetParsedHtmlFromDocxFile = (file: unknown): string => {
  const [html, setHtml] = useState<string>('')

  useEffect(() => {
    const getConvertedDocxIntoHTML = async () => {
      const { value } = await mammoth.convertToHtml(
        { arrayBuffer: file },
        { includeDefaultStyleMap: true },
      )

      setHtml(value)
    }

    if (file) void getConvertedDocxIntoHTML()
  }, [file])

  return html
}
