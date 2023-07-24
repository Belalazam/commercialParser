import "../App.css";
import { ListToStringList } from "../utils.js";

function RelationshipDetails({ base }) {
  const temp =
    base.data.report.productSec.locationDetailsSec.locationInformationVec
      .locationInformation;
  const enquiryInformation = base.data.report.enquiryInformationRec;
  const borrowerDetails =
    base.data.report.productSec.borrowerProfileSec.borrwerDetails;
  const borrowerIdDetailsVec =
    base.data.report.productSec.borrowerProfileSec.borrowerIdDetailsVec;
  const bororwerAddressContactDetails =
    base.data.report.productSec.borrowerProfileSec.borrwerAddressContactDetails;
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 15 }}>
      <div>
        {
          <table>
            {temp.map((item, index) => {
              return (
                <>
                  <thead>
                    <tr>
                      <th colspan="12">
                        <p>9. Relationship Details</p>
                      </th>
                    </tr>
                    <tr>
                      <td colspan="12">
                        <p>Relationship {index + 1}</p>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="4">
                        <p>
                          RELATIONSHIP DETAILS
                          <div className="grid-container">
                            <div>Name:</div>
                            <div>{enquiryInformation.borrowerName}</div>
                            <div>Type:</div>
                            <div>
                              {borrowerDetails.borrowersLegalConstitution}
                            </div>
                            <div>Relationship:</div>
                            <div>
                              {ListToStringList(
                                borrowerDetails.classOfActivityVec
                                  .classOfActivity,
                                "number"
                              )}
                            </div>
                            <div>Percentage Holding:</div>
                            <div>{borrowerDetails.businessCategory}</div>
                            <div>Date Of Birth:</div>
                            <div>{borrowerDetails.businessIndustryType}</div>
                            <div>Gender:</div>
                            <div>{borrowerDetails.salesFigure}</div>
                          </div>
                        </p>
                      </td>
                      <td colspan="4">
                        <p>
                          ADDRESS & CONTACT DETAILS
                          <div className="grid-container">
                            <div className="grid-container">
                              <div>Registered Office Address:</div>
                              <div>
                                {
                                  enquiryInformation.addressVec.address[0]
                                    .addressLine
                                }{" "}
                                {
                                  enquiryInformation.addressVec.address[0]
                                    .pinCode
                                }
                              </div>
                              <div>Telephone No:</div>
                              <div>
                                {bororwerAddressContactDetails.telephoneNumber}
                              </div>
                              <div>Mobile No:</div>
                              <div>
                                {bororwerAddressContactDetails.mobileNumber}
                              </div>
                              <div>Fax No:</div>
                              <div>
                                {bororwerAddressContactDetails.faxNumber}
                              </div>
                            </div>
                          </div>
                        </p>
                      </td>
                      <td colspan="4">
                        <p>
                          IDENTIFICATION DETAILS
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
                </>
              );
            })}
          </table>
        }
      </div>
    </div>
  );
}

export default RelationshipDetails;
