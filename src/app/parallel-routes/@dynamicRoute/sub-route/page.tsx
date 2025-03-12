import Link from "next/link";

const SubRoutePage = () => {
  return (
    <div>
      <h5>This is the sub router page</h5>
      <div>
        <Link href="/parallel-routes">Go to parallel route</Link>
      </div>
    </div>
  );
};

export default SubRoutePage;
