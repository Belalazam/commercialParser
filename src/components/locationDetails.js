import "../App.css";
import { ListToStringList } from "../utils.js";

function LocationDetails({ base }) {
  const tbody =
    base.data.report.productSec.locationDetailsSec.locationInformationVec
      .locationInformation;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        margin: 40,
      }}
    >
      <table>
        <thead>
          <tr>
            <th colspan="11">
              <p>8. Location Details</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="2">
              <p>
                <span>&nbsp;</span>
              </p>
              <p>Location Type</p>
            </td>
            <td colspan="4">
              <p>
                <span>&nbsp;</span>
              </p>
              <p>Address</p>
            </td>
            <td colspan="2">
              <p>
                <span>&nbsp;</span>
              </p>
              <p>First Reported Date</p>
            </td>
            <td colSpan="1">
              <p>
                <span>&nbsp;</span>
              </p>
              <p>Last Reported Date</p>
            </td>
            <td>
              <p>Reported By (No. of Institutions)</p>
            </td>
          </tr>
          {tbody.map((item,index) => {
            return (
              <tr key={index}>
                <td colspan="2">
                  <p>
                    <span>&nbsp;</span>
                  </p>
                  <p>
                    <span>{item.borrowerOfficeLocationType}</span>
                  </p>
                </td>
                <td colspan="4">
                  <p>
                    <span>{item.address}</span>
                  </p>
                </td>
                <td colspan="2">
                  <p>
                    <span>&nbsp;</span>
                  </p>
                  <p>
                    <span>{item.firstReportedDate}</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>&nbsp;</span>
                  </p>
                  <p>
                    <span>{item.lastReportedDate}</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span>&nbsp;</span>
                  </p>
                  <p>
                    <span>{item.numberOfInstitutions}</span>
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <table>
  <tbody>
    <tr>
      <td colSpan="16"></td>
    </tr>
    <tr>
      <td colSpan="4" style={{ maxHeight: '50px', overflowY: 'auto' }}>
        <p>
          <span>&nbsp;</span>
        </p>
        <p>Contact No.</p>
      </td>
      <td colSpan="2" style={{ maxHeight: '50px', overflowY: 'auto' }}>
        <p>
          <span>&nbsp;</span>
        </p>
        <p>Fax No.</p>
      </td>
    </tr>
    <tr>
      <td colSpan="4" style={{ maxHeight: '50px', overflowY: 'auto' }}>
        {ListToStringList([base.data.report.productSec.locationDetailsSec.contactNumber], "number")}
      </td>
      <td colSpan="4" style={{ maxHeight: '50px', overflowY: 'auto' }}>
        {ListToStringList([base.data.report.productSec.locationDetailsSec.faxNumber], "number")}
      </td>
    </tr>
  </tbody>
</table>


    </div>
  );
}

export default LocationDetails;
