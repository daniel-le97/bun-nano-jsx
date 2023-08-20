// import Counter from "../Comments";
// import Layout from "../Layout";

import { Layout } from "../components/Layout.tsx";

export default function () {
  return (
    <Layout>
      {/* <Counter /> */ }
      <div style={{ height: "20px" }}></div>
      <p>
        <a href="/">Home</a>
      </p>
      <p>
        <a href="/settings">Settings</a>
      </p>
    </Layout>
  );
}
