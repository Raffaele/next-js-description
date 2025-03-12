import { Card } from "@/components/Card";

type Props = Readonly<{
  children: React.ReactNode;
  routeFast: React.ReactNode;
  routeSlow: React.ReactNode;
  routeWithError: React.ReactNode;
}>;

const ParallelRoutesLayout = (props: Props) => {
  const { children, routeFast, routeSlow, routeWithError } = props;

  return (
    <div>
      <div>{children}</div>
      <Card title="Fast loading route">{routeFast}</Card>
      <Card title="Slow loading route">{routeSlow}</Card>
      <Card title="Route with error">{routeWithError}</Card>
    </div>
  );
};

export default ParallelRoutesLayout;
