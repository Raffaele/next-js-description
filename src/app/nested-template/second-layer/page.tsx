const NestedTemplatePage = () => {
  return (
    <div>
      <h3>Nested template 2</h3>
      <p>
        This page is in{" "}
        <code>src/app/nested-template/second-layer/page.tsx</code> file, it will
        be visible in <code>/nested-template/second-layer</code> path
      </p>
    </div>
  );
};

export default NestedTemplatePage;
