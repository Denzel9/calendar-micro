export interface IUser {
  name: string
  lastName: string
  email: string
  templates: []
  weather: IWeather
  docId: string
  tags: string[]
  userImg: string
}

export interface IWeather {
  city: string
  favorites: string[]
  previousSearch: string[]
}