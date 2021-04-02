
import './App.css';
import {Header} from './components/header';
import {Balance} from './components/balance';
import {Expense} from './components/expense';
import {TransactionList} from './components/transactionList';
import {AddTransaction} from './components/addTransaction';

import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
          <Balance />
          <Expense />
          <TransactionList />
          <AddTransaction />
      </div>
      </GlobalProvider>
  );
}

export default App;
