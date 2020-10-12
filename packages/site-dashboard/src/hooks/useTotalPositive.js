import { useQuery } from "react-query";
import {Fetcher} from "../helpers/Fetcher";

export const useTotalPositive = (url = 'daily/total') => useQuery(['TotalPositive', url, 2000], Fetcher);