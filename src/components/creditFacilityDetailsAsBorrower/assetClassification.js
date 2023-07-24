import '../../App.css';

function AssetClassification({base}) {
    const listOfMonths = ['','JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
    const listOfYears = [['2019','-','-','-','-','-','-','-','-','-','-','-','-'] , ['2018','-','-','-','-','-','-','-','-','-','-','-','-'], 
    ['2017','-','-','-','-','-','-','-','-','-','-','-','-'],['2016','-','-','-','-','-','-','-','-','-','-','-','-']]
  return (
    <>
    <div style={{display:'flex',justifyContent:'center' , margin: 15 }}>
    <table>
        <tbody>
            <tr>
                <td colSpan={13}>
                    <p>
                    Asset Classification (AC) / Days Past Due (DPD) - Upto 36 Months
                    </p>
                </td>
            </tr>  
            <tr>
                {listOfMonths.map((item,index) => {
                    return (
                        <td colSpan={1}>
                            <p>
                            {item}
                            </p>
                        </td>
                    )
                })}
            </tr> 
            {listOfYears.map((item,index) => {
                return (
                    <tr>
                        {item.map((item,index) => {
                            return (
                                <td colSpan={1}>
                                    <p>
                                    {item}
                                    </p>
                                </td>
                            )
                        })}
                    </tr>
                )
            })}
        </tbody>
    </table>
</div> 
</>
  );
}

export default AssetClassification;

