import { useState, useEffect } from 'react'
import { User, buildUser } from '~/entities/user'
import { usersRef } from '~/repositories/user'

export const useUsers = (): [User[], boolean, Error | null] => {
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)
  const [values, setValues] = useState<User[]>([])

  useEffect(() => {
    const targetsRef = usersRef
    const unsubscribe = targetsRef.onSnapshot(
      (snapshot) => {
        const values = snapshot.docs.map((doc) => {
          return buildUser(doc.id, doc.data())
        })
        setValues(values)
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

  return [values, loading, error]
}
