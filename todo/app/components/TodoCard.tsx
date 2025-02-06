import React from 'react'
import { ITodo } from '../interface/todo'


const TodoCard: React.FC<{ todo: ITodo }> = ({ todo }) => {
  return (
    
    <div key={todo.id} className="bg-gray-50 p-4 rounded-lg flex justify-between items-center gap-2.5 ">
    <div>
    <div className="flex flex-row flex-wrap items-center gap-2.5">
  <h3 className="flex-none text-xl font-medium text-gray-900">Title</h3>
  <h2 className="flex-auto text-m font-medium text-gray-600">{todo.title}</h2>
</div>

      <h3 className="text-xl font-medium text-gray-900">Content</h3>
      <p className="text-gray-600 whitespace-pre-wrap">{todo.content}</p>
      </div>
    </div>
  )
}

export default TodoCard