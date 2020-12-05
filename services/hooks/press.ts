import { useState, useEffect } from 'react'
import { Press, buildPress } from '~/entities/press'
import { pressesRef } from '~/repositories/press'

export const useHelloPress = (): [Press, boolean, Error | null] => {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)
  const [value, setValue] = useState<Press | null>(null)

  useEffect(() => {
    const targetsRef = pressesRef.doc('hello')
    const unsubscribe = targetsRef.onSnapshot(
      (snapshot) => {
        if (!snapshot.exists) {
          setValue(null)
        }
        const value = buildPress(snapshot.id, snapshot.data())
        setValue(value)
        setLoading(false)
      },
      (error) => {
        console.info(error)
        setError(error)
      }
    )

    return () => {
      unsubscribe()
    }
  }, [])

  return [value, loading, error]
}
