import { getAsyncDelay } from "@/lib/getAsyncDelay";

const FastLoadingRoute = async () => {
  await getAsyncDelay(5000);
  throw new Error("Error loaded");
};

export default FastLoadingRoute;
