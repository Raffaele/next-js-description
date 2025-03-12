const getDelay = async (delay = 1000) =>
  new Promise((res) => setTimeout(() => res(null), delay));

const PageWithLoading = async () => {
  await getDelay(3000);
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
