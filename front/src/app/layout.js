import Nav from "@/components/nav";
import "../styles/globals.css";

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"></link>

export const metadata = {
  title: "Marusst",
  description: "Marusst consultoría",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
        />
      </head>
      <body>

        <header className="holder-index">
          <div>
            <img src="img/imagotipo.png" alt="logo" />
          </div>
          <Nav/>
        </header>

        {children}

        <footer>
          <div className="container text-center">
            <small className="">&copy; MARUSST - Diseñado por Rocío</small>
        </div>
        </footer>
      </body>
    </html>
  );
}
