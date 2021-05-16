import React, { useEffect, useMemo, useState } from "react";
import { fetchClientVersion } from "../../network/fetchClientVersion";
import { fetchServerVersion } from "../../network/fetchServerVersion";
import { fetchClientLastUpdate } from "../../network/fetchClientLastUpdate";
import { fetchServerLastUpdate } from "../../network/fetchServerLastUpdate";
import { TechnicalInfo, TechnicalInfoProps } from "../technical-info/TechnicalInfo";
import { LoadingLayout } from "../../pure-components/loading-layout/LoadingLayout";
import { logger } from "../../utils/logger";

export const AdminData = () => {
  const unknown = "Неизвестно";
  const initialState = useMemo(() => {
    return {
      clientVersion: unknown,
      clientLastUpdate: unknown,
      serverVersion: unknown,
      serverLastUpdate: unknown,
    };
  }, []);

  const [info, setInfo] = useState<TechnicalInfoProps>(initialState);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let componentIsMounted = true;
    setLoading(true);
    const newInfo = initialState;
    Promise.all([fetchClientVersion(), fetchServerVersion(), fetchClientLastUpdate(), fetchServerLastUpdate()])
      .then((responses) => {
        newInfo.clientVersion = responses[0].clientVersion;
        newInfo.serverVersion = responses[1].serverVersion;
        newInfo.clientLastUpdate = responses[2].clientLastUpdate;
        newInfo.serverLastUpdate = responses[3].serverLastUpdate;

        if (componentIsMounted) {
          setInfo(newInfo);
          setLoading(false);
        }
      })
      .catch((error) => logger.log(error));
    return () => {
      componentIsMounted = false;
    };
  }, [initialState]);

  return (
    <div>
      <h4>Администратор</h4>
      <LoadingLayout isActive={loading}>
        <TechnicalInfo {...info} />
      </LoadingLayout>
    </div>
  );
};
