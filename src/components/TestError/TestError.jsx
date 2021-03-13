import React from 'react'
import useJsonFetch from '../../hooks/useJsonFetch'

export default function TestError() {
  const [loading, error, data] = useJsonFetch(process.env.REACT_APP_URL_ERROR)

  return (
    <div>
      {loading && <div>Loading</div>}
      {error && <div>{error.message}</div>}
      {data && [data].map((key) => <div key={key.status}>Status : {key.status}</div>)}
    </div>
  )
}
