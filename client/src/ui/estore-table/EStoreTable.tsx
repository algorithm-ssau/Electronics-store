import React from "react";
import { TableProps } from "./TableProps";
import { getUniqueId } from "../../utils/uniqueId";

export const EStoreTable: React.FC<TableProps> = (props) => {
  const { body } = props;
  return (
    <table className="tableHistory">
      {body.map((line, i) => {
        const cells = (
          <tr key={getUniqueId()}>
            {line.map((cell) => {
              return (
                <td className="tableCell" key={getUniqueId()}>
                  {cell}
                </td>
              );
            })}
          </tr>
        );
        return i === 0 ? <thead key={getUniqueId()}>{cells}</thead> : <tbody key={getUniqueId()}>{cells}</tbody>;
      })}
    </table>
  );
};
