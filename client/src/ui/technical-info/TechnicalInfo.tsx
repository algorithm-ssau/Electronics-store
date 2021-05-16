import React from "react";

export interface TechnicalInfoProps {
  clientVersion: string;
  clientLastUpdate: string;
  serverVersion: string;
  serverLastUpdate: string;
}

export const TechnicalInfo: React.FC<TechnicalInfoProps> = (props) => {
  const { clientVersion, serverVersion, serverLastUpdate, clientLastUpdate } = props;
  return (
    <article>
      <p>Версия клиента: {clientVersion}</p>
      <p>Последнее обновление клиента: {clientLastUpdate}</p>
      <p>Версия сервера: {serverVersion}</p>
      <p>Последнее обновление сервера: {serverLastUpdate}</p>
    </article>
  );
};
