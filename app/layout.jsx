import "@styles/global.css";
export const metadata = {
  title: "PrompLand",
  description: "A place to share and deploy AI powered promps",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
