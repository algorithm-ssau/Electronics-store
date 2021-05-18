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
    let componentIsMounted = true;
    setDevsAreLoading(true);
    fetchDevelopers()
      .then((devs: DevelopersData) => {
        if (componentIsMounted) {
          setTeam(devs);
          setDevsAreLoading(false);
        }
      })
      .catch((error) => logger.log(error));
    return () => {
      componentIsMounted = false;
    };
  }, []);

  return (
    <div>
      <span className="teamDevelopers">Команда разработки</span>
      <LoadingLayout isActive={devsAreLoading}>
        <div>
          <div>
            <span className="namePost">Руководитель</span>
            <div>
              <div className="teamDeveloperBlockImg">
                <img
                  className="employeeTeamImage"
                  src="https://sun9-76.userapi.com/impg/eUv94tZQYrqVg8Utjks4cAjpY5Nd-OBzpiyIRQ/yne0CPzBkD4.jpg?size=768x1024&quality=96&sign=3c2c8fa70672426ca6ec5910874c9c5f&type=album"
                  alt="руководитель"
                />
              </div>
              <div className="teamDeveloperBlockText">
                <p>{team["Team Lead"]}</p>
              </div>
            </div>
          </div>
          <div>
            <span className="namePost">Клиентская часть</span>
            <div className="teamDeveloperBlockImg">
              <img
                className="employeeTeamImage"
                src="https://sun9-47.userapi.com/impf/c858036/v858036031/29c7f/YPmazqXwHT0.jpg?size=1152x2048&quality=96&sign=26193cfdeedf66e40bf984cdf9c7dade&type=album"
                alt="клиентская часть"
              />
            </div>
            <div className="teamDevelopersBlockList">
              {team["Frontend Developers"].map((frontendDev) => {
                return <p key={getUniqueId()}>{frontendDev}</p>;
              })}
            </div>
            <div className="teamDeveloperBlockImg">
              <img
                className="employeeTeamImage"
                src="https://sun9-44.userapi.com/impg/0p_9tzDMFWD6Lhjc6ntMxHcaK3YeoKNMjMIAZA/nmaLT32s1n4.jpg?size=951x1080&quality=96&sign=78ef486cb5a21171d89f237763718aa1&type=album"
                alt="клиентская часть"
              />
            </div>
            <div className="teamDeveloperBlockImg">
              <img
                className="employeeTeamImage"
                src="https://sun9-70.userapi.com/impg/c857036/v857036154/7e3d6/ytLilF8yDxk.jpg?size=380x380&quality=96&sign=56ffefc28c082abe5503b6e9ac2e25ea&type=album"
                alt="клиентская часть"
              />
            </div>
          </div>
          <div>
            <span className="namePost">Серверная часть</span>
            <div className="teamDevelopersBlockList">
              {team["Backend Developers"].map((backendDev) => {
                return <p key={getUniqueId()}>{backendDev}</p>;
              })}
            </div>
            <div className="teamDeveloperBlockImg">
              <img
                className="employeeTeamImage"
                src="https://sun9-23.userapi.com/impg/yIXMGyy1qK0AfU3p6OmHxhPN1rY4CPsw4EQ52w/oH6EMWmbX_M.jpg?size=2560x1707&quality=96&sign=663564f45aa9d6cd47f3e195bea933d0&type=album"
                alt="клиентская часть"
              />
            </div>
          </div>
          <div>
            <span className="namePost">База данных</span>
            <div className="teamDevelopersBlockList">
              {team["Database Engineers"].map((dbDev) => {
                return <p key={getUniqueId()}>{dbDev}</p>;
              })}
            </div>
            <div className="teamDeveloperBlockImg">
              <img
                className="employeeTeamImage"
                src="https://sun9-23.userapi.com/impg/yIXMGyy1qK0AfU3p6OmHxhPN1rY4CPsw4EQ52w/oH6EMWmbX_M.jpg?size=2560x1707&quality=96&sign=663564f45aa9d6cd47f3e195bea933d0&type=album"
                alt="клиентская часть"
              />
            </div>
            <div className="teamDeveloperBlockImg">
              <img
                className="employeeTeamImage"
                src="https://sun9-76.userapi.com/impg/eUv94tZQYrqVg8Utjks4cAjpY5Nd-OBzpiyIRQ/yne0CPzBkD4.jpg?size=768x1024&quality=96&sign=3c2c8fa70672426ca6ec5910874c9c5f&type=album"
                alt="клиентская часть"
              />
            </div>
          </div>
        </div>
      </LoadingLayout>
    </div>
  );
};
