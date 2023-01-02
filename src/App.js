import Header from './components/Header';
import HeartsList from './components/HeartsList';
import './App.css';

function App() {

  return (                  // we need to only return 1 element from our component so enclose it in div or <>  - fragment

    <>
      <Header />
      <HeartsList />

    </>
  );

}

export default App;
