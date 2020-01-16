import React, { useState, useEffect, useRef } from 'react';
import Custom from './CustomHook'; // 自定义hook组件

function Hook(props) {
  // 把最新的 props 保存在一个 ref 中 这其实是想要class中this的功能，不是万不得己不要用
  // let latestProps = useRef(props);// useRef() Hook 不仅可以用于 DOM refs
  // console.log(latestProps)
  const [count, setCount] = useState(88);
  const ref = useRef(10)
  //const aaa = 22;
  // console.log(ref)
  // // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
    function handle(){
      console.log('handle')
    }
    console.log('current222'+ref.current)
    ref.current = count // 作为实例变量时变更.current 属性不会引发组件重新渲染
    console.log('current'+ref.current)
    // setTimeout(function(){
    //   console.log(count) // 1、2、3、4
    //   console.log(ref.current) // 4、4、4、4
    // },2000)
    
    return function cleanup(){
      handle()
      console.log('clean up')
    }
  });
  
  const prevCount = ref.current;
  console.log('-------------------------')
  console.log('prevCount'+prevCount)
  console.log('全身上下都跟着动')
  // 该effect Hook 是关于传入[]后需要注意的地方 effect 的依赖频繁变化
  // Hook中由useState创建的setCount第一个参数可以接受函数为参数，并且其中函数的第一个参数是useState时的count!!
  // useEffect(() => {
  //   console.log('是否进入了effect')
  //   const id = setinterval(() => {
  //     setCount(function(c){ // 这样不传入state就可以实现该setinterval函数功能了 并且不会重新渲染整个组件??? 因为第二个参数“[]”限制它只渲染一次
  //       return c+1
  //     });
  //   }, 1000);
  //   return () => clearInterval(id);
  // },[]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>precount:{prevCount}</p>
      <p>之所以延迟输出一个数是因为执行顺序的问题 <br/>effect函数是滞后于这个return的渲染</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <Custom/>
    </div>
    
  );
}

export default Hook
