import { ListToStringList } from "../utils.js";
import "../App.css";

function BorrowerProfile({ base }) {
  const enquiryInformation = base.data.report.enquiryInformationRec;
  const borrowerDetails =
    base.data.report.productSec.borrowerProfileSec.borrwerDetails;
  const borrowerIdDetailsVec =
    base.data.report.productSec.borrowerProfileSec.borrowerIdDetailsVec;
  const bororwerAddressContactDetails =
    base.data.report.productSec.borrowerProfileSec.borrwerAddressContactDetails;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: 40,
        flexDirection: "column",
      }}
    >
      <table>
        <thead>
          <tr>
            <th colspan="5">
              <p>2. Borrower Profile</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>
                Borrower Details
                <div className="grid-container">
                  <div>Name:</div>
                  <div>{enquiryInformation.borrowerName}</div>
                  <div>Legal Constitution:</div>
                  <div>{borrowerDetails.borrowersLegalConstitution}</div>
                  <div>Class Of Activity:</div>
                  <div>
                    {ListToStringList(
                      borrowerDetails.classOfActivityVec.classOfActivity,
                      "number"
                    )}
                  </div>
                  <div>Business Category:</div>
                  <div>{borrowerDetails.businessCategory}</div>
                  <div>Industry Type:</div>
                  <div>{borrowerDetails.businessIndustryType}</div>
                  <div>Sales Figure:</div>
                  <div>{borrowerDetails.salesFigure}</div>
                  <div>No. Of Employees:</div>
                  <div>{borrowerDetails.numberOfEmployees}</div>
                  <div>Date Of Incoporation:</div>
                  <div>{borrowerDetails.dateOfIncorporation}</div>
                </div>
              </p>
            </td>
            <td>
              <p>
                Address & Contacts Details
                <div className="grid-container">
                  <div className="grid-container">
                    <div>Registered Office Address:</div>
                    <div>
                      {enquiryInformation.addressVec.address[0].addressLine}{" "}
                      {enquiryInformation.addressVec.address[0].pinCode}
                    </div>
                    <div>Telephone No:</div>
                    <div>{bororwerAddressContactDetails.telephoneNumber}</div>
                    <div>Mobile No:</div>
                    <div>{bororwerAddressContactDetails.mobileNumber}</div>
                    <div>Fax No:</div>
                    <div>{bororwerAddressContactDetails.faxNumber}</div>
                  </div>
                </div>
              </p>
            </td>
            <td>
              <p>
                Identification Details
                <div className="grid-container">
                  <div>PAN:</div>
                  <div>{enquiryInformation.pan}</div>
                  <div>Registration Number:</div>
                  <div>
                    {ListToStringList(
                      borrowerIdDetailsVec.borrowerIdDetails,
                      "registrationNumber"
                    )}
                  </div>
                  <div>CIN:</div>
                  <div></div>
                  <div>TIN:</div>
                  <div></div>
                  <div>Service Tax No:</div>
                  <div></div>
                  <div>URN:</div>
                  <div></div>
                  <div>CKYC</div>
                  <div></div>
                  <div>Last Reported Date</div>
                </div>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td>
              <p>Delinquencies Reported on the Borrower</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                Yours: Current:<span> Yes </span>Last 24 Months:
                <span> No </span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                Outside: Current:<span> Yes </span>Last 24 Months:
                <span> No </span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              Delinquencies Reported on Related Parties/ Guarantors of the
              Borrower in Last 24 Months
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "center" }}>
              <p>
                No Delinquency information reported on the Related
                Parties/Guarantors
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BorrowerProfile;
