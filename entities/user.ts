import firebase from '~/firebase'

export type User = {
  id: string
  name: string
  x: number
  y: number
}

export type CreateUser = Omit<User, 'id'>

export type UpdateUser = Omit<User, 'id' | 'name'>

export const buildUser = (id: string, data: firebase.firestore.DocumentData) => {
  const target: User = {
    id,
    name: data.name,
    x: data.x,
    y: data.y,
  }

  return target
}
