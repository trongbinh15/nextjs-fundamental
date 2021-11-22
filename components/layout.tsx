import React, { ReactNode } from 'react'
import Head from 'next/head';
import Header from './header';
import Footer from './footer';

type Prop = {
  children: ReactNode;
}

function Layout(props: Prop) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  )
}

export default Layout
