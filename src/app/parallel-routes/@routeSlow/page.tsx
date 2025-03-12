import { getAsyncDelay } from "@/lib/getAsyncDelay";

const FastLoadingRoute = async () => {
  await getAsyncDelay(5000);
  return <div>LOADED after 5000 milliseconds</div>;
};

export default FastLoadingRoute;
