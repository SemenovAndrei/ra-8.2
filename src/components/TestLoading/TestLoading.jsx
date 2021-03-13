import React from 'react'
import useJsonFetch from '../../hooks/useJsonFetch'
import ShowSpinner from '../ShowSpinner/ShowSpinner'

export default function TestLoading() {
  const [loading, error, data] = useJsonFetch(process.env.REACT_APP_URL_LOADING)

  return (
    <div>
      {loading && <ShowSpinner />}
      {error && <div>{error.message}</div>}
      {data && [data].map((key) => <div key={key.status}>Status : {key.status}</div>)}
    </div>
  )
}
