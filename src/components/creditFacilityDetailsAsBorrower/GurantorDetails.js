import '../../App.css';
import { ListToStringList } from "../../utils.js";


function GurantorDetails({base}) {
    const enquiryInformation = base.data.report.enquiryInformationRec;
    const borrowerDetails =
      base.data.report.productSec.borrowerProfileSec.borrwerDetails;
    const borrowerIdDetailsVec =
      base.data.report.productSec.borrowerProfileSec.borrowerIdDetailsVec;
    const bororwerAddressContactDetails =
      base.data.report.productSec.borrowerProfileSec.borrwerAddressContactDetails;
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
                        Gurantor 1
                    </p>
                </td>
            </tr>
            <tr>
                <td colSpan={1}>
                  <p>  Gurantor Details</p>
                <div className="grid-container">
                  <div>Name:</div>
                  <div>100000</div>
                  <div>Type:</div>
                  <div>
                  100000
                  </div>
                  <div>Business Category:</div>
                  <div>100000</div>
                  <div>Industry Type:</div>
                  <div>100000</div>
                  <div>Date Of Incoporation:</div>
                  <div>100000</div>
                </div>
                </td>
                <td colSpan={1}>
                    <p>Address And Contact Details </p>
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
                </td>
                <td colSpan={1}>
                  <p> IDENTIFICATION DETAILS </p>
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
                </td>
            </tr>
            </tbody>
    </table>
    </div>
  );
}

export default GurantorDetails;

