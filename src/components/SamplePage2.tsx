import { useSearchParams } from "react-router-dom";

export const SamplePage2: React.FC = () => {
  const [searchParams] = useSearchParams();
  console.log([searchParams]);
  const query1 = searchParams.get("query1");
  const query2 = searchParams.get("query2");

  console.log(query1);
  console.log(query2);

  return (
    <>
      <p>query1={query1}</p>
      <p>query2={query2}</p>
    </>
  );
};
