import '../App.css';

function EnquiryInformation({base}) {
  return (
    <div style={{display:'flex',justifyContent:'center' , margin: 15 }}>
                  <table cellspacing="0" cellpadding="0" style={{marginLeft:'6.35pt', borderCollapse:'collapse',}}>
        <tbody>
            <tr style={{height:'20.25pt',}}>
                <td colspan="5" style={{width:'835pt', verticalAlign:'top', backgroundColor:'#00a5ca',}}>
                    <p style={{marginTop:'3.2pt', marginLeft:'8.75pt', marginBottom:'0pt', fontSize:'12pt',}}><span style={{color:'#ffffff',}}>1.</span><span style={{letterSpacing:'0.3pt', color:'#ffffff',}}>&nbsp;</span><span style={{color:'#ffffff',}}>Enquiry</span><span style={{letterSpacing:'0.3pt', color:'#ffffff',}}>&nbsp;</span><span style={{color:'#ffffff',}}>Information</span></p>
                </td>
            </tr>
            <tr style={{height:'23.1pt',}}>
                <td style={{width:'110.78pt', borderLeft:'0.75pt solid #00a5ca', verticalAlign:'top',borderBottom:'0.75pt solid #00a5ca',borderRight:'0.75pt solid #00a5ca'}}>
                    <p style={{marginTop:'7.6pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'10pt',}}><span style={{color:'#00a5ca',}}>Search Criteria:
                    </span><span style={{letterSpacing:'0.4pt', color:'#00a5ca',}}>&nbsp;</span><span>{base.data.report.enquiryInformationRec.borrowerName},&nbsp;&nbsp;{base.data.report.productSec.borrowerProfileSec.borrwerDetails.dateOfIncorporation},&nbsp;&nbsp;{base.data.report.enquiryInformationRec.pan},&nbsp;&nbsp;{base.data.report.enquiryInformationRec.addressVec.address[0].addressLine}</span></p>
                </td>
            </tr>
      
        </tbody>
    </table> 
    </div>
  );
}

export default EnquiryInformation;


