"use client";

type Props = {
  error: Error;
};

const ParallelRoutesError = ({ error }: Props) => {
  return (
    <div>
      <div>This page has an error.</div>
      <div className="text-red-700 font-bold">{error.message}</div>
    </div>
  );
};

export default ParallelRoutesError;
