"use client";

import { useState } from "react";

const NestedLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [text, setText] = useState("");
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
      <p>
        The state is consistent in the layout independently which page we are
        visiting
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </p>

      <hr />
      {children}
    </div>
  );
};

export default NestedLayout;
