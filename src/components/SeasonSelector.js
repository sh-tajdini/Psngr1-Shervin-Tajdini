import styled from "styled-components";
import { useDispatch } from "react-redux";
import { fetchDriverStandings } from "../state/standings/thunks";
import { fetchConstructorStandings } from "../state/constructor/thunks";

const seasonYears = Array.from({ length: new Date().getFullYear() - 1950 + 1 }, (v, k) => k + 1950);

const Select = styled.select`
  -webkit-appearance: button;
  -moz-appearance: button;

  -webkit-user-select: none;
  -moz-user-select: none;

  -webkit-padding-end: 20px;
  -moz-padding-end: 20px;
  -webkit-padding-start: 2px;
  -moz-padding-start: 2px;

  background-color: #9dadcc;
  border: 1px solid #aaa;
  border-radius: 2px;
  color: #555;
  font-size: inherit;
  margin: 0;
  overflow: hidden;
  padding-top: 2px;
  padding-bottom: 2px;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
`;
const Option = styled.option`
  font-size: 0.6em;
  font-weight: bold;
`;

function SeasonSelector(props) {
  const dispatch = useDispatch();
  const onSelectedYear = (e) => {
    dispatch(fetchDriverStandings(e.target.value));
    dispatch(fetchConstructorStandings(e.target.value));
  };
  return (
    <Select {...props} onChange={onSelectedYear}>
      {seasonYears.map((year) => (
        <Option key={year} value={year}>
          {year}
        </Option>
      ))}
    </Select>
  );
}

export default SeasonSelector;
