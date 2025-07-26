import React, { useContext } from 'react';
import { ThemeContext } from './components/context/ThemeContext.jsx';
import ToDoList from '../src/components/todo/ToDoList.jsx';
import Form from './components/form/Form.jsx';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>

        <button
          onClick={toggleTheme}
          style={{
            fontSize: '24px',
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            color: theme === 'light' ? '#000' : '#fff',
          }}
          aria-label="Toggle theme"
          title="تبديل الثيم"
        >
          {theme === 'light' ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
        </button>
      </header>

      <main>
        <ToDoList />
        <Form />
      </main>
    </div>
  );
}

export default App;
