import React, {Fragment} from 'react';
import Childlist from './child';
import Boss from './Boss'
import Axios from 'axios';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
        this.state = {
            inputVal : '',
            list : ['服务1','服务2']
        }
        this.addList = this.addList.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }
    inputChange(e){
        // console.log(this.input.current.getAttribute('class'))
        this.setState({
            inputVal : e.target.value,
        })
    }
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputVal],
            inputVal:'',
        });
    }
    render() {
        console.log('render---------2')
        return (
            <Fragment>
                <h2>我是 Home 页面</h2>
                <input 
                className='newInput'
                ref={this.input} 
                onChange={this.inputChange} 
                value={this.state.inputVal}/> 
                <button onClick={this.addList}> 增加服务 </button>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return(
                                // <li key={item+index}>{item}</li>
                                <Childlist content={item} key={item+index}/>
                            )
                        })
                    }
                </ul>
                <Boss/>
            </Fragment>
        );
    }
    // componentWillMount(){
    //     console.log('componentWillMount---------1')
    // }
    componentDidMount(){
        Axios.get('https://www.easy-mock.com/mock/5d5e5eea73443c206634248b/example/zlmock')
        .then((res)=>{
            console.log(res)
        })
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log(nextProps)
        console.log('shouldComponentUpdate---------4')
        return true
    }
    // componentWillUpdate(){
    //     console.log('componentWillUpdate---------5')
    // }
    // componentDidUpdate(){
    //     console.log('componentDidUpdate----------6')
    // }
}
 
export default Home;