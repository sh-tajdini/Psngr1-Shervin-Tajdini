import SeasonSelector from "../components/SeasonSelector";
import DriverStandings from "../components/Standings/DriverStandings";

function PageSeasons() {
  return (
    <div>
      <h1>
        Standings for <SeasonSelector />
      </h1>
      <DriverStandings />
    </div>
  );
}

export default PageSeasons;
