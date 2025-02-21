import React from 'react'

const Content = ({title, children}) => {
  return (
    <div className="flex flex-col gap-4 w-[70%] border-2 border-white rounded-xl p-3">
      <h1>{title}</h1>
      {children}
    </div>
  )
}

export default Content