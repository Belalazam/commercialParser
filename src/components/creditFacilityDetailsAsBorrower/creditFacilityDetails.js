import '../../App.css';

function CredityFacilityDetails({base}) {
  const amounts = base.amount
  const dates = base.dates
  const otherDetails = base.otherDetails
  return (
    <>
    <div style={{display:'flex',justifyContent:'center' , margin: 15 }}>
    <table>
        <thead>
            <tr>
                <th colSpan={18}>
                   <p>10. Credit Facility Details - As Borrower</p>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colSpan={3}>
                    <p>Credit Facility 32.</p>
                </td>
                <td colSpan={6}>
                    <p>Type: Property Loan</p>
                </td>
                <td colSpan={9}>
                    <p>Member:Not Disclosed Account Number:Not Disclosed</p>
                </td>
            </tr>
            <tr>
                <td colSpan={4.5}>
                    <p>Asset Classification / DPD</p>
                </td>
                <td colSpan={4.5}>
                    <p>Status</p>
                </td>
                <td colSpan={4.5}>
                    <p>Status Date</p>
                </td>
                <td colSpan={4.5}>
                    <p>Last Reported Date</p>
                </td>
            </tr>
            <tr>
                <td colSpan={4.5}>
                    <p>STD</p>
                </td>
                <td colSpan={4.5}>
                    <p>Not a Suit Filed Case,Settled & Closed,Not Wilful Defaulter</p>
                </td>
                <td colSpan={4.5}>
                    <p>{base.statusDate}</p>
                </td>
                <td colSpan={4.5}>
                    <p>{base.lastReportedDate}</p>
                </td>
            </tr>
            <tr>
                <td colSpan={6}>
                    <p>
                        AMOUNTS (INR)
                  <div className="grid-container">
                  <div>Sanctioned INR:</div>
                  <div>{amounts.sanctionedAmt}</div>
                  <div>Drawing Power:</div>
                  <div>{amounts.drawingPower}</div>
                  <div>Outstanding Balance:</div>
                  <div>{amounts.outstandingBalance}</div>
                  <div>Overdue:</div>
                  <div>{amounts.overdue}</div>
                  <div>High Credit:</div>
                  <div>{amounts.highCredit}</div>
                  <div>Installment Amount:</div>
                  <div>{amounts.installmentAmt}</div>
                  <div>Last Repaid:</div>
                  <div>{amounts.lastRepaid}</div>
                  <div>Suit Filed:</div>
                  <div>{amounts.suitFiledAmt}</div>
                  <div>Written Off:</div>
                  <div>{amounts.writtenOff}</div>
                  <div>Settled:</div>
                  <div>{amounts.settled}</div>
                </div>
                    </p>
                </td>
                <td colSpan={6}>
                    <p>
                    DATES
                    <div className="grid-container">
                  <div>Sanctioned:</div>
                  <div>{dates.sanctionedDt}</div>
                  <div>Loan Expiry/Maturity:</div>
                  <div>{dates.loanExpiryDt}</div>
                  <div>Loan Renewal:</div>
                  <div>{dates.loanRenewalDt}</div>
                  <div>Suit Filed:</div>
                  <div>{dates.suitFiledDt}</div>
                  <div>Wilful Default:</div>
                  <div>{dates.wilfulDt}</div>
                  <div>Gurantee Invocation Date:</div>
                  <div>{dates.guaranteeInvocationDate}</div>
                </div>
                    </p>
                </td>
                <td colSpan={6}>
                    <p>
                    OTHER DETAILS
                    <div className="grid-container">
                  <div>Repayment Frequency:</div>
                  <div>{otherDetails.repaymentFrequency}</div>
                  <div>Tenure:</div>
                  <div>{otherDetails.tenure}</div>
                  <div>Restructuring Reason:</div>
                  <div>{otherDetails.restructingReason}</div>
                  <div>Asset Based security coverage:</div>
                  <div>{otherDetails.assetBasedSecurityCoverage}</div>
                  <div>Gurantee coverage:</div>
                  <div>{otherDetails.guaranteeCoverage}</div>
                </div>
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
</div> 
</>
  );
}

export default CredityFacilityDetails;


