import { getAsyncDelay } from "@/lib/getAsyncDelay";

const FastLoadingRoute = async () => {
  await getAsyncDelay(1000);

  return <div>LOADED after 1000 milliseconds</div>;
};

export default FastLoadingRoute;
