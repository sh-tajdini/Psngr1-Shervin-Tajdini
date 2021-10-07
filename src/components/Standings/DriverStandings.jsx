import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DriverStandings = () => {
  const { constructors, consloading } = useSelector((state) => state.constructorSlice);
  const { drivers, loading } = useSelector((state) => state.standingsSlice);

  const driversRowCreator = () => {
    return drivers.map((driver, i) => (
      <tr key={"driverStand_" + i}>
        <td>{driver.position} </td>
        <td>
          <Link to={`driverPage/${driver.Driver.familyName}`}>
            {driver.Driver.givenName} {driver.Driver.familyName}
          </Link>
        </td>
        <td> {driver.Constructors[0].name}</td>
        <td> {driver.points}</td>
      </tr>
    ));
  };
  const constructorRowCreator = () => {
    return constructors.map((constructor, i) => (
      <tr key={"constructorStand_" + i}>
        <td>{constructor.position} </td>
        <td> {constructor.Constructor.name}</td>
        <td> {constructor.points}</td>
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
              <h4>Driver Standings</h4>
              <table className="table table-sm table-dark">
                <thead>
                  <tr>
                    <th scope="col">Position</th>
                    <th scope="col">Driver Name</th>
                    <th scope="col">Constructor</th>
                    <th scope="col">Point</th>
                  </tr>
                </thead>
                <tbody>{driversRowCreator()}</tbody>
              </table>
            </div>
            {consloading ? (
              <div>loading</div>
            ) : (
              <div className="col-4">
                <h4>Constructor Standings</h4>
                <table className="table table-sm table-dark">
                  <thead>
                    <tr>
                      <th scope="col">Position</th>
                      <th scope="col">Constructor Name</th>
                      <th scope="col">Point</th>
                    </tr>
                  </thead>
                  <tbody>{constructorRowCreator()}</tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default DriverStandings;
