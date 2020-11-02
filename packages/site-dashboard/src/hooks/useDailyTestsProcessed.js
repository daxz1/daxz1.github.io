import { useQuery } from "react-query";
import { Fetcher } from "../helpers/Fetcher";

export const useDailyTestsProcessed = () =>
  useQuery("dailyTestsProcessed", async () => {
    const BASE_URL = "https://api.coronavirus.data.gov.uk/v1/data?";
    const filters =
      "filters=areaType=overview;areaName=United Kingdom&latestBy=newPillarOneTwoTestsByPublishDate&";
    const structure =
      'structure={"date":"date","value":"newPillarOneTwoTestsByPublishDate"}';
    const endpoint = BASE_URL + filters + structure;
    return await Fetcher(endpoint);
  });
