import { useQuery } from "react-query";
import { Fetcher } from "../helpers/Fetcher";

export const useCases = () =>
  useQuery("useCases", async () => {
    const BASE_URL = "https://api.coronavirus.data.gov.uk/v1/data?";
    const filters =
      "filters=areaType=overview;areaName=United Kingdom&latestBy=newCasesByPublishDate&";
    const structure =
      'structure={"date":"date","newCases":"newCasesByPublishDate"}';
    const endpoint = BASE_URL + filters + structure;
    return await Fetcher(endpoint);
  });
