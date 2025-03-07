import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Title overwritten in page",
  description: "Description overwritten in page.tsx file",
};

const SimplePathPage = () => {
  return (
    <div>
      <h2>Simple path</h2>
      <p>
        You can see this page in <code>/simple-path-2</code> path as the file
        related to the page is in <code>src/app/simple-path-2/page.tsx</code>.
      </p>
      <p>This page overwrite the metadata</p>
    </div>
  );
};

export default SimplePathPage;
