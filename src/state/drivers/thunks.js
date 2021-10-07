import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const instance = axios.create({
  baseURL: "https://ergast.com/api/f1",
});

const getDriverInformation = async (driverId) => {
  const { data } = await instance.get("/drivers/" + driverId + "/driverStandings.json");
  return data;
};

export const fetchDriverInformation = createAsyncThunk("driver/information", async (driverId, thunkAPI) => {
  const response = await getDriverInformation(driverId);

  return response.MRData.StandingsTable.StandingsLists;
});
