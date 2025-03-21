import { useState } from 'react';


// src/App.jsx
function App() {
  // REVIEW:如何在 React 中保存“数字”?
  // A:使用状态变量useState
  // useState(0)：声明了一个状态变量 count，初始为 0
  // setCount 是修改这个变量的函数
  const [count, setCount] = useState(0); 

  // 实现加
  const increase = () => {
    setCount(count + 1);
  };
  // 实现减
  const decrease = () => {
    setCount(count - 1);
  };
  // 禁用“减一”按钮当 count 为 0 时（防止负数）
  // 归零
  const reset = () =>{
    setCount(0);
  }
  return (
    <>
      <h1>我的计数器:{count}</h1>
      <button onClick={increase}>加一</button>
      <button onClick={decrease}>减一</button>
      <button onClick={reset}>归零</button>
    </>
  );
}

export default App;
