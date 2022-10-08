import React from "react";
class Square extends React.Component {
  render() {
    return (
      <div className="block-square">
        <table>
          {this.props.square.map((row, indexRow) => (
            <tr>
              {row.map((currentCase, indexCol) => (
                <td
                  className={`case ${
                    JSON.stringify(this.props.finalBest.data).includes(
                      JSON.stringify([indexRow, indexCol])
                    )
                      ? "active"
                      : ""
                  }`}
                  style={{ background: currentCase }}
                >
                  {JSON.stringify(this.props.finalBest.data).includes(
                    JSON.stringify([indexRow, indexCol])
                  ) && this.props.finalBest.data.length}
                </td>
              ))}
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default Square;
