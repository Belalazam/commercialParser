import '../App.css';

function Header({base}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' , justifyContent:'space-around' }}>
        <img src="protium-logo.png" width={400} alt='PROTIUM FINANCE'></img>
        <p className ="t2">COMMERCIAL CREDIT INFORMATION REPORT</p>
        <div className = "t1">
            <div style={{padding:5}}>Report Order Number:  <p className="space">{base.data.report.reportHeaderRec.reportOrderNumber}</p></div>
            <div style={{padding:5}}>Report Order Date:    <p className="space">{base.data.report.reportHeaderRec.reportOrderDate}</p></div>
            <div style={{padding:5}}>Report Order By:      <p className="space">{base.data.report.reportHeaderRec.reportOrderedBy}</p></div>
            <div style={{padding:5}}>Member:               <p className="space">{base.data.report.reportHeaderRec.memberDetails}</p></div>
            <div style={{padding:5}}>Application Ref Num:  <p className="space">{base.data.report.reportHeaderRec.applicationReferenceNumber}</p></div>
        </div>
    </div>
  );
}

export default Header;
