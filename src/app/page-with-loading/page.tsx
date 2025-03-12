import { getAsyncDelay } from "@/lib/getAsyncDelay";

const PageWithLoading = async () => {
  await getAsyncDelay(3000);
  return (
    <div>
      <h3>Page loaded with delay</h3>
      <p>
        The loading template is included in the <code>loaindg.tsx</code> file
      </p>
    </div>
  );
};
export default PageWithLoading;
