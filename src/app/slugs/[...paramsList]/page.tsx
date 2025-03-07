import { notFound } from "next/navigation";

const SlugPage = async ({
  params,
}: {
  params: Promise<{ paramsList: string[] }>;
}) => {
  // The attribute name "paramsList" is the same we have in the slug folder name
  const { paramsList } = await params;

  if (paramsList.length === 1) {
    notFound();
  }

  return (
    <div>
      <h3>Slug page</h3>
      <p>
        The slug page is a particular parametric page that accept infinite
        params
      </p>
      <p>
        We can have this result if the <code>page.tsx</code> file is inside a
        folder with the name that is wrapped in square brackets and it starts
        with 3 dots.
      </p>
      <p>
        In this case we the page.tsx file is inside the
        <code>src/app/slugs/[...params]</code> folder
      </p>
      <p>
        The related path will be{" "}
        <code>/slugs/&lt;PARAM_1&gt;/&lt;PARAM_2&gt;/&lt;PARAM_3&gt;/...</code>
      </p>
      <p>
        Currently the list of the params is:{" "}
        <code>{JSON.stringify(paramsList)}</code>
      </p>
    </div>
  );
};

export default SlugPage;
