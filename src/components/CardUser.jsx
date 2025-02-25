import React from 'react'

const CardUser = ({name, email, image}) => {
  return (
    <div className="flex gap-2 w-[200px] p-2 bg-neutral-600 border rounded-lg items-center">
      <img className="rounded-full w-12 h-12" src={image} alt={name}/>
      <div>
        <h4 className="text-sm">{name}</h4>
        <p className="text-xs">{email}</p>
      </div>
    </div>
  )
}

export default CardUser