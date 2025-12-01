import { put, del } from "@vercel/blob"

export async function uploadFileToBlob(fileName: string, content: Buffer | Blob): Promise<string> {
  const blob = await put(fileName, content, {
    access: "public",
  })
  return blob.url
}

export async function deleteFileFromBlob(url: string): Promise<void> {
  await del(url)
}
