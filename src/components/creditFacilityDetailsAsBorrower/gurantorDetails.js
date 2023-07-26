import '../../App.css';
import { ListToStringList } from "../../utils.js";


function GurantorDetails({base,index}) {
  const details = base.guarantorDetails
  const address = base.guarantorAddressContactDetails
  const id = (base.guarantorDetailsBorrowerIdDetailsVec.guarantorIdDetails == null) ? {} : base.guarantorDetailsBorrowerIdDetailsVec.guarantorIdDetails[0]
  console.log(id)
  return (
    <div style={{display:'flex',justifyContent:'center' , margin: 15 }}>
    <table>
        <tbody>
            <tr>
                <td colSpan={3}>
                    <p>
                    GUARANTOR DETAILS
                    </p>
                </td>
            </tr>
            <tr>
                <td colSpan={3}>
                    <p>
                        Gurantor {index+1}
                    </p>
                </td>
            </tr>
            <tr>
                <td colSpan={1}>
                  <p>  Gurantor Details</p>
                <div className="grid-container">
                  <div>Name:</div>
                  <div>{details.name}</div>
                  <div>Type:</div>
                  <div>
                  {details.relatedType}
                  </div>
                  <div>Business Category:</div>
                  <div>{details.businessCategory}</div>
                  <div>Industry Type:</div>
                  <div>{details.businessIndustryType}</div>
                  <div>Date Of Birth:</div>
                  <div>{details.dateOfBirth}</div>
                  <div>Gender:</div>
                  <div>{details.gender}</div>
                </div>
                </td>
                <td colSpan={1}>
                    <p>Address And Contact Details </p>
                    <div className="grid-container">
                  <div className="grid-container">
                    <div>Registered Office Address:</div>
                    <div>
                      {address.address}
                    </div>
                    <div>Telephone No:</div>
                    <div>{address.telephoneNumber}</div>
                    <div>Mobile No:</div>
                    <div>{address.mobileNumber}</div>
                    <div>Fax No:</div>
                    <div>{address.faxNumber}</div>
                  </div>
                </div>
                </td>
                <td colSpan={1}>
                  <p> IDENTIFICATION DETAILS </p>
                    <div className="grid-container">
                  <div>PAN:</div>
                  <div>{id?.pan}</div>
                  <div>DIN:</div>
                  <div>{id?.din}</div>
                  <div>Voter's Id:</div>
                  <div>{id?.voterId}</div>
                  <div>Passport Number:</div>
                  <div>{id?.passportNumber}</div>
                  <div>Driving License No:</div>
                  <div>{id?.drivingLicenseNumber}</div>
                  <div>Ration Card No:</div>
                  <div>{id?.rationCard}</div>
                  <div>UID</div>
                  <div>{id?.uid}</div>
                  <div>URN:</div>
                  <div>{id?.urn}</div>
                  <div>CKYC:</div>
                  <div>{id?.ckyc}</div>
                  <div>Last Reported Date:</div>
                  <div>{id?.lastReportedDate}</div>
                </div>
                </td>
            </tr>
            </tbody>
    </table>
    </div>
  );
}

export default GurantorDetails;

