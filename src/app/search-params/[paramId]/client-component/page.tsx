"use client";

import { use } from "react";

type Params = { paramId: string };
type SearchParams = { q?: string; start?: string; lang: "en" | "it" | "fr" };

type Props = {
  params: Promise<Params>;
  searchParams: Promise<SearchParams>;
};

const ClientSearchParamsPage = ({ params, searchParams }: Props) => {
  const { paramId } = use(params);
  const { q, start, lang } = use(searchParams);
  return (
    <div>
      <h3>This is a search params page</h3>
      <p>
        ParmId: <code>{paramId}</code>
      </p>
      <p>
        q: <code>{q}</code>
      </p>
      <p>
        start: <code>{start}</code>
      </p>
      <p>
        lang: <code>{lang}</code>
      </p>
    </div>
  );
};

export default ClientSearchParamsPage;
