import Head from "next/head";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";

export default function AboutPage(){
    return (
      <>
        <Head>
          <title>Về chúng tôi - DalatBus</title>
          <meta name="description" content="Về đội ngũ của DalatBus" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container>
          <Navbar />
        </Container>
      </>
    );
}