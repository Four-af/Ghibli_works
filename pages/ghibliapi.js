// import { useState } from "react";
// import axios from "axios";
// import {Card, Icon, Image} from 'semantic-ui-react';

// export default function AnimationPage() {
//   const [numMovies, setNumMovies] = useState(0);
//   const [movies, setMovies] = useState([]);

//   const GetGhibliMovies = async () => {
//     const result = await axios.get("https://ghibliapi.herokuapp.com/films");
//     console.log(result);
//     setNumMovies(result.data.length);
//     setMovies([...result.data]);
//   };

//   return (
//     <div>
//       <button onClick={() => GetGhibliMovies()}>Get all movies</button>
//       <h3>There are #(numMovies) Movies from the Database </h3>
//       {numMovies > 0 && (
//         <div>
//           Title of the first movie:
//           {movies[0].title} - {movies[0].original_title}
//         </div>
//       )}
//       <div>break</div>
//       {numMovies > 0 &&
//         movies.map((o, i) => (
//           <Card>
//             <Image src={o.image} wrapped ui={false} />
//             <Card.Content>
//               <Card.Header>{o.title}</Card.Header>
//               <Card.Meta>
//                 <span>{o.original_title} </span>
//               </Card.Meta>
//               <Card.Description>{o.description}</Card.Description>
//             </Card.Content>
//             <Card.Content extra>
//               <a>
//                 <Icon name="user" />
//                 {o.producer}/{o.director}
//               </a>
//             </Card.Content>
//           </Card>
//         ))}
//     </div>
//   );
// }
