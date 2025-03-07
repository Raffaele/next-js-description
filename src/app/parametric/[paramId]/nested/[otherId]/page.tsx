const ParametricPage = async ({
  params,
}: {
  params: Promise<{ paramId: string; otherId: string }>;
}) => {
  const { paramId, otherId } = await params;
  return (
    <div>
      <h3>This is a nested parametric page</h3>
      <p>
        The passed paramId is <code>{paramId}</code>
      </p>
      <p>
        The passed otherId is <code>{otherId}</code>
      </p>
      <p>
        We have this result by nesting the page.tsx file into a folder with name
        is wrapperd in square brackets{" "}
        <code>src/app/parametric/[paramId]/nested/[otherId]</code>. The related
        path will be{" "}
        <code>/parametric/&lt;PARAM_ID&gt;/nested/&lt;OTHER_ID&gt;</code>
      </p>
    </div>
  );
};

export default ParametricPage;
