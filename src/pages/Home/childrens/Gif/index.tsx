import React from 'react'
import { IGif } from '../../props'

const Gif = (props: IGif) => {
  const { title, url } = props

  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

export default Gif