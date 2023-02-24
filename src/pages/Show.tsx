import React from 'react'
import { useParams } from 'react-router-dom'
import showStore from '../stores/showStore'

export default function Show() {
  const store: any = showStore()
  const params: any = useParams()

  React.useEffect(() => {
    store.fetchData(params.id)
  }, [])
  return (
    <div>Show</div>
  )
}
