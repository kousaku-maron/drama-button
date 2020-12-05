import firebase from '~/firebase'

export type Press = {
  id: string
  pressed: boolean
}

export type UpdatePress = Omit<Press, 'id'>

export const buildPress = (id: string, data: firebase.firestore.DocumentData) => {
  const target: Press = {
    id,
    pressed: data.pressed,
  }

  return target
}
