const NestedLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <h2>Nested layout</h2>
      <p>
        There is a <code>layout.tsx</code> file in{" "}
        <code>app/nested-layout</code> folder <code>app/nested-layout</code>.
        <br />
        That component will wrap all the pages in <code>
          /nested-layout
        </code>{" "}
        and in deeper path
      </p>
      <hr />
      {children}
    </div>
  );
};

export default NestedLayout;
