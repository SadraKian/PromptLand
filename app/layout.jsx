import "@styles/global.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
export const metadata = {
  title: "PrompLand",
  description: "A place to share and deploy AI powered promps",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/logo.svg" type="image/x-icon" />
      </head>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
