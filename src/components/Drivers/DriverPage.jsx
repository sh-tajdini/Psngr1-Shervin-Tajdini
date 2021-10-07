import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchDriverInformation } from "../../state/drivers/thunks";

import React, { useEffect } from "react";

function DriverPage(props) {
  const dispatch = useDispatch();
  const { id } = props.match.params;

  useEffect(() => {
    dispatch(fetchDriverInformation(id));
  }, []);

  const { driverInfo, loading } = useSelector((state) => state.driverSlice);
  const driverInfoCreator = () => {
    return driverInfo.map((driver, i) => (
      <tr key={"driverInfo_" + i}>
        <td>{driver.season} </td>
        <td> {driver.DriverStandings[0].position}</td>
        <td> {driver.DriverStandings[0].points}</td>
        <td> {driver.DriverStandings[0].Constructors[0].name}</td>
      </tr>
    ));
  };

  return (
    <div>
      {loading ? (
        <div>loading</div>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h4>
                name family
                {/* {driverInfo[0].DriverStandings[0].Driver.givenName} {driverInfo[0].DriverStandings[0].Driver.familyName}{" "} */}
              </h4>
              <table className="table table-sm table-dark">
                <thead>
                  <tr>
                    <th scope="col">Year</th>
                    <th scope="col">Position</th>
                    <th scope="col">Point</th>
                    <th scope="col">Constructor</th>
                  </tr>
                </thead>
                <tbody>{driverInfoCreator()}</tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DriverPage;
