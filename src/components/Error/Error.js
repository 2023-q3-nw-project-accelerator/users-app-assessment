import React from 'react'
import './Error.css'

function Error({error}) {
    console.log(`<Error/> Rendered!`)
  return (
    <div className='Error'>
    There was an error: {error}
    </div>
  )
}

export default Error