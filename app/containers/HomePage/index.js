import React from 'react';
import Layout from 'components/Layout'

const clg = (...str) => console.log(...str)

export default function HomePage() {
  return (
    <Layout>
      <h1 className="display-3">No Redux, React boilerplate</h1>
      <p className="lead">
        <small>by </small>
        Preyash Hojiwala
      </p>
    </Layout>
  );
}
