import React, { Component } from 'react';

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow:true
        }
        this.toToggle = this.toToggle.bind(this)
    }
    toToggle(){
        this.setState({
            isShow:this.state.isShow?false:true
        })
    }
    shouldComponentUpdate(nextProps,nextState){
        return nextProps.content !== this.props.content;
    }
    render() { 
        return ( 
            <div>
                <div className={this.state.isShow?'show':'hide'}>boss级任务-孙悟空</div>
                <div><button onClick={this.toToggle}>召唤boss</button></div>
            </div>
         );
    }
}
 
export default Boss;