// import { Helmet } from "nano-jsx";

// export default () => {
//   return (
//       <div>
//         <Helmet>
//           <html lang="en" amp />
//           {/* <body class="root" /> */ }
//           <body class="main" id="id" />
//           <title>Nano JSX Helmet SSR</title>
//           <meta name="description" content="Nano-JSX application" />
//           {/* <script src="/index.js"></script> */ }
//         </Helmet>
//         {/* {new ()} */ }
//       </div>
//     );
// };

import { FC , h} from 'nano-jsx/esm/index.js'

export const Layout: FC<{ children: any }> = props => {
  return (
    <html>
      <header>
        <nav style={{ padding: '8px' }}>
          this is the navigation bar <span id="counter-in-header">0</span>
        </nav>
      </header>
      <main>
        <section>{props.children}</section>
      </main>
      <script type="module" src="/public/bundle.js"></script>
    </html>
  )
}