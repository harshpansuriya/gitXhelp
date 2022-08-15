import Head from "next/head";
import Hero from "../components/hero.components";
import fsPromises from "fs/promises";
import path from "path";

export default function Home(props) {
  const posts = props.record;
  return (
    <div style={{ padding: 30 }}>
      <Head>
        <title>git_X_help</title>
      </Head>

      <Hero />
      <div>
        {posts.map((post) => (
          <div
            key={post.title}
            style={{ padding: 20, borderBottom: "1px solid #ccc" }}
          >
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData,
  };
}
