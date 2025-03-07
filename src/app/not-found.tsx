import { NotFoundContent } from "@/components/NotFoundContent";

const NotFoundPage = () => {
  return (
    <div>
      <h2>Not found page</h2>
      <p>
        This page is in the <code>src/app/not-found.tsx</code> file. It is
        visible every time the user tries to access to a path that will not
        match with any of the existing pages
      </p>
      <NotFoundContent />
    </div>
  );
};

export default NotFoundPage;
