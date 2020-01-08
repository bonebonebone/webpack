import React  from 'react';
import ReactDOM from 'react-dom';
import './search.less';
import logo from './images/2223.jpg'
class Search extends React.Component {

render() {
  return <div className='search-text'> search text 
  <img src={logo} />>
  </div> 
}
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
)