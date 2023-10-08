import Head from "next/head";
import Image from "next/image";
import Nav from "./Nav";
import { metadata } from "@/app/layout";

const Container = (props: any) => {
  return (
    <div className={`w-full flex flex-col item-center p-3`}>
      <Head>
        <title>Blog</title>
      </Head>
      <header
        className={`w-full max-w-3xl flex flex-row justify-between items-center my-1`}
      >
        <div className={`flex flex-row items-center`}>
          <Image
            src={`/next.svg`}
            alt="logo"
            width={40}
            height={40}
            objectFit="cover"
            className={`rounded-full`}
          />
          <span className={`mx-2 font-extralight text-lg`}>
            {metadata.title}
          </span>
        </div>
        <Nav />
      </header>
      <main className={`w-full max-w-3xl`}>{props.children}</main>
    </div>
  );
};

export default Container;
