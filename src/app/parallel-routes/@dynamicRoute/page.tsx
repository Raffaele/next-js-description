import Link from "next/link";

const DynamicRoute = async () => {
  return (
    <div>
      <h5>This is a dynamic route</h5>
      <div>
        <Link href="/parallel-routes/sub-route">Go to parallel routes</Link>
      </div>
    </div>
  );
};

export default DynamicRoute;
