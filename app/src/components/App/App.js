import './App.css';
import Item from '../Item/Item';

function App() {

  const data = require('../../utils/edgar-leal.json');

  console.log(data);

  return (
    <div className="App">
      {data.map(item => (
        <Item key={`item-${item.id}`} item={item}/>
      ))}
    </div>
  );
}

export default App;
