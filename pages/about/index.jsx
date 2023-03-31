import Head from "next/head";
import HeaderContainer from "@/components/Container/HeaderContainer";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Về chúng tôi - DalatBus</title>
        <meta name="description" content="Về đội ngũ của DalatBus" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderContainer>
        <Navbar />
        <div className="px-14 mx-global rounded-t-3xl text-secondary bg-primary">
dadasdsa
</div>
      </HeaderContainer>
    </>
  );
}
