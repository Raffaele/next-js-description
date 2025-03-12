"use client";

import { useState } from "react";

const NestedTemplate = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [text, setText] = useState("");
  return (
    <div>
      <h2>Nested template</h2>
      <p>
        There is a <code>template.tsx</code> file in{" "}
        <code>app/nested-template</code> folder <code>app/nested-template</code>
        .
        <br />
        That component will wrap all the pages in <code>/nested-template</code>
        and in deeper path
      </p>
      <p>
        The state is initialised every time the user navigates in a new page
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

export default NestedTemplate;
