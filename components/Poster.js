import Thumbnail from "./Thumbnail";

function Poster({ data }) {
  return (
    <div
      className="px-5 py-10 grid gap-4 grid-cols-1 md:grid-cols-2 
      lg:grid-cols-4 3xl:grid-cols-6"
    >
      {data?.success ? (
        data?.results.map((result, index) => (
          <Thumbnail key={result?.id || index} result={result} />
        ))
      ) : (
        <p className="text-center text-lg">
          {data?.message || "No data found"}
        </p>
      )}
    </div>
  );
}

export default Poster;
