import HeaderContainer from "@/components/Container/HeaderContainer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Liên hệ - DalatBus</title>
        <meta name="description" content="Liên hệ với DalatBus" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderContainer>
        <Navbar />
        <div className="flex bg-primary text-secondary flex-col justify-evenly px-global pt-16 pb-4 rounded-t-3xl">
          {/* Title */}
          <div className="self-center text-2xl font-bold ">
            Liên hệ với đội ngũ DalatBus
          </div>
          {/* Contact Form */}
          <div className="flex md:flex-row items-center flex-col mt-12">
            <form className="flex h-full w-full flex-col">
              <div className="">
                <label htmlFor="email" className="text-xs font-bold">
                  ĐỊA CHỈ EMAIL
                </label>
                <input
                  type="email"
                  className="mb-4 w-full border-b block rounded-xl border-zinc-300 bg-white mt-2 px-2 pt-3 pb-5 focus:border-zinc-600 focus:outline-none"
                  placeholder="email@example.com"
                />
              </div>
              <div className="">
                <label htmlFor="email" className="text-xs font-bold mb-4">
                  NỘI DUNG
                </label>
                <textarea
                  id="feedback"
                  rows="4"
                  className="line-clamp-3 mb-4 w-full mt-2 rounded-xl border-b border-zinc-300 bg-white  px-2 pt-3 pb-5 focus:border-zinc-600 focus:outline-none"
                  placeholder="Phản hồi của bạn..."
                />
              </div>
              <button className="w-full bg-accent py-4 text-sm font-semibold text-white duration-300 ease-in-out hover:opacity-80 rounded-xl mt-2">
                GỬI
              </button>
            </form>
            <div className="ml-24 hidden md:block">
              <Image
                src={"/mailbox.png"}
                alt="mailbox.png"
                width={560}
                height={560}
                blurDataURL="URL"
                placeholder="blur"
              />
            </div>
          </div>
          {/* Description */}
          <div className="self-center text-sm text-zinc-400 mt-24">
            Đội ngũ sẽ trả lời trong thời gian sớm nhất!
          </div>
        </div>
      </HeaderContainer>
    </>
  );
}
