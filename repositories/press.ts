import { firestore } from '~/firebase'
import { UpdatePress } from '~/entities/press'

export const pressesRef = firestore.collection('press')

export const updatePress = async (pressID: string, data: UpdatePress) => {
  const pressRef = pressesRef.doc(pressID)
  await pressRef.set({ ...data })
  return { result: true }
}
