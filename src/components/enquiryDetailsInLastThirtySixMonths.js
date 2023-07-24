import "../App.css";
import { ListToStringList } from "../utils.js";

function EnquriyDetailsInLastThirtySixMonths({ base }) {
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
            <th colspan="12">
              <p>11. Enquiry Details in Last 36 Months</p>
            </th>
          </tr>
          <tr>
            <td colspan="3">
                <p>Credit Lender</p>
            </td>
            <td colspan="3">
                <p>Enquiry Date</p>
            </td>
            <td colspan="3">
                <p>Credit Type</p>
            </td>
            <td colspan="3">
                <p>Enquiry Amount</p>
            </td>
          </tr>
        </thead>
        <tbody>
          {tbody.map((item,index) => {
            return (
              <tr key={index}>
                <td colspan="3">
                    <p><span>1</span></p>
                </td>
                <td colspan="3">
                    <p><span>2-3</span></p>
                </td>
                <td colspan="3">
                    <p><span>4-6</span></p>
                </td>
                <td colspan="3">
                    <p><span>7-12</span></p>
                </td>
              </tr>
            );
          })}
        </tbody>
        </table>
    </div>
  );
}

export default EnquriyDetailsInLastThirtySixMonths;
