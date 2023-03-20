import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Liên hệ - DalatBus</title>
        <meta name="description" content="Liên hệ với DalatBus" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Navbar />
      </Container>
    </>
  );
}
