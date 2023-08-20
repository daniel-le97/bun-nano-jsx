
import { Comments } from "../components/Comments.tsx";
import { Layout } from "../components/Layout.tsx";


export default function () {
  return (
    <Layout>
      <Comments />
      <div style={ { height: "20px" } } ></div>
      <p>
        <a href="/">Home</a>
      </p>
      <p>
        <a href="/settings">Settings</a>
      </p>
    </Layout>
  );
}
