import React from 'react'

interface IGif {
  id: string,
  title: string,
  url: string,
}

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