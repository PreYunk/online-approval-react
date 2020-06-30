import React from 'react';
import Select from 'react-dropdown-select';
import './style.css';
const options = [
  { value: 'user1', label: 'user1' },
  { value: 'user2', label: 'user2' },
  { value: 'user3', label: 'user3' },
];

const sty = {
  width:'15%',
  margin: '0 auto'
}
 
class DropDown extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };
  render() {
    const { selectedOption } = this.state;
    const label = selectedOption?selectedOption[0].label:"";
    console.log( selectedOption);
    return (
     <div style={sty}>
          <Select 
          className='selectbar'
          placeholder={'select user'}
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        autosize={true}
       
      />
    {/* <p>{label}</p> */}
     </div>
    
    );
  }
}

export default DropDown;