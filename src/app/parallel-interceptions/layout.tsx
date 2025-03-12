type Props = {
  children: React.ReactNode;
  extra: React.ReactNode;
};

const ParallelInterceptionsLayout = ({ children, extra }: Props) => {
  return (
    <div>
      <div>{children}</div>
      <div>{extra}</div>
    </div>
  );
};

export default ParallelInterceptionsLayout;
