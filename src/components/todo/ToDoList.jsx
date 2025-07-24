import React, { useReducer, useState } from 'react';

// دالة reducer بتحدد كيف تتغير الحالة حسب نوع الإجراء (action)
function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false }
      ];
    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE':
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export default function ToDoList() {
  // استخدام useReducer لإدارة حالة قائمة المهام
  const [todos, dispatch] = useReducer(reducer, []);
  // useState لإدارة قيمة النص في حقل الإدخال
  const [input, setInput] = useState('');

  // عند إرسال النموذج، نضيف المهمة
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    dispatch({ type: 'ADD', payload: input });
    setInput(''); // تفريغ الحقل بعد الإضافة
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>To-Do List</h2>

      {/* النموذج لإضافة مهمة جديدة */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="أدخل مهمة جديدة"
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>
          أضف المهمة
        </button>
      </form>

      {/* قائمة المهام */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              marginBottom: '8px',
              textDecoration: todo.completed ? 'line-through' : 'none',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              border: '1px solid #ccc',
              padding: '8px',
              borderRadius: '4px',
            }}
          >
            <span onClick={() => dispatch({ type: 'TOGGLE', payload: todo.id })} style={{ cursor: 'pointer' }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: 'DELETE', payload: todo.id })}>
              حذف
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
