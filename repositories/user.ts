import { firestore } from '~/firebase'
import { CreateUser } from '~/entities/user'

export const usersRef = firestore.collection('users')

export const createUser = async (userID: string, data: CreateUser) => {
  const userRef = usersRef.doc(userID)
  await userRef.set({ ...data })
  return { result: true }
}
