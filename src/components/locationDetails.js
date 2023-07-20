import "../App.css";
import { ListToStringList } from "../utils.js";

function LocationDetails({ base }) {
  const tbody =
    base.data.report.productSec.locationDetailsSec.locationInformationVec
      .locationInformation;
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 15 }}>
      <table
        cellSpacing="0"
        cellPadding="0"
        style={{ marginLeft: "6.35pt", borderCollapse: "collapse" }}
      >
        <tbody>
          <tr style={{ height: "23pt" }}>
            <td
              colspan="16"
              style={{
                width: "835pt",
                verticalAlign: "top",
                backgroundColor: "#00a5ca",
              }}
            >
              <p
                style={{
                  marginTop: "5.95pt",
                  marginLeft: "5.4pt",
                  marginBottom: "0pt",
                  fontSize: "12pt",
                }}
              >
                <span style={{ color: "#ffffff" }}>8.</span>
                <span style={{ letterSpacing: "0.3pt", color: "#ffffff" }}>
                  &nbsp;
                </span>
                <span style={{ color: "#ffffff" }}>Location</span>
                <span style={{ letterSpacing: "0.3pt", color: "#ffffff" }}>
                  &nbsp;
                </span>
                <span style={{ color: "#ffffff" }}>Details</span>
              </p>
            </td>
          </tr>
          <tr style={{ height: "48.75pt" }}>
            <td
              colspan="2"
              style={{
                width: "99.25pt",
                borderRight: "0.75pt solid #00a5ca",
                borderLeft: "0.75pt solid #00a5ca",
                borderBottom: "0.75pt solid #00a5ca",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  marginTop: "0pt",
                  marginBottom: "0pt",
                  fontSize: "10pt",
                }}
              >
                <span style={{ fontFamily: "Times New Roman" }}>&nbsp;</span>
              </p>
              <p
                style={{
                  marginTop: "7.7pt",
                  marginLeft: "22.95pt",
                  marginBottom: "0pt",
                  fontSize: "9pt",
                }}
              >
                <span style={{ color: "#00a5ca" }}>Location</span>
                <span style={{ letterSpacing: "0.3pt", color: "#00a5ca" }}>
                  &nbsp;
                </span>
                <span style={{ color: "#00a5ca" }}>Type</span>
              </p>
            </td>
            <td
              colspan="4"
              style={{
                width: "203.25pt",
                borderRight: "0.75pt solid #00a5ca",
                borderLeft: "0.75pt solid #00a5ca",
                borderBottom: "0.75pt solid #00a5ca",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  marginTop: "0pt",
                  marginBottom: "0pt",
                  fontSize: "10pt",
                }}
              >
                <span style={{ fontFamily: "Times New Roman" }}>&nbsp;</span>
              </p>
              <p
                style={{
                  margin: "7.7pt 83pt 0pt 85.65pt",
                  textAlign: "center",
                  fontSize: "9pt",
                }}
              >
                <span style={{ color: "#00a5ca" }}>Address</span>
              </p>
            </td>
            <td
              colspan="2"
              style={{
                width: "65.25pt",
                borderRight: "0.75pt solid #00a5ca",
                borderLeft: "0.75pt solid #00a5ca",
                borderBottom: "0.75pt solid #00a5ca",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  marginTop: "0.2pt",
                  marginBottom: "0pt",
                  fontSize: "12pt",
                }}
              >
                <span style={{ fontFamily: "Times New Roman" }}>&nbsp;</span>
              </p>
              <p
                style={{
                  margin: "0pt 2.5pt 0pt 23.5pt",
                  textIndent: "17.75pt",
                  fontSize: "9pt",
                }}
              >
                <span style={{ color: "#00a5ca" }}>First</span>
                <span style={{ letterSpacing: "0.55pt", color: "#00a5ca" }}>
                  &nbsp;
                </span>
                <span style={{ color: "#00a5ca" }}>Reported</span>
                <span style={{ letterSpacing: "2.35pt", color: "#00a5ca" }}>
                  &nbsp;
                </span>
                <span style={{ color: "#00a5ca" }}>Date</span>
              </p>
            </td>
            <td
              style={{
                width: "64.25pt",
                borderRight: "0.75pt solid #00a5ca",
                borderLeft: "0.75pt solid #00a5ca",
                borderBottom: "0.75pt solid #00a5ca",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  marginTop: "0.2pt",
                  marginBottom: "0pt",
                  fontSize: "12pt",
                }}
              >
                <span style={{ fontFamily: "Times New Roman" }}>&nbsp;</span>
              </p>
              <p
                style={{
                  margin: "0pt 1.75pt 0pt 23pt",
                  textIndent: "17.55pt",
                  fontSize: "9pt",
                }}
              >
                <span style={{ color: "#00a5ca" }}>Last Reported</span>
                <span style={{ letterSpacing: "2.4pt", color: "#00a5ca" }}>
                  &nbsp;
                </span>
                <span style={{ color: "#00a5ca" }}>Date</span>
              </p>
            </td>
            <td
              style={{
                width: "54.25pt",
                borderRight: "0.75pt solid #00a5ca",
                borderLeft: "0.75pt solid #00a5ca",
                borderBottom: "0.75pt solid #00a5ca",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  margin: "8.85pt 0.9pt 0pt 3.75pt",
                  textAlign: "center",
                  fontSize: "9pt",
                }}
              >
                <span style={{ color: "#00a5ca" }}>Reported</span>
                <span style={{ letterSpacing: "0.45pt", color: "#00a5ca" }}>
                  &nbsp;
                </span>
                <span style={{ color: "#00a5ca" }}>By</span>
                <span style={{ letterSpacing: "2.35pt", color: "#00a5ca" }}>
                  &nbsp;
                </span>
                <span style={{ color: "#00a5ca" }}>(No. of</span>
                <span style={{ letterSpacing: "0.05pt", color: "#00a5ca" }}>
                  &nbsp;
                </span>
                <span style={{ color: "#00a5ca" }}>Institutions)</span>
              </p>
            </td>
          </tr>
          {tbody.map((item) => {
            return (
              <tr key={item} style={{ height: "30.75pt" }}>
                <td
                  colspan="2"
                  style={{
                    width: "99.25pt",
                    border: "0.75pt solid #00a5ca",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0.4pt",
                      marginBottom: "0pt",
                      fontSize: "8.5pt",
                    }}
                  >
                    <span style={{ fontFamily: "Times New Roman" }}>
                      &nbsp;
                    </span>
                  </p>
                  <p
                    style={{
                      marginTop: "0pt",
                      marginLeft: "2pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ color: "#305565" }}>
                      {item.borrowerOfficeLocationType}
                    </span>
                  </p>
                </td>
                <td
                  colspan="4"
                  style={{
                    width: "203.25pt",
                    border: "0.75pt solid #00a5ca",
                    verticalAlign: "top",
                  }}
                >
                  <p style={{ margin: "0pt 2.65pt 0pt 2pt", fontSize: "9pt" }}>
                    <span style={{ color: "#305565" }}>{item.address}</span>
                  </p>
                </td>
                <td
                  colspan="2"
                  style={{
                    width: "65.25pt",
                    border: "0.75pt solid #00a5ca",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0.4pt",
                      marginBottom: "0pt",
                      fontSize: "8.5pt",
                    }}
                  >
                    <span style={{ fontFamily: "Times New Roman" }}>
                      &nbsp;
                    </span>
                  </p>
                  <p
                    style={{
                      marginTop: "0pt",
                      marginLeft: "2pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ color: "#305565" }}>
                      {item.firstReportedDate}
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "64.25pt",
                    border: "0.75pt solid #00a5ca",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0.4pt",
                      marginBottom: "0pt",
                      fontSize: "8.5pt",
                    }}
                  >
                    <span style={{ fontFamily: "Times New Roman" }}>
                      &nbsp;
                    </span>
                  </p>
                  <p
                    style={{
                      marginTop: "0pt",
                      marginLeft: "2pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ color: "#305565" }}>
                      {item.lastReportedDate}
                    </span>
                  </p>
                </td>
                <td
                  style={{
                    width: "54.25pt",
                    border: "0.75pt solid #00a5ca",
                    verticalAlign: "top",
                  }}
                >
                  <p
                    style={{
                      marginTop: "0.4pt",
                      marginBottom: "0pt",
                      fontSize: "8.5pt",
                    }}
                  >
                    <span style={{ fontFamily: "Times New Roman" }}>
                      &nbsp;
                    </span>
                  </p>
                  <p
                    style={{
                      marginTop: "0pt",
                      marginLeft: "2pt",
                      marginBottom: "0pt",
                      fontSize: "9pt",
                    }}
                  >
                    <span style={{ color: "#305565" }}>
                      {item.numberOfInstitutions}
                    </span>
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <table>
        <tbody>
          <tr style={{ height: "23pt" }}>
            <td
              colspan="16"
              style={{
                width: "835pt",
                verticalAlign: "top",
                backgroundColor: "#00a5ca",
              }}
            ></td>
          </tr>
          <tr>
            <td
              colspan="4"
              style={{
                width: "196.25pt",
                borderRight: "0.75pt solid #00a5ca",
                borderLeft: "0.75pt solid #00a5ca",
                borderBottom: "0.75pt solid #00a5ca",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  marginTop: "0pt",
                  marginBottom: "0pt",
                  fontSize: "10pt",
                }}
              >
                <span style={{ fontFamily: "Times New Roman" }}>&nbsp;</span>
              </p>
              <p
                style={{
                  margin: "7.7pt 72.4pt 0pt 75.1pt",
                  textAlign: "center",
                  fontSize: "9pt",
                }}
              >
                <span style={{ color: "#00a5ca" }}>Contact</span>
                <span style={{ letterSpacing: "0.3pt", color: "#00a5ca" }}>
                  &nbsp;
                </span>
                <span style={{ color: "#00a5ca" }}>No.</span>
              </p>
            </td>
            <td
              colspan="2"
              style={{
                width: "147.25pt",
                borderRight: "0.75pt solid #00a5ca",
                borderLeft: "0.75pt solid #00a5ca",
                borderBottom: "0.75pt solid #00a5ca",
                verticalAlign: "top",
              }}
            >
              <p
                style={{
                  marginTop: "0pt",
                  marginBottom: "0pt",
                  fontSize: "10pt",
                }}
              >
                <span style={{ fontFamily: "Times New Roman" }}>&nbsp;</span>
              </p>
              <p
                style={{
                  margin: "7.7pt 55.85pt 0pt 58.55pt",
                  textAlign: "center",
                  fontSize: "9pt",
                }}
              >
                <span style={{ color: "#00a5ca" }}>Fax</span>
                <span style={{ letterSpacing: "0.2pt", color: "#00a5ca" }}>
                  &nbsp;
                </span>
                <span style={{ color: "#00a5ca" }}>No.</span>
              </p>
            </td>
          </tr>
          <tr>
            <td
              colspan="4"
              style={{
                maxWidth: "196.25pt",
                overflow: "auto",
                borderRight: "0.75pt solid #00a5ca",
                borderLeft: "0.75pt solid #00a5ca",
                borderBottom: "0.75pt solid #00a5ca",
                verticalAlign: "top",
              }}
            >
              {ListToStringList(
                [base.data.report.productSec.locationDetailsSec.contactNumber],
                "number"
              )}
            </td>
            <td
              colspan="4"
              style={{
                maxWidth: "196.25pt",
                overflow: "auto",
                borderRight: "0.75pt solid #00a5ca",
                borderLeft: "0.75pt solid #00a5ca",
                borderBottom: "0.75pt solid #00a5ca",
                verticalAlign: "top",
              }}
            >
              {ListToStringList(
                [base.data.report.productSec.locationDetailsSec.faxNumber],
                "number"
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LocationDetails;
