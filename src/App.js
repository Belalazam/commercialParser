import "./App.css";
import response from "./test.json";
import Header from "./components/header";
import BorrowerProfile from "./components/borrowerProfile";
import TransUnionCibilRank from "./components/transUnionCibilRank";
import EnquiryInformation from "./components/enquiryInformation";
import EnquirySummary from "./components/enquirySummary";
import DerogatoryInformation from "./components/derogatoryInformation";
import CommercialCreditVision from "./components/commercialCreditVision";
import LocationDetails from "./components/locationDetails";
import RelationshipDetails from "./components/relationshipDetails";
import OutstandingBalancesByCreditFacilityGroups from "./components/outstandingBalancesByCreditFacilityGroups";
import EnquriyDetailsInLastThirtySixMonths from "./components/enquiryDetailsInLastThirtySixMonths";
import CredityFacilityMain from "./components/creditFacilityDetailsAsBorrower/creditFacilityMain";

function App() {
  return (
    <div>
      <Header base={response} />
      <EnquiryInformation base={response} />
      <BorrowerProfile base={response} />
      <TransUnionCibilRank base={response} />
      <CommercialCreditVision base={response} />
      <EnquirySummary base={response} />
      <DerogatoryInformation base={response} />
      <OutstandingBalancesByCreditFacilityGroups base={response} />
      <LocationDetails base={response} />
      <RelationshipDetails base={response} />
      <CredityFacilityMain base={response} />
      <EnquriyDetailsInLastThirtySixMonths base={response} />
    </div>
  );
}

export default App;
