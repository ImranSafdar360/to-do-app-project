"use client"
import React, { useState } from 'react'

const ToDo_App = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault();
      setMainTask([...mainTask, { title, desc }])
    setTitle("")
    setDesc("")
  }

  const deleteHandler = (i) =>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
  }
  let renderTask = <h2>No Task Available</h2>
if (mainTask.length>0) {
  renderTask = mainTask.map((t, i)=>{
    return (
     <>
     <li key={i} className='mb-3'>
     <div className='flex justify-between items-center w-[100%]'>
     <h5>{t.title}</h5>
     <h4>{t.desc}</h4>
     <button onClick={() =>{
      deleteHandler(i)
     }} className='px-[.5rem] py-[.1rem] text-white font-semibold bg-red-500 rounded flex justify-center items-center'>Delete</button>
     </div>
     
     </li>
     </>
    )
   })
}
  return (
    <>
      <div className="container-fluid flex flex-col justify-center items-center">
        <h1 className='text-center font-bold text-2xl text-white bg-black p-5 w-full'>ImranDevify's To-Do List</h1>
        <form className='mt-10 text-center border-2 border-black p-5 rounded-md'>
          <input type="text" placeholder='Enter Title Here...' className='border-2 border-black px-5 py-2 outline-none mx-3' value={title} onChange={(e) =>{
            setTitle(e.target.value)
          }}/>
          <input type="text" placeholder='Enter Description Here...' className='border-2 border-black px-5 py-2 outline-none mx-3' value={desc} onChange={(e) =>{
            setDesc(e.target.value)
          }}/>
          <hr/>
          <button onClick={submitHandler} className='w-[96%] mt-5 px-4 py-2 bg-black text-white font-bold rounded cursor-pointer'>Add Task</button>
        </form>
        <div className="textarea border-2 border-black rounded-md w-[40%] h-[55vh] mt-5 overflow-x-hidden">
          <ul className='w-full bg-blue-100 p-5'>
              {renderTask}
          </ul>
        </div>
      </div>
    </>
  )
}

export default ToDo_App
