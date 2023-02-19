import Layout from '@theme/Layout';
import React from 'react';

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          fontSize: '20px',
          height: '50vh',
          justifyContent: 'center',
        }}
      >
        <p>
          Edit <code>pages/helloReact.js</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}
