import "../App.css";

function EnquiryInformation({ base }) {
  const enquiryInformation = base.data.report.enquiryInformationRec;
  const borrwerDetails =
    base.data.report.productSec.borrowerProfileSec.borrwerDetails;
  const address = base.data.report.enquiryInformationRec.addressVec.address[0];
  return (
    <div
      className="trans-union-cibil-rank"
      style={{ display: "flex", justifyContent: "center", margin: 40 }}
    >
      <table>
        <thead>
          <tr>
            <th colspan="5">
              <p>1. Enquiry Information</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>
                Search Criteria:
                <span>
                  &nbsp;{enquiryInformation.borrowerName}
                  ,&nbsp;&nbsp;{borrwerDetails.dateOfIncorporation},&nbsp;&nbsp;
                  {enquiryInformation.pan},&nbsp;&nbsp;{address.addressLine}
                </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EnquiryInformation;
