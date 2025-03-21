import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  // 添加逻辑
  const handleAdd = () => {
    if (inputValue.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      done: false, // 新增 done 属性
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  // TODO: 实现删除逻辑（参数接收 todo 的 id）
  const handleDelete = (id) => {
    // 你来写：根据 id 删除对应任务
    // 提示：可以使用 filter 方法
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);

  };
  // 切换完成状态
  const toggleDone = (id) => {
    const toggleTodos = todos.map(todo => todo.id == id ? {...todo,done:!todo.done}:todo); // 切换完成状态
    setTodos([...todos,toggleTodos]);
  }

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
      {/* ✅ 点击文字切换状态 */}
      <span
        onClick={() => toggleDone(todo.id)}
        style={{
          cursor: 'pointer',
          textDecoration: todo.done ? 'line-through' : 'none',
          color: todo.done ? 'gray' : 'black',
        }}
      >
        {todo.text}
      </span>

      <button onClick={() => handleDelete(todo.id)}>删除</button>
    </li>
  ))}
</ul>

    </div>
  );
}

export default App;
