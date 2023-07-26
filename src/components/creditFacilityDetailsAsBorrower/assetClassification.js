import '../../App.css';

function AssetClassification({base}) {
    const listOfMonths = ['','JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']

    ///creating row material for asset classification
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const n = base.length
    const dict = {}
    for(let i=0;i<n;i++)
    {
        var flag = 0
        var month = ""
        var year = ""
        const m = base[i].month.length
        for(let j=0;j<m;j++)
        {
                if(base[i].month[j] === ' ')
                {
                    flag = 1
                }
                else
                {
                    if(flag === 0)
                    {
                        month += base[i].month[j]
                    }
                    else
                    {
                        year += base[i].month[j]
                    }
                }
        }
        if(dict[year] == null)
        {
            dict[year] = {}
        }
        dict[year][month] = base[i].osAmount;
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const keys = Object.keys(dict)
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
            {keys.map((item) => {
        const month = dict[item];
        const amounts = Object.keys(month);
        return (
            <tr key={item}>
              {listOfMonths.map((amountItem) => {
                return amountItem === '' ? (
                  <td colSpan={1} key={item}>
                    <p>{item}</p>
                  </td>
                ) : (
                  <td key={amountItem} colSpan={1}>
                    <p>{month[amountItem]}</p>
                  </td>
                );
              })}
            </tr>
          );          
      })}

        </tbody>
    </table>
</div> 
</>
  );
}

export default AssetClassification;

