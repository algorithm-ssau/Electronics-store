import React, { useEffect, useState } from "react";
import { DevelopersData, fetchDevelopers } from "../../network/fetchDevelopers";
import { logger } from "../../utils/logger";
import { LoadingLayout } from "../../pure-components/loading-layout/LoadingLayout";
import { getUniqueId } from "../../utils/uniqueId";

export const PageTeam: React.FC = () => {
  const unavailableText = "Недоступно";
  const [devsAreLoading, setDevsAreLoading] = useState(false);
  const [team, setTeam] = useState<DevelopersData>({
    "Backend Developers": [unavailableText],
    "Database Engineers": [unavailableText],
    "Frontend Developers": [unavailableText],
    "Team Lead": unavailableText,
  });
  useEffect(() => {
    setDevsAreLoading(true);
    fetchDevelopers()
      .then((devs: DevelopersData) => setTeam(devs))
      .catch((error) => logger.log(error));
    setDevsAreLoading(false);
  }, [team]);

  return (
    <div>
      <h1>Разработчики</h1>
      <LoadingLayout isActive={devsAreLoading}>
        <div>
          <h2>Руководитель</h2>
          <div>
            <p>{team["Team Lead"]}</p>
          </div>
          <h2>Клиентская часть</h2>
          <div>
            {team["Frontend Developers"].map((frontendDev) => {
              return <p key={getUniqueId()}>{frontendDev}</p>;
            })}
          </div>
          <h2>Серверная часть</h2>
          <div>
            {team["Backend Developers"].map((backendDev) => {
              return <p key={getUniqueId()}>{backendDev}</p>;
            })}
          </div>
          <h2>База данных</h2>
          <div>
            {team["Database Engineers"].map((dbDev) => {
              return <p key={getUniqueId()}>{dbDev}</p>;
            })}
          </div>
        </div>
      </LoadingLayout>
    </div>
  );
};
