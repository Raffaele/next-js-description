import Link from "next/link";

const APP_LINKS = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Simple path 1",
    path: "/simple-path-1",
  },
  {
    label: "Simple path 2",
    path: "/simple-path-2",
  },
  {
    label: "Level1",
    path: "/level1",
  },
  {
    label: "Level2",
    path: "/level1/level2",
  },
  {
    label: "Nested layout 1",
    path: "/nested-layout",
  },
  {
    label: "Nested layout 2",
    path: "/nested-layout/second-layer",
  },
  { label: "Parametric page (foo)", path: "/parametric/foo" },
  { label: "Parametric page (bar)", path: "/parametric/bar" },
  { label: "Parametric page (baz, foo)", path: "/parametric/baz/nested/foo" },
  { label: "Parametric page (baz, bar)", path: "/parametric/baz/nested/bar" },
  { label: "Parametric page with slugs", path: "/slugs/this/is/nested" },
  { label: "Grouping folder 1", path: "/router-groups/group-subfolder-1" },
  { label: "Grouping folder 2", path: "/router-groups/group-subfolder-2" },
  {
    label: "Server component with search params",
    path: "/search-params/123/server-component?q=query&lang=it&start=5",
  },
  {
    label: "Client component with search params",
    path: "/search-params/456/client-component?q=re-query&lang=en&start=8",
  },
  { label: "Global not found", path: "/wrong-link" },
  { label: "Nested not found", path: "/slugs/other" },
];

export const GlobalNavBar = () => {
  return (
    <section className="p-4">
      <h3 className="p-4 mb-4 font-bold leading-none tracking-tight text-gray-900 text-3xl dark:text-white">
        This is the navbar
      </h3>
      <p>
        The code is in <code>src/components/GlobalNavBar.tsx</code> file. It's
        not visible as page in a specific URL for 2 reasons:
      </p>
      <ol className="space-1 list-decimal list-inside p-2">
        <li>
          It's not in the <code>src/app</code> subfolder
        </li>
        <li>
          Its name is not <code>page.tsx</code>
        </li>
      </ol>
      <nav className="flex flex-col">
        {APP_LINKS.map((line) => (
          <Link
            key={line.path}
            href={line.path}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            {line.label}
          </Link>
        ))}
      </nav>
    </section>
  );
};
