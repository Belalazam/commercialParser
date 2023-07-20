import '../App.css';

function LocationDetails({base}) {
  return (
    <div style={{display:'flex',justifyContent:'center' , margin: 15 }}>
    <table>
        <tbody>
        <tr style={{height:'23pt',}}>
                <td colspan="16" style={{width:'835pt', verticalAlign:'top', backgroundColor:'#00a5ca',}}>
                    <p style={{marginTop:'5.95pt', marginLeft:'5.4pt', marginBottom:'0pt', fontSize:'12pt',}}><span style={{color:'#ffffff',}}>8.</span><span style={{letterSpacing:'0.3pt', color:'#ffffff',}}>&nbsp;</span><span style={{color:'#ffffff',}}>Location</span><span style={{letterSpacing:'0.3pt', color:'#ffffff',}}>&nbsp;</span><span style={{color:'#ffffff',}}>Details</span></p>
                </td>
        </tr>
        <tr style={{height:'48.75pt',}}>
                <td colspan="2" style={{width:'99.25pt', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0pt', marginBottom:'0pt', fontSize:'10pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'7.7pt', marginLeft:'22.95pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>Location</span><span style={{letterSpacing:'0.3pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>Type</span></p>
                </td>
                <td colspan="4" style={{width:'203.25pt', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0pt', marginBottom:'0pt', fontSize:'10pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{margin:'7.7pt 83pt 0pt 85.65pt', textAlign:'center', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>Address</span></p>
                </td>
                <td colspan="2" style={{width:'65.25pt', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.2pt', marginBottom:'0pt', fontSize:'12pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{margin:'0pt 2.5pt 0pt 23.5pt', textIndent:'17.75pt', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>First</span><span style={{letterSpacing:'0.55pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>Reported</span><span style={{letterSpacing:'2.35pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>Date</span></p>
                </td>
                <td style={{width:'64.25pt', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.2pt', marginBottom:'0pt', fontSize:'12pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{margin:'0pt 1.75pt 0pt 23pt', textIndent:'17.55pt', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>Last Reported</span><span style={{letterSpacing:'2.4pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>Date</span></p>
                </td>
                <td style={{width:'54.25pt', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{margin:'8.85pt 0.9pt 0pt 3.75pt', textAlign:'center', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>Reported</span><span style={{letterSpacing:'0.45pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>By</span><span style={{letterSpacing:'2.35pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>(No. of</span><span style={{letterSpacing:'0.05pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>Institutions)</span></p>
                </td>
                <td colspan="4" style={{width:'196.25pt', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0pt', marginBottom:'0pt', fontSize:'10pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{margin:'7.7pt 72.4pt 0pt 75.1pt', textAlign:'center', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>Contact</span><span style={{letterSpacing:'0.3pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>No.</span></p>
                </td>
                <td colspan="2" style={{width:'147.25pt', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0pt', marginBottom:'0pt', fontSize:'10pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{margin:'7.7pt 55.85pt 0pt 58.55pt', textAlign:'center', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>Fax</span><span style={{letterSpacing:'0.2pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>No.</span></p>
                </td>
            </tr>
            <tr style={{height:'30.75pt',}}>
                <td colspan="2" style={{width:'99.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.4pt', marginBottom:'0pt', fontSize:'8.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#305565',}}>Registered</span><span style={{letterSpacing:'0.4pt', color:'#305565',}}>&nbsp;</span><span style={{color:'#305565',}}>Office</span></p>
                </td>
                <td colspan="4" style={{width:'203.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{margin:'0pt 2.65pt 0pt 2pt', fontSize:'9pt',}}><span style={{color:'#305565',}}>437 MARKET YARD</span><span style={{letterSpacing:'0.05pt', color:'#305565',}}>&nbsp;</span><span style={{letterSpacing:'0.05pt', color:'#305565',}}>PUNE,PUNE,MAHARASHTRA,411037</span></p>
                </td>
                <td colspan="2" style={{width:'65.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.4pt', marginBottom:'0pt', fontSize:'8.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#305565',}}>15-FEB-2023</span></p>
                </td>
                <td style={{width:'64.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.4pt', marginBottom:'0pt', fontSize:'8.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#305565',}}>15-FEB-2023</span></p>
                </td>
                <td style={{width:'54.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.4pt', marginBottom:'0pt', fontSize:'8.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#305565',}}>1</span></p>
                </td>
                <td colspan="4" rowspan="6" style={{width:'196.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                </td>
                <td colspan="2" rowspan="6" style={{width:'147.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', lineHeight:'10.2pt',}}><span style={{fontSize:'9pt', color:'#305565',}}>-</span></p>
                </td>
            </tr>
            <tr style={{height:'40.75pt',}}>
                <td colspan="2" style={{width:'99.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.25pt', marginBottom:'0pt', fontSize:'13pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#305565',}}>Registered</span><span style={{letterSpacing:'0.4pt', color:'#305565',}}>&nbsp;</span><span style={{color:'#305565',}}>Office</span></p>
                </td>
                <td colspan="4" style={{width:'203.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{margin:'0pt 2.65pt 0pt 2pt', fontSize:'9pt',}}><span style={{color:'#305565',}}>GALA NO.432,MARKET YARD, GULTEKDI</span><span style={{letterSpacing:'0.05pt', color:'#305565',}}>&nbsp;</span><span style={{color:'#305565',}}>PUNE MAHARASHTRA</span><span style={{letterSpacing:'0.05pt', color:'#305565',}}>&nbsp;</span><span style={{letterSpacing:'0.05pt', color:'#305565',}}>411037,PUNE,MAHARASHTRA,KARNATAKA</span></p>
                </td>
                <td colspan="2" style={{width:'65.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.25pt', marginBottom:'0pt', fontSize:'13pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#305565',}}>31-JUL-2022</span></p>
                </td>
                <td style={{width:'64.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.25pt', marginBottom:'0pt', fontSize:'13pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#305565',}}>23-DEC-2022</span></p>
                </td>
                <td style={{width:'54.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.25pt', marginBottom:'0pt', fontSize:'13pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#305565',}}>1</span></p>
                </td>
            </tr>
            <tr style={{height:'30.75pt',}}>
                <td colspan="2" style={{width:'99.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.4pt', marginBottom:'0pt', fontSize:'8.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#305565',}}>Registered</span><span style={{letterSpacing:'0.4pt', color:'#305565',}}>&nbsp;</span><span style={{color:'#305565',}}>Office</span></p>
                </td>
                <td colspan="4" style={{width:'203.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{margin:'0pt 2.65pt 0pt 2pt', fontSize:'9pt',}}><span style={{color:'#305565',}}>SHIVAJI NAGAR PUNE</span><span style={{letterSpacing:'0.05pt', color:'#305565',}}>&nbsp;</span><span style={{letterSpacing:'0.05pt', color:'#305565',}}>411012,PUNE,MAHARASHTRA,411012</span></p>
                </td>
                <td colspan="2" style={{width:'65.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.4pt', marginBottom:'0pt', fontSize:'8.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#305565',}}>14-NOV-2022</span></p>
                </td>
                <td style={{width:'64.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.4pt', marginBottom:'0pt', fontSize:'8.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#305565',}}>14-NOV-2022</span></p>
                </td>
                <td style={{width:'54.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.4pt', marginBottom:'0pt', fontSize:'8.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#305565',}}>1</span></p>
                </td>
            </tr>
            <tr style={{height:'30.75pt',}}>
                <td colspan="2" style={{width:'99.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.4pt', marginBottom:'0pt', fontSize:'8.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#305565',}}>Registered</span><span style={{letterSpacing:'0.4pt', color:'#305565',}}>&nbsp;</span><span style={{color:'#305565',}}>Office</span></p>
                </td>
                <td colspan="4" style={{width:'203.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', lineHeight:'10.2pt',}}><span style={{fontSize:'9pt', color:'#305565',}}>347</span><span style={{fontSize:'9pt', letterSpacing:'0.2pt', color:'#305565',}}>&nbsp;</span><span style={{fontSize:'9pt', color:'#305565',}}>MARKET</span><span style={{fontSize:'9pt', letterSpacing:'0.15pt', color:'#305565',}}>&nbsp;</span><span style={{fontSize:'9pt', color:'#305565',}}>YARD</span><span style={{fontSize:'9pt', letterSpacing:'0.2pt', color:'#305565',}}>&nbsp;</span><span style={{fontSize:'9pt', color:'#305565',}}>TA</span><span style={{fontSize:'9pt', letterSpacing:'0.15pt', color:'#305565',}}>&nbsp;</span><span style={{fontSize:'9pt', color:'#305565',}}>HAVELI</span><span style={{fontSize:'9pt', letterSpacing:'0.2pt', color:'#305565',}}>&nbsp;</span><span style={{fontSize:'9pt', color:'#305565',}}>DIST</span><span style={{fontSize:'9pt', letterSpacing:'0.15pt', color:'#305565',}}>&nbsp;</span><span style={{fontSize:'9pt', color:'#305565',}}>PUNE</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#305565',}}>411037,PUNE,MAHARASHTRA,411037</span></p>
                </td>
                <td colspan="2" style={{width:'65.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.4pt', marginBottom:'0pt', fontSize:'8.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#305565',}}>07-NOV-2022</span></p>
                </td>
                <td style={{width:'64.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.4pt', marginBottom:'0pt', fontSize:'8.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#305565',}}>07-NOV-2022</span></p>
                </td>
                <td style={{width:'54.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.4pt', marginBottom:'0pt', fontSize:'8.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#305565',}}>1</span></p>
                </td>
            </tr>
            <tr style={{height:'40.75pt',}}>
                <td colspan="2" style={{width:'99.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.25pt', marginBottom:'0pt', fontSize:'13pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#305565',}}>Registered</span><span style={{letterSpacing:'0.4pt', color:'#305565',}}>&nbsp;</span><span style={{color:'#305565',}}>Office</span></p>
                </td>
                <td colspan="4" style={{width:'203.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{margin:'0pt 29.75pt 0pt 2pt', fontSize:'9pt',}}><span style={{color:'#305565',}}>347</span><span style={{letterSpacing:'0.25pt', color:'#305565',}}>&nbsp;</span><span style={{color:'#305565',}}>MARKET</span><span style={{letterSpacing:'0.2pt', color:'#305565',}}>&nbsp;</span><span style={{color:'#305565',}}>YARD</span><span style={{letterSpacing:'0.2pt', color:'#305565',}}>&nbsp;</span><span style={{color:'#305565',}}>PUNE</span><span style={{letterSpacing:'0.2pt', color:'#305565',}}>&nbsp;</span><span style={{color:'#305565',}}>HAVELI</span><span style={{letterSpacing:'0.2pt', color:'#305565',}}>&nbsp;</span><span style={{color:'#305565',}}>PUNE</span><span style={{letterSpacing:'2.35pt', color:'#305565',}}>&nbsp;</span><span style={{color:'#305565',}}>PUNE,MARKET YARD,PUNE</span><span style={{letterSpacing:'0.05pt', color:'#305565',}}>&nbsp;</span><span style={{color:'#305565',}}>HAVELI,PUNE,MAHARASHTRA,411037</span></p>
                </td>
                <td colspan="2" style={{width:'65.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.25pt', marginBottom:'0pt', fontSize:'13pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#305565',}}>30-SEP-2022</span></p>
                </td>
                <td style={{width:'64.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.25pt', marginBottom:'0pt', fontSize:'13pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#305565',}}>28-OCT-2022</span></p>
                </td>
                <td style={{width:'54.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.25pt', marginBottom:'0pt', fontSize:'13pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#305565',}}>1</span></p>
                </td>
            </tr>
            <tr style={{height:'310.75pt',}}>
                <td colspan="10" style={{width:'489.62pt', borderTop:'0.75pt solid #00a5ca', borderRight:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0pt', marginBottom:'0pt', fontSize:'8pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                </td>
            </tr>
            <tr style={{height:'0pt',}}>
            </tr>
        </tbody>
    </table>
    </div>
  );
}

export default LocationDetails;

