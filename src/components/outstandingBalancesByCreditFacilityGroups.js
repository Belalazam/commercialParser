import '../App.css';

function OutstandingBalancesByCreditFacilityGroups({base}) {
  return (
    <div style={{display:'flex',justifyContent:'center' , margin: 15 }}>
           <table cellspacing="0" cellpadding="0" style={{marginLeft:'6.35pt', borderCollapse:'collapse',}}>
        <tbody>
            <tr style={{height:'35.25pt',}}>
                <td colspan="11" style={{width:'835pt', verticalAlign:'top', backgroundColor:'#00a5ca',}}>
                    <p style={{marginTop:'3.2pt', marginLeft:'5.4pt', marginBottom:'0pt', fontSize:'12pt',}}><span style={{color:'#ffffff',}}>7.</span><span style={{letterSpacing:'0.35pt', color:'#ffffff',}}>&nbsp;</span><span style={{color:'#ffffff',}}>Outstanding</span><span style={{letterSpacing:'0.3pt', color:'#ffffff',}}>&nbsp;</span><span style={{color:'#ffffff',}}>Balances</span><span style={{letterSpacing:'0.35pt', color:'#ffffff',}}>&nbsp;</span><span style={{color:'#ffffff',}}>by</span><span style={{letterSpacing:'0.3pt', color:'#ffffff',}}>&nbsp;</span><span style={{color:'#ffffff',}}>Credit</span><span style={{letterSpacing:'0.35pt', color:'#ffffff',}}>&nbsp;</span><span style={{color:'#ffffff',}}>Facility</span><span style={{letterSpacing:'0.3pt', color:'#ffffff',}}>&nbsp;</span><span style={{color:'#ffffff',}}>Groups</span><span style={{letterSpacing:'0.35pt', color:'#ffffff',}}>&nbsp;</span><span style={{color:'#ffffff',}}>and</span><span style={{letterSpacing:'0.3pt', color:'#ffffff',}}>&nbsp;</span><span style={{color:'#ffffff',}}>Asset</span><span style={{letterSpacing:'0.35pt', color:'#ffffff',}}>&nbsp;</span><span style={{color:'#ffffff',}}>Classification</span></p>
                    <p style={{marginTop:'3pt', marginBottom:'0pt', textAlign:'right', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', letterSpacing:'0.05pt', color:'#ffffff',}}>#</span><span style={{fontFamily:'Trebuchet MS', letterSpacing:'0.75pt', color:'#ffffff',}}>&nbsp;</span><span style={{fontFamily:'Trebuchet MS', letterSpacing:'0.05pt', color:'#ffffff',}}>-</span><span style={{fontFamily:'Trebuchet MS', letterSpacing:'0.75pt', color:'#ffffff',}}>&nbsp;</span><span style={{fontFamily:'Trebuchet MS', letterSpacing:'0.05pt', color:'#ffffff',}}>No.</span><span style={{fontFamily:'Trebuchet MS', letterSpacing:'0.7pt', color:'#ffffff',}}>&nbsp;</span><span style={{fontFamily:'Trebuchet MS', letterSpacing:'0.05pt', color:'#ffffff',}}>of</span><span style={{fontFamily:'Trebuchet MS', letterSpacing:'0.75pt', color:'#ffffff',}}>&nbsp;</span><span style={{fontFamily:'Trebuchet MS', letterSpacing:'0.05pt', color:'#ffffff',}}>Credit</span><span style={{fontFamily:'Trebuchet MS', letterSpacing:'0.7pt', color:'#ffffff',}}>&nbsp;</span><span style={{fontFamily:'Trebuchet MS', letterSpacing:'0.05pt', color:'#ffffff',}}>Facilities;</span><span style={{fontFamily:'Trebuchet MS', letterSpacing:'0.75pt', color:'#ffffff',}}>&nbsp;</span><span style={{fontFamily:'Trebuchet MS', letterSpacing:'0.05pt', color:'#ffffff',}}>₹</span><span style={{fontFamily:'Trebuchet MS', letterSpacing:'0.7pt', color:'#ffffff',}}>&nbsp;</span><span style={{fontFamily:'Trebuchet MS', letterSpacing:'0.05pt', color:'#ffffff',}}>-</span><span style={{fontFamily:'Trebuchet MS', letterSpacing:'0.75pt', color:'#ffffff',}}>&nbsp;</span><span style={{fontFamily:'Trebuchet MS', letterSpacing:'0.05pt', color:'#ffffff',}}>Outstanding</span><span style={{fontFamily:'Trebuchet MS', letterSpacing:'0.7pt', color:'#ffffff',}}>&nbsp;</span><span style={{fontFamily:'Trebuchet MS', color:'#ffffff',}}>Balance</span><span style={{fontFamily:'Trebuchet MS', letterSpacing:'0.75pt', color:'#ffffff',}}>&nbsp;</span><span style={{fontFamily:'Trebuchet MS', color:'#ffffff',}}>in</span><span style={{fontFamily:'Trebuchet MS', letterSpacing:'1.7pt', color:'#ffffff',}}>&nbsp;</span><span style={{fontFamily:'Trebuchet MS', color:'#ffffff',}}>₹</span></p>
                </td>
            </tr>
            <tr style={{height:'15.65pt',}}>
                <td colspan="11" style={{width:'834.25pt', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'2.7pt', marginLeft:'4.45pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>(Depicted</span><span style={{letterSpacing:'0.25pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>as</span><span style={{letterSpacing:'0.25pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>No.</span><span style={{letterSpacing:'0.2pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>of</span><span style={{letterSpacing:'0.25pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>Facilities</span><span style={{letterSpacing:'0.25pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>and</span><span style={{letterSpacing:'0.2pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>corresponding</span><span style={{letterSpacing:'0.25pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>Outstanding</span><span style={{letterSpacing:'0.25pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>Balances</span><span style={{letterSpacing:'0.2pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>under</span><span style={{letterSpacing:'0.25pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>each</span><span style={{letterSpacing:'0.25pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>CF</span><span style={{letterSpacing:'0.2pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>Group</span><span style={{letterSpacing:'0.25pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>and</span><span style={{letterSpacing:'0.25pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>Asset</span><span style={{letterSpacing:'0.2pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>Class.</span><span style={{letterSpacing:'0.25pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>bucket.)</span></p>
                </td>
            </tr>
            <tr style={{height:'29.75pt',}}>
                <td rowspan="2" style={{width:'84.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cddfe7',}}>
                    <p style={{marginTop:'0pt', marginBottom:'0pt', fontSize:'10pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0.5pt', marginBottom:'0pt', fontSize:'11.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0.05pt', marginLeft:'18.75pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>CF</span><span style={{letterSpacing:'0.2pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>GROUP</span></p>
                </td>
                <td colspan="4" style={{width:'279.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cddfe7',}}>
                    <p style={{marginTop:'0.55pt', marginBottom:'0pt', fontSize:'8pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{margin:'0pt 129.75pt 0pt 129.95pt', textAlign:'center', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>STD</span></p>
                </td>
                <td colspan="5" style={{width:'348.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cddfe7',}}>
                    <p style={{marginTop:'0.55pt', marginBottom:'0pt', fontSize:'8pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{margin:'0pt 150.4pt 0pt 150.6pt', textAlign:'center', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>NON</span><span style={{letterSpacing:'0.15pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>-</span><span style={{letterSpacing:'0.15pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>STD</span></p>
                </td>
                <td rowspan="2" style={{width:'120.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cccccc',}}>
                    <p style={{marginTop:'0pt', marginBottom:'0pt', fontSize:'10pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0.5pt', marginBottom:'0pt', fontSize:'11.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{margin:'0.05pt 26.4pt 0pt 26.6pt', textAlign:'center', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>Total</span></p>
                </td>
            </tr>
            <tr style={{height:'30.8pt',}}>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cddfe7',}}>
                    <p style={{marginTop:'0.45pt', marginBottom:'0pt', fontSize:'8.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0.05pt', marginLeft:'21.75pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>0</span><span style={{letterSpacing:'0.15pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>DPD</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cddfe7',}}>
                    <p style={{margin:'5.05pt 0.7pt 0pt 0.9pt', textAlign:'center', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>1-30</span><span style={{letterSpacing:'0.15pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>DPD</span><span style={{letterSpacing:'0.15pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>/</span><span style={{letterSpacing:'0.15pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>SMA</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'0.25pt', marginBottom:'0pt', textAlign:'center', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>0</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cddfe7',}}>
                    <p style={{margin:'5.05pt 0.65pt 0pt 0.9pt', textAlign:'center', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>31-60</span><span style={{letterSpacing:'0.15pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>DPD</span><span style={{letterSpacing:'0.15pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>/</span></p>
                    <p style={{margin:'0pt 0.7pt 0pt 0.9pt', textAlign:'center', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>SMA</span><span style={{letterSpacing:'0.1pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>1</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cddfe7',}}>
                    <p style={{margin:'5.05pt 0.65pt 0pt 0.9pt', textAlign:'center', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>61-90</span><span style={{letterSpacing:'0.15pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>DPD</span><span style={{letterSpacing:'0.15pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>/</span></p>
                    <p style={{margin:'0pt 0.7pt 0pt 0.9pt', textAlign:'center', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>SMA</span><span style={{letterSpacing:'0.1pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>2</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cddfe7',}}>
                    <p style={{marginTop:'0.45pt', marginBottom:'0pt', fontSize:'8.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0.05pt', marginLeft:'10.25pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>91-180</span><span style={{letterSpacing:'0.25pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>DPD</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cddfe7',}}>
                    <p style={{marginTop:'0.45pt', marginBottom:'0pt', fontSize:'8.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0.05pt', marginLeft:'12.85pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>&gt;</span><span style={{letterSpacing:'0.15pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>180</span><span style={{letterSpacing:'0.15pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>DPD</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cddfe7',}}>
                    <p style={{marginTop:'0.45pt', marginBottom:'0pt', fontSize:'8.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{margin:'0.05pt 0.7pt 0pt 0.9pt', textAlign:'center', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>SUB</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cddfe7',}}>
                    <p style={{marginTop:'0.45pt', marginBottom:'0pt', fontSize:'8.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{margin:'0.05pt 0.65pt 0pt 0.9pt', textAlign:'center', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>DBT</span></p>
                </td>
                <td style={{width:'68.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cddfe7',}}>
                    <p style={{marginTop:'0.45pt', marginBottom:'0pt', fontSize:'8.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0.05pt', marginLeft:'22.5pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>LOSS</span></p>
                </td>
            </tr>
            <tr style={{height:'23.75pt',}}>
                <td colspan="11" style={{width:'834.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'6.7pt', marginLeft:'6.95pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>Your</span><span style={{letterSpacing:'0.4pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>Institution</span></p>
                </td>
            </tr>
            <tr style={{height:'44.75pt',}}>
                <td style={{width:'84.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.5pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'6.95pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>Non</span><span style={{letterSpacing:'0.25pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>Funded</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'68.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'120.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cccccc',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'58.85pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#00a5ca',}}>-</span></p>
                </td>
            </tr>
            <tr style={{height:'44.75pt',}}>
                <td style={{width:'84.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.5pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'6.95pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>Working</span><span style={{letterSpacing:'0.35pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>Capital</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'68.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'120.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cccccc',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'58.85pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#00a5ca',}}>-</span></p>
                </td>
            </tr>
            <tr style={{height:'44.75pt',}}>
                <td style={{width:'84.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.5pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'6.95pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>Term</span><span style={{letterSpacing:'0.25pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>Loan</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'68.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'120.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cccccc',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'58.85pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#00a5ca',}}>-</span></p>
                </td>
            </tr>
            <tr style={{height:'45pt',}}>
                <td style={{width:'84.25pt', borderTop:'0.75pt solid #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt double #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.5pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'6.95pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>Forex</span></p>
                </td>
                <td style={{width:'69.25pt', borderTop:'0.75pt solid #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt double #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', borderTop:'0.75pt solid #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt double #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', borderTop:'0.75pt solid #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt double #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', borderTop:'0.75pt solid #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt double #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', borderTop:'0.75pt solid #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt double #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', borderTop:'0.75pt solid #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt double #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', borderTop:'0.75pt solid #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt double #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', borderTop:'0.75pt solid #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt double #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'68.25pt', borderTop:'0.75pt solid #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt double #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'120.25pt', borderTop:'0.75pt solid #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt double #00a5ca', verticalAlign:'top', backgroundColor:'#cccccc',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'58.85pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#00a5ca',}}>-</span></p>
                </td>
            </tr>
            <tr style={{height:'45pt',}}>
                <td style={{width:'84.25pt', borderTop:'0.75pt double #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cccccc',}}>
                    <p style={{marginTop:'0pt', marginBottom:'0pt', fontSize:'10pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{margin:'5.95pt 31.25pt 0pt 31.45pt', textAlign:'center', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>Total</span></p>
                </td>
                <td style={{width:'69.25pt', borderTop:'0.75pt double #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cccccc',}}>
                    <p style={{marginTop:'0pt', marginBottom:'0pt', fontSize:'10pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'5.8pt', marginLeft:'0.25pt', marginBottom:'0pt', textAlign:'center', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#00a5ca',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', borderTop:'0.75pt double #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cccccc',}}>
                    <p style={{marginTop:'0pt', marginBottom:'0pt', fontSize:'10pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'5.8pt', marginLeft:'0.25pt', marginBottom:'0pt', textAlign:'center', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#00a5ca',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', borderTop:'0.75pt double #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cccccc',}}>
                    <p style={{marginTop:'0pt', marginBottom:'0pt', fontSize:'10pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'5.8pt', marginLeft:'0.25pt', marginBottom:'0pt', textAlign:'center', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#00a5ca',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', borderTop:'0.75pt double #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cccccc',}}>
                    <p style={{marginTop:'0pt', marginBottom:'0pt', fontSize:'10pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'5.8pt', marginLeft:'0.25pt', marginBottom:'0pt', textAlign:'center', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#00a5ca',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', borderTop:'0.75pt double #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cccccc',}}>
                    <p style={{marginTop:'0pt', marginBottom:'0pt', fontSize:'10pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'5.8pt', marginLeft:'0.25pt', marginBottom:'0pt', textAlign:'center', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#00a5ca',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', borderTop:'0.75pt double #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cccccc',}}>
                    <p style={{marginTop:'0pt', marginBottom:'0pt', fontSize:'10pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'5.8pt', marginLeft:'0.25pt', marginBottom:'0pt', textAlign:'center', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#00a5ca',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', borderTop:'0.75pt double #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cccccc',}}>
                    <p style={{marginTop:'0pt', marginBottom:'0pt', fontSize:'10pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'5.8pt', marginLeft:'0.25pt', marginBottom:'0pt', textAlign:'center', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#00a5ca',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', borderTop:'0.75pt double #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cccccc',}}>
                    <p style={{marginTop:'0pt', marginBottom:'0pt', fontSize:'10pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'5.8pt', marginLeft:'0.25pt', marginBottom:'0pt', textAlign:'center', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#00a5ca',}}>-</span></p>
                </td>
                <td style={{width:'68.25pt', borderTop:'0.75pt double #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cccccc',}}>
                    <p style={{marginTop:'0pt', marginBottom:'0pt', fontSize:'10pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'5.8pt', marginLeft:'0.25pt', marginBottom:'0pt', textAlign:'center', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#00a5ca',}}>-</span></p>
                </td>
                <td style={{width:'120.25pt', borderTop:'0.75pt double #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cccccc',}}>
                    <p style={{marginTop:'0pt', marginBottom:'0pt', fontSize:'10pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'5.8pt', marginLeft:'58.85pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#00a5ca',}}>-</span></p>
                </td>
            </tr>
            <tr style={{height:'23.75pt',}}>
                <td colspan="16" style={{ border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'6.7pt', marginLeft:'6.95pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>Outside</span></p>
                </td>
            </tr>  
            <tr style={{height:'44.75pt',}}>
                <td style={{width:'84.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.5pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'6.95pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>Non</span><span style={{letterSpacing:'0.25pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>Funded</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'68.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'120.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cccccc',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'58.85pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#00a5ca',}}>-</span></p>
                </td>
            </tr>
            <tr style={{height:'44.75pt',}}>
                <td style={{width:'84.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.5pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'6.95pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>Working</span><span style={{letterSpacing:'0.35pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>Capital</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'68.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'120.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cccccc',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'58.85pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#00a5ca',}}>-</span></p>
                </td>
            </tr>
            <tr style={{height:'44.75pt',}}>
                <td style={{width:'84.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.5pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'6.95pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>Term</span><span style={{letterSpacing:'0.25pt', color:'#00a5ca',}}>&nbsp;</span><span style={{color:'#00a5ca',}}>Loan</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'68.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'120.25pt', border:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cccccc',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'58.85pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#00a5ca',}}>-</span></p>
                </td>
            </tr>
            <tr style={{height:'45pt',}}>
                <td style={{width:'84.25pt', borderTop:'0.75pt solid #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt double #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.5pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'6.95pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>Forex</span></p>
                </td>
                <td style={{width:'69.25pt', borderTop:'0.75pt solid #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt double #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', borderTop:'0.75pt solid #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt double #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', borderTop:'0.75pt solid #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt double #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', borderTop:'0.75pt solid #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt double #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', borderTop:'0.75pt solid #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt double #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', borderTop:'0.75pt solid #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt double #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', borderTop:'0.75pt solid #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt double #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', borderTop:'0.75pt solid #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt double #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'68.25pt', borderTop:'0.75pt solid #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt double #00a5ca', verticalAlign:'top',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'2pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#305565',}}>-</span></p>
                </td>
                <td style={{width:'120.25pt', borderTop:'0.75pt solid #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt double #00a5ca', verticalAlign:'top', backgroundColor:'#cccccc',}}>
                    <p style={{marginTop:'0.35pt', marginBottom:'0pt', fontSize:'14.5pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'0pt', marginLeft:'58.85pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#00a5ca',}}>-</span></p>
                </td>
            </tr>
            <tr style={{height:'45pt',}}>
                <td style={{width:'84.25pt', borderTop:'0.75pt double #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cccccc',}}>
                    <p style={{marginTop:'0pt', marginBottom:'0pt', fontSize:'10pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{margin:'5.95pt 31.25pt 0pt 31.45pt', textAlign:'center', fontSize:'9pt',}}><span style={{color:'#00a5ca',}}>Total</span></p>
                </td>
                <td style={{width:'69.25pt', borderTop:'0.75pt double #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cccccc',}}>
                    <p style={{marginTop:'0pt', marginBottom:'0pt', fontSize:'10pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'5.8pt', marginLeft:'0.25pt', marginBottom:'0pt', textAlign:'center', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#00a5ca',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', borderTop:'0.75pt double #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cccccc',}}>
                    <p style={{marginTop:'0pt', marginBottom:'0pt', fontSize:'10pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'5.8pt', marginLeft:'0.25pt', marginBottom:'0pt', textAlign:'center', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#00a5ca',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', borderTop:'0.75pt double #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cccccc',}}>
                    <p style={{marginTop:'0pt', marginBottom:'0pt', fontSize:'10pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'5.8pt', marginLeft:'0.25pt', marginBottom:'0pt', textAlign:'center', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#00a5ca',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', borderTop:'0.75pt double #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cccccc',}}>
                    <p style={{marginTop:'0pt', marginBottom:'0pt', fontSize:'10pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'5.8pt', marginLeft:'0.25pt', marginBottom:'0pt', textAlign:'center', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#00a5ca',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', borderTop:'0.75pt double #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cccccc',}}>
                    <p style={{marginTop:'0pt', marginBottom:'0pt', fontSize:'10pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'5.8pt', marginLeft:'0.25pt', marginBottom:'0pt', textAlign:'center', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#00a5ca',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', borderTop:'0.75pt double #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cccccc',}}>
                    <p style={{marginTop:'0pt', marginBottom:'0pt', fontSize:'10pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'5.8pt', marginLeft:'0.25pt', marginBottom:'0pt', textAlign:'center', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#00a5ca',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', borderTop:'0.75pt double #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cccccc',}}>
                    <p style={{marginTop:'0pt', marginBottom:'0pt', fontSize:'10pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'5.8pt', marginLeft:'0.25pt', marginBottom:'0pt', textAlign:'center', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#00a5ca',}}>-</span></p>
                </td>
                <td style={{width:'69.25pt', borderTop:'0.75pt double #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cccccc',}}>
                    <p style={{marginTop:'0pt', marginBottom:'0pt', fontSize:'10pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'5.8pt', marginLeft:'0.25pt', marginBottom:'0pt', textAlign:'center', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#00a5ca',}}>-</span></p>
                </td>
                <td style={{width:'68.25pt', borderTop:'0.75pt double #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cccccc',}}>
                    <p style={{marginTop:'0pt', marginBottom:'0pt', fontSize:'10pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'5.8pt', marginLeft:'0.25pt', marginBottom:'0pt', textAlign:'center', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#00a5ca',}}>-</span></p>
                </td>
                <td style={{width:'120.25pt', borderTop:'0.75pt double #00a5ca', borderRight:'0.75pt solid #00a5ca', borderLeft:'0.75pt solid #00a5ca', borderBottom:'0.75pt solid #00a5ca', verticalAlign:'top', backgroundColor:'#cccccc',}}>
                    <p style={{marginTop:'0pt', marginBottom:'0pt', fontSize:'10pt',}}><span style={{fontFamily:'Times New Roman',}}>&nbsp;</span></p>
                    <p style={{marginTop:'5.8pt', marginLeft:'58.85pt', marginBottom:'0pt', fontSize:'9pt',}}><span style={{fontFamily:'Trebuchet MS', color:'#00a5ca',}}>-</span></p>
                </td>
            </tr>
  




        </tbody>
    </table>
    </div>
  );
}

export default OutstandingBalancesByCreditFacilityGroups;

