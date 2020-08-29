import React from 'react';
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function App() {




  return (
      <>
        <Header />

        <Main cards={cards} />

        <Footer />
      </>
  );
}

export default App;
