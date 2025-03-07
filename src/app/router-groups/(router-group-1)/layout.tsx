import type { Metadata } from "next";
import { ShowPath } from "@/components/ShowPath";

export const metadata: Metadata = {
  title: "Title overwritten in layout",
  description: "Description overwritten in layout.tsx file",
};

const NestedLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <h2>Layout nested in router-group-1</h2>
      <p>
        This layout is shared between all the pages included in the path
        <ShowPath /> or subpaths
      </p>
      <p>
        These pages are in the folder
        <code>src/app/router-groups/(router-group-1)</code> and subfolders
      </p>
      <p>
        As you can see the folder wrapped in parenthesis is called router group
        and it's not included in the browser path
      </p>
      <p>
        This layout overwrite the metadata with static method for every page
        under this group
      </p>

      <hr />
      {children}
    </div>
  );
};

export default NestedLayout;
