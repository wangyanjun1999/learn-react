// src/App.jsx
function App() {
  // REVIEW:如何在 React 中保存“数字”?
  // A:使用状态变量useState
  // useState(0)：声明了一个状态变量 count，初始为 0
  // setCount 是修改这个变量的函数
  const [count, setCount] = useState(0); 
  return (
    <>
      <h1>我的计数器</h1>
    </>
  );
}

export default App;
