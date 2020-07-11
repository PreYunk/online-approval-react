import React from 'react';
import DropDown from './dropdown1';
import './style.css';
class Send extends React.Component{
    constructor(){
        super()
        this.state={
            showMe:false
        }
    }
    
    operation()
    {
        this.setState({
            showMe : true
        })
    }
    render(){
        return (
            <div>
                <button className='btn' onClick={()=>this.operation()}>Send To</button>
                {
                    this.state.showMe? <DropDown /> : null
                }
            </div>
        )
    }
}

export default Send;