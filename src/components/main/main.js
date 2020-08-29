import React from 'react';
import MainPost from "./mainPost";
import MainContent from "./mainContent";

function Main({cards}) {
    return (
        <main>
            <MainPost />
            <MainContent cards={cards} />
        </main>
    );
}

export default Main;
