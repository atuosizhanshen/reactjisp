import React, {useState,useMemo} from 'react';

function Twodogs(){
    const [jack,setJack] = useState('大黄正在睡觉')
    const [rose,setRose] = useState('二哈正在睡觉')
    return(
        <>
        <button onClick={()=>{setJack(new Date().getTime())}}>大黄</button>
        <button onClick={()=>{setRose(new Date().getTime()+'二哈跑过来了')}}>二哈</button>
        <ChildComponent name={jack}>{rose}</ChildComponent>
        </>
    )
}

function ChildComponent({name,children}){

    function changeState(name){
        console.log('来人，来人')
        return name+ '是小狗'
    }

    const actionJack =  useMemo(()=>changeState(name),[name])

    return(
        <>
        <div>{actionJack}</div>
        <div>{children}</div>
        </>
    )
}

export default Twodogs