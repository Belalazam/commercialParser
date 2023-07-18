import './App.css';
import Header from './components/header'
import BorrowerProfile from './components/borrowerProfile';
import TransUnionCibilRank from './components/transUnionCibilRank'
import EnquiryInformation from './components/enquiryInformation'


function App() {
  return (
    <div>
        <Header/>
        <EnquiryInformation/>
        <BorrowerProfile/>
        <TransUnionCibilRank/>
    </div>
  );
}

export default App;
