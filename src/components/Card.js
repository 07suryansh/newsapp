import React from 'react'
import './card.css'

export default function Card(props) {
  return (
    <div className='card'>
    <img src={props.imgurl} alt="" />
    <div className="newsTitle">{props.title}</div>
    <div className="newsAuthor">{props.author}</div>
    <div className="newsDescription">{props.description}</div>
    </div>
  )
}
