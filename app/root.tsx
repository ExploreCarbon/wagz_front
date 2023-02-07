import { MetaFunction } from "@remix-run/node";
import styles from "./styles/tailwind.css";
import { graphqlClient, MENU_QUERY } from "./lib/apollo";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Wagz",
  viewport: "width=device-width,initial-scale=1",
});

// function called getMenu that is async and takes an id
const getMenu = async (id: String) => {
  // destructure data and error from the graphqlClient.query
  const { data, error } = await graphqlClient.query({
    query: MENU_QUERY,
    variables: { id },
  });

  if (error) {
    console.error(error);
    return null;
  }
  return data;
};

export const loader = async () => {
  const HEADER = "dGVybToz";
  const LEFT = "dGVybTo0";
  const CENTER = "dGVybTo1";
  const RIGHT = "dGVybTo2";
  // get value from async function getMenu
  var header = await getMenu(HEADER);
  var left = await getMenu(LEFT);
  var center = await getMenu(CENTER);
  var right = await getMenu(RIGHT);
  return { header, left, center, right };
};
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function App() {
  const data = useLoaderData();
  const headerMenu = data.header.menu.menuItems.nodes;
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body className="bg-gray-50 antialiased">
        <Navigation menu={headerMenu} />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Footer data={data} />
      </body>
    </html>
  );
}
