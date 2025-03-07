const ParametricPage = async ({
  params,
}: {
  params: Promise<{ paramId: string }>;
}) => {
  const { paramId } = await params;
  return (
    <div>
      <h3>This is a parametric page</h3>
      <p>
        The passed param is <code>{paramId}</code>
      </p>
      <p>
        We have this result by nesting the page.tsx file into a folder with name
        is wrapperd in square brackets <code>src/app/parametric/[paramId]</code>
        . The related path will be <code>/parametric/&lt;CODE&gt;</code>
      </p>
    </div>
  );
};

export default ParametricPage;
