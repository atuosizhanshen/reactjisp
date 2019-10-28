import React, { useState, useCallback, useEffect } from 'react';

function useWinSize(){
    const [size, setSize] = useState({
        width : document.documentElement.clientWidth,
        height : document.documentElement.clientHeight,
    })

    const onResize = useCallback(()=>{ // 目的是为了缓存方法(useMemo是为了缓存变量)
        console.log('进入callback')
        setSize({
            width:document.documentElement.clientWidth,
            height : document.documentElement.clientHeight,
        })
    },[])
    useEffect(()=>{
        console.log('进入了effect')
        window.addEventListener('resize',onResize)
        return ()=>{
            console.log('进入了return effect')
            window.removeEventListener('resize',onResize)
        }
    },[onResize])
    // obj.size = size;
    // obj.onresize = onResize;
    return size
}

function Changesize(){
    const size = useWinSize();
    return(
        <>
            <div>页面Size:{size.width}x{size.height}</div>
            <button>按钮</button>
        </>
    )
}

export default Changesize