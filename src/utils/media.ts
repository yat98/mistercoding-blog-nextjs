export const media = (url: string) => {
  if(url) {
    return process.env.NEXT_PUBLIC_MEDIA_URL + url
  }
  return url
}