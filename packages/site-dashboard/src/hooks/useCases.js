import { useQuery } from "react-query";
import { Fetcher } from "../helpers/Fetcher";

export const useCases = (url = '/daily/new') => useQuery(url && ['dailyNew', url], Fetcher);