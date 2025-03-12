import { Card } from "@/components/Card";

type Props = Readonly<{
  children: React.ReactNode;
  routeFast: React.ReactNode;
  routeSlow: React.ReactNode;
  routeWithError: React.ReactNode;
  dynamicRoute: React.ReactNode;
}>;

const ParallelRoutesLayout = (props: Props) => {
  const { children, routeFast, routeSlow, routeWithError, dynamicRoute } =
    props;

  return (
    <div>
      <div>{children}</div>
      <div className="flex">
        <Card title="Fast loading route">{routeFast}</Card>
        <Card title="Slow loading route">{routeSlow}</Card>
        <Card title="Route with error">{routeWithError}</Card>
      </div>
      <div>
        <Card title="Dynamic route">{dynamicRoute}</Card>
      </div>
    </div>
  );
};

export default ParallelRoutesLayout;
