import React from 'react'
import useJsonFetch from '../../hooks/useJsonFetch'

function TestData() {
  const [loading, error, data] = useJsonFetch(process.env.REACT_APP_URL_DATA)

  return (
    <div>
      {loading && <div>Loading</div>}
      {error && <div>{error.message}</div>}
      {data && [data].map((key) => <div key={key.status}>Status : {key.status}</div>)}
    </div>
  )
}

export default TestData
