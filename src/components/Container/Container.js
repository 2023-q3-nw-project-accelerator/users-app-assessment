import React from 'react'
import './Container.css'

const Container = ({center, children}) => {
let classNames = ['Container']
    if(center){
        classNames.push('Container--center')
    }
        console.log(`<Container/> Rendered!`)
  return (
    <div className={classNames.join(' ')}>{children}</div>
  )
}

export default Container