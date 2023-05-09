import React, { useEffect, useState } from 'react'

const todos = () => {
   
    const [todos, setTodos] = useState([])
    useEffect(() => {
      let todos = localStorage.getItem("todos")
      setTodos(JSON.parse(todos))
     
    }, [])
    

    const deleteTodo = (title) => { 
        let newTodos = todos.filter(item =>{
            return item.title != title
        })
        localStorage.setItem("todos", JSON.stringify(newTodos))
        setTodos(newTodos)
     }

     const editTodo = (first) => { second }
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="text-4xl font-medium title-font mb-4 text-gray-900">Your Todos</h1>
                    {todos.length == 0 && <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Your Todos will show up here. Please add a todo by going to the homepage</p>}
                </div>
                <div class="flex flex-wrap -m-4">


                    {todos.map(item => {
                        return <div class="p-4 lg:w-1/4 md:w-1/2">
                            <div class="h-full flex flex-col items-center text-center">
                                <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={`https://picsum.photos/600/900?a=${item.title}`} />
                                <div class="w-full">
                                    <h2 class="title-font font-medium text-lg text-gray-900">{item.title}</h2>
                                    <p class="mb-4">{item.desc}</p>
                                    <span class="inline-flex">
                                        <a class="text-gray-500 cursor-pointer" onClick={()=>{deleteTodo(item.title)}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20px" height="20px">    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z" /></svg>
                                        </a>
                                        <a class="ml-2 text-gray-500 cursor-pointer" href={`/edit/${item.title}`}> 
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px"><path d="M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226563 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007813 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z" /></svg>
                                        </a>

                                    </span>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default todos