import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <Link href="/ask-question">Submit question</Link>
    </div>
  );
};

export default Home;
