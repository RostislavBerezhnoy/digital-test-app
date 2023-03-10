import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const getDocxFileFromUrl = async (fileUrl: string): Promise<any> => {
  if (!fileUrl) throw new Error('Url does not exist')

  try {
    const { data } = await axios({
      method: 'GET',
      url: fileUrl,
      responseType: 'arraybuffer',
    })

    return data
  } catch (error) {
    throw new Error(`Docs request error: ${error}`)
  }
}

export const useGetDocxFileFromUrl = (fileUrl: string) =>
  useQuery({
    queryKey: ['docxFile'],
    queryFn: () => getDocxFileFromUrl(fileUrl),
  })
