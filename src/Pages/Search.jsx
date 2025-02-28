import { useSearchParams } from "react-router-dom";
import { Card } from "../Components/Card";
import { UseFetch } from "../Hooks/UseFetch";
import { useEffect } from "react";

  export const Search = ( {apiPath} ) => {
  const [searchParams ] = useSearchParams();
  const queryTerm = searchParams.get("q");
  // Use the UseFetch hook and pass the correct queryTerm
  const { data: movies } = UseFetch(apiPath, queryTerm);

   useEffect(() => {
    // Update the document title with the search query

      document.title = `Search result for ${queryTerm}`;

   });

   return (
     <main className="container">
       <h5 className="text-danger py-2 border-bottom">
         {movies.length==0?` No result found for ${queryTerm}`: `Result for ${queryTerm}`}
       </h5>
       <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 my-2">
        {movies.map((movie) => {
            return <Card key={movie.id} movie={movie} />;
          })
        }
      </div>
    </main>
  );
};

















































// import { useSearchParams } from "react-router-dom";
// import { Card } from "../Components/Card";
// import { UseFetch } from "../Hooks/UseFetch";
// import { useEffect } from "react";

// export const Search = ({ apiPath }) => {
//   const { searchParams } = useSearchParams();
  
//   // Add a safeguard to handle the case when searchParams is undefined
//   const queryTerm = searchParams ? searchParams.get("q") : "";

//   const { data: movies, loading, error } = UseFetch(apiPath);

//   useEffect(() => {
//     if (queryTerm) {
//       document.title = `Search result for ${queryTerm}`;
//     }
//   }, [apiPath]);

//   return (
//     <main className="container">
//       <h5 className="text-danger py-2 border-bottom">
//         Search
//         {movies.length === 0 ? `No result found for ${queryTerm}` : `Result for ${queryTerm}`}
//       </h5>
//       <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 my-2">
//         {loading ? (
//           <p>Loading...</p> // Display loading state
//         ) : error ? (
//           <p className="text-danger">Error: {error}</p> // Handle error
//         ) : movies.length === 0 ? (
//           <p>No movies found!</p>
//         ) : (
//           movies.map((movie) => (
//             <Card key={movie.imdbID} movie={movie} /> // Display each movie card
//           ))
//         )}
//       </div>
//     </main>
//   );
// };


























  // import {useSearchParams} from "react-router-dom";
  // import { Card } from "../Components/Card";
  // import { UseFetch } from "../Hooks/UseFetch";
  // import { useEffect } from "react";

  // export const Search = ({apiPath}) => {
  //   const {searchParams} = useSearchParams()
  //    const queryTerm = searchParams.get("q")
  //   const {data:movies} = UseFetch(apiPath,queryTerm)
  // useEffect(()=>{
  //   document.title = `Search result for ${queryTerm}`
  //  })
  //  return (     <main className="container">
  //        <h5 className="text-danger py-2 border-bottom">Search
  //        {movies.length===0?`No result found for ${queryTerm}`:`Result for ${queryTerm}`}
  //        </h5>
  //       <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 my-2">
  //          {movies.length === 0 && !loading ? (
  //           <p>No movies found!</p>
  //          ) : (
  //            movies.map((movie) => {
  //            return <Card key={movie.imdbID} movie={movie} />;
  //            })
  //         )}
  //         </div>
  //   </main>
  //   )
  // }




// import { useSearchParams } from "react-router-dom";
// import { Card } from "../Components/Card";
// import { UseFetch } from "../Hooks/UseFetch";
// import { useEffect } from "react";

// export const Search = ({ apiPath }) => {
//   const { searchParams } = useSearchParams();
//   const queryTerm = searchParams.get("q");
  
//   // Ensure the queryTerm is available and passed to UseFetch
//   const { data: movies, loading, error } = UseFetch(apiPath, queryTerm);

//   // Update document title based on queryTerm
//   useEffect(() => {
//     if (queryTerm) {
//       document.title = `Search results for "${queryTerm}"`;
//     } else {
//       document.title = "Search - No query";
//     }
//   }, [queryTerm]); // Dependency on queryTerm

//   return (
//     <main className="container">
//       <h5 className="text-danger py-2 border-bottom">
//         Search {movies.length === 0 ? `No results found for "${queryTerm}"` : `Results for "${queryTerm}"`}
//       </h5>
//       <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 my-2">
//         {loading ? (
//           <p>Loading...</p>
//         ) : error ? (
//           <p>{error}</p>
//         ) : movies.length === 0 ? (
//           <p>No movies found!</p>
//         ) : (
//           movies.map((movie) => (
//             <Card key={movie.imdbID} movie={movie} />
//           ))
//         )}
//       </div>
//     </main>
//   );
// };
