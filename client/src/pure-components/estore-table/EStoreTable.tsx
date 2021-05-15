import React from "react";
import { TableProps } from "./TableProps";
import { getUniqueId } from "../../utils/uniqueId";

export const EStoreTable: React.FC<TableProps> = (props) => {
  const { body } = props;
  return (
    <table>
      {body.map((line, i) => {
        return (
          <tr key={getUniqueId()}>
            {line.map((cell, j) => {
              return <td key={getUniqueId()}>{cell}</td>;
            })}
          </tr>
        );
      })}
    </table>
  );
};
