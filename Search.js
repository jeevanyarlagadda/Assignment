import React ,{usestate } from 'react';

const Search = (props) => {
  const filteredData = props.users.filter((el) => {
    //if no input return the original
    if(props.input == ''){
      return NaN
    }
      return el.first_name.toLowerCase().includes(props.input) ? el :
      NaN;
  });
  console.log(filteredData);
  return (
<div>
      <ul>


          {
            filteredData.map((item) => (
              <div>
                <li key={item.id}><b>{item.id}</b></li>
                <li key={item.id}><b>{item.first_name}</b></li>
                <li key={item.id}><b>{item.last_name}</b></li>
                <li key={item.id}><b>{item.email}</b></li>
                </div>
          ))}
        
        
        </ul>
    </div>
     
  );
}

export default Search;