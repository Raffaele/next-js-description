"use client";

import { usePathname } from "next/navigation";

export const ShowPath = () => {
  const pathName = usePathname();

  return <code>{pathName}</code>;
};
