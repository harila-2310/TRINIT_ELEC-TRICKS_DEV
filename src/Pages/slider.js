import "./slider.css";
import { useState } from "react";
import Button from 'react-bootstrap/Button';



var data = require("../MOCK_DATA.json");
function NavScrollExample() {

    
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };

  return (
    <div className="App"  style={{marginLeft:'3vw'}}>
       

      <div className="search-container">
      <div className="search-inner">
          <input type="text" value={value} onChange={onChange} />
          <Button onClick={() => onSearch(value)}  variant="success">Search</Button>
        </div>
        <div className="dropdown">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.full_name.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.full_name)}
                className="dropdown-row"
                key={item.full_name}
              >
                {item.full_name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );

    
  
}

export default NavScrollExample;