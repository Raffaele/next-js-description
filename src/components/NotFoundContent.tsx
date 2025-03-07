"use client";

import { usePathname } from "next/navigation";

export const NotFoundContent = () => {
  // We can use hooks just if we are in the client component (the file starts with "use client")
  const pathName = usePathname();
  const privateFolder = pathName
    .split("/")
    .find((step) => step.startsWith("_"));

  if (privateFolder) {
    return (
      <div>
        The page was not found because in the path name (<code>{pathName}</code>
        ) there is a private folder (<code>{privateFolder}</code>): the name has
        a underscore (<code>_</code>) prefix{" "}
      </div>
    );
  }
  return (
    <div>
      The path is <code>{pathName}</code>
    </div>
  );
};
