import '../../App.css';
import CredityFacilityDetails from "./creditFacilityDetails";
import AssetClassification from "./assetClassification";
import GurantorDetails from "./gurantorDetails";

function CredityFacilityMain({ base }) {
  const creditFacilityDetails = base.data.report.productSec.creditFacilityDetailsasBorrowerSecVec.creditFacilityDetailsAsBorrowerSec;

  return (
    <div>
      {creditFacilityDetails.map((item, index) => {
        const creditDetails = item.creditFacilityCurrentDetailsVec.creditFacilityCurrentDetails;
        const AssetClassificationDetails = item.cfHistoryForAcOrDpdVec.cfHistoryForAcOrDpd;
        const gurantorDetails = item.creditFacilityGuarantorDetailsVec;
        return (
          <div key={index} style={{marginTop : '40px'}}>
            <CredityFacilityDetails base={creditDetails} />
            <AssetClassification base={AssetClassificationDetails} />
            <GurantorDetails base={base} />
          </div>
        );
      })}
    </div>
  );
}

export default CredityFacilityMain;
