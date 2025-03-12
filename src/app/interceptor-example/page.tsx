import Link from "next/link";

const InterceptorSource = () => {
  return (
    <div>
      <h3>This is the interceptor folder</h3>
      <Link href="/interceptor-example/intercepted">
        Go to page for interception
      </Link>
    </div>
  );
};

export default InterceptorSource;
