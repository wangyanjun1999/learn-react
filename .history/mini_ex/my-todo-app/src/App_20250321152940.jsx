import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (inputValue.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  // TODO: 实现删除逻辑（参数接收 todo 的 id）
  const handleDelete = (id) => {
    // 你来写：根据 id 删除对应任务
    // 提示：可以使用 filter 方法

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>📝 我的任务清单</h2>

      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="请输入任务..."
      />

      <button onClick={handleAdd}>添加</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            {<button onClick={handleDelete}>删除</button> /* TODO: 补上一个删除按钮，点击时调用 handleDelete 并传入对应 id */}
          
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
