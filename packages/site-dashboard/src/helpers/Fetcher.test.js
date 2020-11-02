import { Fetcher } from "./Fetcher";

describe("Fetch Helper Function", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test("Fetch Success", async () => {
    const mockResponse = JSON.stringify({ foo: { bar: "foo" } });
    fetch.mockResponseOnce(mockResponse);
    const response = await Fetcher("/foobar");
    expect(response).toEqual({ foo: { bar: "foo" } });
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
