import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const instance = axios.create({
  baseURL: "https://ergast.com/api/f1",
});

const getConstructortSandingsByYear = async (year) => {
  const { data } = await instance.get("/" + year + "/constructorStandings.json");
  return data;
};

export const fetchConstructorStandings = createAsyncThunk("standings/constructor", async (year, thunkAPI) => {
  const response = await getConstructortSandingsByYear(year);

  return response.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
});
