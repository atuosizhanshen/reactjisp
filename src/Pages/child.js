import React, { Component } from 'react';
class Childlist extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log(nextProps.content === this.props.content)
        return nextProps.content !== this.props.content;
    }
    render() {
        console.log('renderChild-------1')
        return (
            <li>{this.props.content}</li>    
        );
    }
}
 
export default Childlist;