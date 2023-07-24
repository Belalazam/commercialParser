import "../App.css";

function TransUnionCibilRank({ base }) {
  const rankVec = base.data.report.productSec.rankSec.rankVec[0];
  return (
    <div
      className="trans-union-cibil-rank"
      style={{ display: "flex", justifyContent: "center", margin: 40 }}
    >
      <table>
        <thead>
          <tr>
            <th colSpan="3">
              <p>3. TransUnion CIBIL Rank</p>
            </th>
          </tr>
          <tr>
            <td>
              <p>Rank Name</p>
            </td>
            <td>
              <p>Rank Value</p>
            </td>
            <td>
              <p>Ranking Reasons</p>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>
                <span>{rankVec.rankName}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{rankVec.rankValue}</span>
              </p>
            </td>
            <td>
              <p>
                <span>{rankVec.exclusionReason}</span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TransUnionCibilRank;
