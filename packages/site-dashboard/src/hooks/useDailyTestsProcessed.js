import { useQuery } from "react-query";
import {Fetcher} from "../helpers/Fetcher";

export const useDailyTestsProcessed = (url = 'tests/daily') => useQuery(['dailyTestsProcessed', url, 4000], Fetcher);
