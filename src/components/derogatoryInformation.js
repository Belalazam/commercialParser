import "../App.css";

function DerogatoryInformation({ base }) {
  const derogatoryInformationBorrower = base.data.report.productSec.derogatoryInformationSec.derogatoryInformationBorrower
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 40 }}>
      <table cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th colspan="13">
              <p>6. Derogatory Information</p>
              <p>
                #-No. of Credit Facilities; AMT-Amounts in ₹; **Dishonored
                Cheque due to Insufficient Funds
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="2"></td>
            <td rowspan="2">
              <p>WilfulDefault</p>
            </td>
            <td colspan="2">
              <p>Suit Filed</p>
            </td>
            <td colspan="2">
              <p>Written Off</p>
            </td>
            <td colspan="2">
              <p>Settled</p>
            </td>
            <td colspan="2">
              <p>Invoked/Devolved</p>
            </td>
            <td colspan="2">
              <p>Overdue CF</p>
            </td>
            <td rowspan="2">
              <p>Dishonored Cheque **</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>#</p>
            </td>
            <td>
              <p>Amt</p>
            </td>
            <td>
              <p>#</p>
            </td>
            <td>
              <p>Amt</p>
            </td>
            <td>
              <p>#</p>
            </td>
            <td>
              <p>Amt</p>
            </td>
            <td>
              <p>#</p>
            </td>
            <td>
              <p>Amt</p>
            </td>
            <td>
              <p>#</p>
            </td>
            <td>
              <p>Amt</p>
            </td>
          </tr>
          <tr>
            <td colspan="13">
              <p>Of Borrower</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Your Institution</p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.yourInstitution.wilfulDefault}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.yourInstitution.suitFilled.numberOfSuitFiled}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.yourInstitution.suitFilled.amt}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.yourInstitution.writtenOff.numberOfSuitFiled}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.yourInstitution.writtenOff.amt}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.yourInstitution.settled.numberOfSuitFiled}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.yourInstitution.settled.amt}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.yourInstitution.invoked.numberOfSuitFiled}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.yourInstitution.invoked.amt}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.yourInstitution.overdueCf.numberOfSuitFiled}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.yourInstitution.overdueCf.amt}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.yourInstitution.dishonoredCheque}</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Outside</p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.outsideInstitution.wilfulDefault}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.outsideInstitution.suitFilled.numberOfSuitFiled}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.outsideInstitution.suitFilled.amt}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.outsideInstitution.writtenOff.numberOfSuitFiled}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.outsideInstitution.writtenOff.amt}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.outsideInstitution.settled.numberOfSuitFiled}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.outsideInstitution.settled.amt}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.outsideInstitution.invoked.numberOfSuitFiled}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.outsideInstitution.invoked.amt}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.outsideInstitution.overdueCf.numberOfSuitFiled}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.outsideInstitution.overdueCf.amt}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.outsideInstitution.dishonoredCheque}</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Total</p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.total.wilfulDefault}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.total.suitFilled.numberOfSuitFiled}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.total.suitFilled.amt}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.total.writtenOff.numberOfSuitFiled}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.total.writtenOff.amt}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.total.settled.numberOfSuitFiled}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.total.settled.amt}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.total.invoked.numberOfSuitFiled}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.total.invoked.amt}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.total.overdueCf.numberOfSuitFiled}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.total.overdueCf.amt}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{derogatoryInformationBorrower.total.dishonoredCheque}</span>
              </p>
            </td>
          </tr>
          <tr>
            <td colspan="13">
              <p>Of Related Parties/Guarantors of the Borrower</p>
            </td>
          </tr>
          <tr>
            <td colspan="13">
              <p>
                No Derogatory Information reported about the Related
                Parties/Guarantors of the Borrower
              </p>
            </td>
          </tr>
          <tr>
            <td colspan="13">
              <p>Of Credit Facilities Guaranteed by the Borrower</p>
            </td>
          </tr>
          <tr>
            <td colspan="13">
              <p>
                No reporting done on Credit Facilities Guaranteed by the
                Borrower
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DerogatoryInformation;
