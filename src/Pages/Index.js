import React from 'react';
import { Link  } from 'react-router-dom';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
			list:[
				{cid:123,title:'的个人博客-1'},
	            {cid:456,title:'的个人博客-2'},
	            {cid:789,title:'的个人博客-3'},
			]
        }
    }
    render() { 
        return (
        	<ul>
        	{
        		this.state.list.map((item,index)=>{
        			return(
        				<li key={index}>
        					<Link to={'/list/'+item.cid}>{item.title}</Link>
        				</li>
        			)
        		})
			}
			{/* <Redirect to='/home'/> */}
        </ul>
        );
    }
}
 
export default Index;