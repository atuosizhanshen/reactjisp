import React, { useState, useEffect, useRef } from 'react';
import Custom from './CustomHook'; // 自定义hook组件

function Hook(props) {
  // 把最新的 props 保存在一个 ref 中 这其实是想要class中this的功能，不是万不得己不要用
  let latestProps = useRef(props);
  console.log(latestProps)
  const [count, setCount] = useState(0);
  // // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
    function handle(){
      console.log('handle')
    }
    return function cleanup(){
      handle()
      console.log('clean up')
    }
  });
  // 该effect Hook 是关于传入[]后需要注意的地方 effect 的依赖频繁变化
  // useEffect(() => {
  //   console.log('是否进入了effect')
  //   const id = setInterval(() => {
  //     setCount(function(c){ // 这样不传入state就可以实现该setinterval函数功能了 并且不会重新渲染整个组件 因为第二个参数“[]”限制它只渲染一次
  //       return c+1
  //     });
  //   }, 1000);
  //   return () => clearInterval(id);
  // },[]);


  console.log('全身上下都跟着动')
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <Custom/>
    </div>
    
  );
}

export default Hook