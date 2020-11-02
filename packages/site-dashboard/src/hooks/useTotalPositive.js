import { useQuery } from "react-query";
import { Fetcher } from "../helpers/Fetcher";

export const useTotalPositive = () =>
  useQuery("TotalPositive", async () => {
    const BASE_URL = "https://api.coronavirus.data.gov.uk/v1/data?";
    const filters =
      "filters=areaType=overview;areaName=United Kingdom&latestBy=cumCasesByPublishDate&";
    const structure =
      'structure={"date":"date","value":"cumCasesByPublishDate"}';
    const endpoint = BASE_URL + filters + structure;
    return await Fetcher(endpoint);
  });
