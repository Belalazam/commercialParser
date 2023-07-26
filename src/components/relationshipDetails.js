import "../App.css";
import { ListToStringList } from "../utils.js";

function RelationshipDetails({ base }) {
  const relationshipDetails  = base.data.report.productSec.relationshipDetailsVec.relationshipDetails
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 15 }}>
      <div>
        {
          <table>
            {relationshipDetails.map((item, index) => {
              const temp = relationshipDetails[index]
              return (
                <>
                {index % 4 === 0 ? (
                  <thead>
                    <tr>
                      <th colspan="12">
                        <p>9. Relationship Details</p>
                      </th>
                    </tr>
                  </thead>
                ) : null}
                                      <tr>
                      <td colspan="12">
                        <p>Relationship {index + 1}</p>
                      </td>
                    </tr>
                  <tbody>
                    <tr>
                      <td colspan="4">
                        <p>
                          RELATIONSHIP DETAILS
                          <div className="grid-container">
                            <div>Name:</div>
                            <div>{temp.relationshipInformation.name}</div>
                            <div>Type:</div>
                            <div>
                              {temp.relationshipInformation.relatedType}
                            </div>
                            <div>Relationship:</div>
                            <div>
                              {temp.relationshipInformation.relationship}
                            </div>
                            <div>Percentage Holding:</div>
                            <div>{temp.relationshipInformation.percentageOfControl}</div>
                            <div>Date Of Birth:</div>
                            <div>{temp.relationshipInformation.dateOfBirth}</div>
                            <div>Gender:</div>
                            <div>{temp.relationshipInformation.gender}</div>
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
                                {temp.borrwerAddressContactDetails.address}
                              </div>
                              <div>Telephone No:</div>
                              <div>
                                {temp.borrwerAddressContactDetails.telephoneNumber}
                              </div>
                              <div>Mobile No:</div>
                              <div>
                                {temp.borrwerAddressContactDetails.mobileNumber}
                              </div>
                              <div>Fax No:</div>
                              <div>
                                {temp.borrwerAddressContactDetails.faxNumber}
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
                            <div>-</div>
                            <div>Registration Number:</div>
                            <div>
                              -
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
