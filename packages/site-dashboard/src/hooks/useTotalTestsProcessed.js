import { useQuery } from "react-query";
import {Fetcher} from "../helpers/Fetcher";

export const useTotalTestsProcessed = (url = '/tests/total') => useQuery(['totalTestsProcessed', url, 1000], Fetcher);