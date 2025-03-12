type Props = {
  params: Promise<{ id: string }>;
};

const ParallelInterceptionsPage = async ({ params }: Props) => {
  const { id } = await params;
  return (
    <div>
      <h3>This is the specifice page at id {id}</h3>
    </div>
  );
};

export default ParallelInterceptionsPage;
