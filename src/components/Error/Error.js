import React from 'react'

function Error({error}) {
    console.log(`<Error/> Rendered!`)
  return (
    <div className='Error'>
    There was an error: {error}
    </div>
  )
}

export default Error