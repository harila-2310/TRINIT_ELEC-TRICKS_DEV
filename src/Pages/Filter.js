import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Form from 'react-bootstrap/Form';
function BasicButtonExample(props) {
  return (
    <div style={{marginLeft:'4vw'}}>
      <DropdownButton id="dropdown-basic-button" title={props.title}>
   
   <Form.Control
          type="search"
          placeholder={props.ph}
          className='me-2'
          aria-label="Search"
        />
  <Dropdown.Item href="#/action-2">{props.value}</Dropdown.Item>
  <Dropdown.Item href="#/action-3">{props.value1}</Dropdown.Item>
</DropdownButton>
    </div>
  );
}

export default BasicButtonExample;