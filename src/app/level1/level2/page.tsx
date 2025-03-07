const Level2 = () => {
  return (
    <div>
      <h3>Level2</h3>
      <p>
        This is the page <code>Level2</code> in the file{" "}
        <code>app/level1/level2/page.tsx</code>
      </p>
      <p>
        The browser URL for this page follows the router path{" "}
        <span className="font-bold">(/level1/level2)</span>
      </p>
      <p>As you can see a nested folder creates a deep URL</p>
    </div>
  );
};

export default Level2;
