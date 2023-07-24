import "../App.css";
import { ListToStringList } from "../utils.js";

function EnquriyDetailsInLastThirtySixMonths({ base }) {

  const enquiryDetailInLast36Months = base.data.report.productSec.enquiryDetailsVec.enquiryDetailsHistory;
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
          {enquiryDetailInLast36Months.map((item,index) => {
            return (
              <tr key={index}>
                <td colspan="3">
                    <p><span>{item.creditLender}</span></p>
                </td>
                <td colspan="3">
                    <p><span>{item.enquiryDt}</span></p>
                </td>
                <td colspan="3">
                    <p><span>{item.enquiryPurpose}</span></p>
                </td>
                <td colspan="3">
                    <p><span>{item.enquiryAmt}</span></p>
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
