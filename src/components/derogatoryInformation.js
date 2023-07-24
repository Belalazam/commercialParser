

import '../App.css';

function DerogatoryInformation({base}) {
  return (
    <div style={{display:'flex',justifyContent:'center' , margin: 40 }} >
           <table cellspacing="0" cellpadding="0" >
            <thead>
            <tr >
                <th colspan="13" >
                    <p >6. Derogatory Information</p>
                    <p>#-No. of Credit Facilities; AMT-Amounts in ₹; **Dishonored Cheque due to Insufficient Funds</p>
                </th>
            </tr>
            </thead>
        <tbody>
            <tr >
                <td rowspan="2" >
                </td>
                <td rowspan="2" >
                    <p >WilfulDefault</p>
                </td>
                <td colspan="2" >
                    <p >Suit Filed</p>
                </td>
                <td colspan="2" >
                    <p >Written Off</p>
                </td>
                <td colspan="2" >
                    <p >Settled</p>
                </td>
                <td colspan="2" >
                    <p >Invoked/Devolved</p>
                </td>
                <td colspan="2" >
                    <p >Overdue CF</p>
                </td>
                <td rowspan="2" >
                    <p >Dishonored Cheque **</p>
                </td>
            </tr>
            <tr >
                <td >
                    <p >#</p>
                </td>
                <td >
                    <p >Amt</p>
                </td>
                <td >
                    <p >#</p>
                </td>
                <td >
                    <p >Amt</p>
                </td>
                <td >
                    <p >#</p>
                </td>
                <td >
                    <p >Amt</p>
                </td>
                <td >
                    <p >#</p>
                </td>
                <td >
                    <p >Amt</p>
                </td>
                <td >
                    <p >#</p>
                </td>
                <td >
                    <p >Amt</p>
                </td>
            </tr>
            <tr >
                <td colspan="13" >
                    <p >Of Borrower</p>
                </td>
            </tr>
            <tr >
                <td >
                    <p >Your Institution</p>
                </td>
                <td colspan="12" >
                    <p >No Derogatory Information reported about the Borrower by Your Institution</p>
                </td>
            </tr>
            <tr >
                <td >
                    <p >Outside</p>
                </td>
                <td >
                    <p ><span >-</span></p>
                </td>
                <td >
                    <p ><span >-</span></p>
                </td>
                <td >
                    <p ><span >-</span></p>
                </td>
                <td >
                    <p ><span >-</span></p>
                </td>
                <td >
                    <p ><span >-</span></p>
                </td>
                <td >
                    <p ><span >2</span></p>
                </td>
                <td >
                    <p ><span >-</span></p>
                </td>
                <td >
                    <p ><span >-</span></p>
                </td>
                <td >
                    <p ><span >-</span></p>
                </td>
                <td >
                    <p ><span >-</span></p>
                </td>
                <td >
                    <p ><span >-</span></p>
                </td>
                <td >
                    <p ><span >-</span></p>
                </td>
            </tr>
            <tr >
                <td >
                    <p >Total</p>
                </td>
                <td >
                    <p ><span >-</span></p>
                </td>
                <td >
                    <p ><span >-</span></p>
                </td>
                <td >
                    <p ><span >-</span></p>
                </td>
                <td >
                    <p ><span >-</span></p>
                </td>
                <td >
                    <p ><span >-</span></p>
                </td>
                <td >
                    <p ><span >2</span></p>
                </td>
                <td >
                    <p ><span >-</span></p>
                </td>
                <td >
                    <p ><span >-</span></p>
                </td>
                <td >
                    <p ><span >-</span></p>
                </td>
                <td >
                    <p ><span >-</span></p>
                </td>
                <td >
                    <p ><span >-</span></p>
                </td>
                <td >
                    <p ><span >-</span></p>
                </td>
            </tr>
            <tr >
                <td colspan="13" >
                    <p>Of Related Parties/Guarantors of the Borrower</p>
                </td>
            </tr>
            <tr >
                <td colspan="13" >
                    <p >No Derogatory Information reported about the Related Parties/Guarantors of the Borrower</p>
                </td>
            </tr>
            <tr >
                <td colspan="13" >
                    <p >Of Credit Facilities Guaranteed by the Borrower</p>
                </td>
            </tr>
            <tr >
                <td colspan="13" >
                    <p >No reporting done on Credit Facilities Guaranteed by the Borrower</p>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
  );
}

export default DerogatoryInformation
