import React from "react";
import { TableProps } from "./TableProps";
import { getUniqueId } from "../../utils/uniqueId";

export const EStoreTable: React.FC<TableProps> = (props) => {
  const { body, columnWidths, columnHeights } = props;
  return (
    <table>
      {body.map((line) => {
        return (
          <tr key={getUniqueId()}>
            {line.map((cell) => {
              return <td key={getUniqueId()}>{cell}</td>;
            })}
          </tr>
        );
      })}
    </table>
  );
};
