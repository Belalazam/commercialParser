import '../App.css';

function Header({base}) {
  const reportHeader = base.data.report.reportHeaderRec;
  return (
    <div style={{ display: 'flex', alignItems: 'center' , justifyContent:'space-around' }}>
        <img src="protium-logo.png" width={400} alt='PROTIUM FINANCE'></img>
        <p className ="t2">COMMERCIAL CREDIT INFORMATION REPORT</p>
        <div className="grid-container" style = {{gridGap : '1px', fontSize : '14px' , fontWeight : 'bold'}}>
                            <div>Report Order Number:  </div>
                            <div>{reportHeader.reportOrderNumber}</div>
                            <div>Report Order Date:</div>
                            <div>{reportHeader.reportOrderDate}</div>
                            <div>Report Order By:</div>
                            <div>{reportHeader.reportOrderedBy}</div>
                            <div>Member:</div>
                            <div>{reportHeader.memberDetails}</div>
                            <div>Application Ref Num:</div>
                            <div>{reportHeader.applicationReferenceNumber}</div>
                          </div>
    </div>
  );
}

export default Header;
