// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h2>Documentation &rarr;</h2>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h2>Learn &rarr;</h2>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/canary/examples"
//             className={styles.card}
//           >
//             <h2>Examples &rarr;</h2>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.card}
//           >
//             <h2>Deploy &rarr;</h2>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <span className={styles.logo}>
//             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//           </span>
//         </a>
//       </footer>
//     </div>
//   )
// }
import { useState } from "react";
import axios from "axios";
import {Card, Icon, Image} from 'semantic-ui-react';

export default function AnimationPage() {
  const [numMovies, setNumMovies] = useState(0);
  const [movies, setMovies] = useState([]);

  const GetGhibliMovies = async () => {
    const result = await axios.get("https://ghibliapi.herokuapp.com/films");
    console.log(result);
    setNumMovies(result.data.length);
    setMovies([...result.data]);
  };

  return (
    <div>
      <button onClick={() => GetGhibliMovies()}>Get all movies</button>
      <h3>There are #(numMovies) Movies from the Database </h3>
      {numMovies > 0 && (
        <div>
          Title of the first movie:
          {movies[0].title} - {movies[0].original_title}
        </div>
      )}
      <div>break</div>
      {numMovies > 0 &&
        movies.map((o, i) => (
          <Card>
            <Image src={o.image} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{o.title}</Card.Header>
              <Card.Meta>
                <span>{o.original_title} </span>
              </Card.Meta>
              <Card.Description>{o.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                {o.producer}/{o.director}
              </a>
            </Card.Content>
          </Card>
        ))}
    </div>
  );
}


