import React, {createContext, useReducer} from 'react';

export const ColorContext = createContext({})

export const UPDATE_COLOR = 'UPDATE_COLOR';

const reducer = (state,action)=>{
    switch(action.type){
        case UPDATE_COLOR:
            return action.color
        default:
            return state
    }
}

export const Color = (props) => { // dispatch方法内传入的参数就是给userReducer中第一个参数函数的action
    const [color,dispatch] = useReducer(reducer,'#000') // 第二个参数是‘reducer’方法中的state
    return(
        <ColorContext.Provider value={{color,dispatch}}>
            {props.children}
        </ColorContext.Provider>
    )
}
