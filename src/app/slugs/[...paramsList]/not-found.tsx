import { NotFoundContent } from "../../../components/NotFoundContent";

const SlugNotFound = () => {
  return (
    <div>
      <h3>Nested not found</h3>
      <p>
        You've tried to access the{" "}
        <code>src/app/slugs/[...params]/page.tsx</code> page by using just one
        param in the slug. This creates a programmatical call to the not-found
        page.
      </p>
      <p>
        NextJs selected the closest <code>not-found.tsx</code> page, in this
        case the one in the <code>src/app/slugs/[...paramsList]</code> folder.
      </p>
      <NotFoundContent />
    </div>
  );
};

export default SlugNotFound;
