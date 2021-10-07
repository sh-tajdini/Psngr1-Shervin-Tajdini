import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const instance = axios.create({
  baseURL: "https://ergast.com/api/f1",
});

const getDriverStandingsByYear = async (year) => {
  const { data } = await instance.get("/" + year + "/driverStandings.json");
  return data;
};

export const fetchDriverStandings = createAsyncThunk("standings/driver", async (year, thunkAPI) => {
  const response = await getDriverStandingsByYear(year);

  return response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
});
