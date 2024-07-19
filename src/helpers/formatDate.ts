export const getSliceFormatDay = (date: string) => {
  return date?.slice(0, 2)
}

export const getSliceFormatMonth = (date: string) => {
  return date?.split('-')[1]
}

export const getPadStartFormatDate = (date: string | number) => {
  return date.toString().padStart(2, '0')
}

export const getFormatDateObj = (date: Date) => {
  return `${getPadStartFormatDate(date.getDate())}-${getPadStartFormatDate(
    date.getMonth() + 1
  )}-${date.getFullYear()}`
}
