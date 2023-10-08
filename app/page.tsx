import Image from "next/image";
import Container from "@/components/Container";
import { metadata } from "@/app/layout";
import { InferGetStaticPropsType } from "next";
import { allPosts } from "contentlayer/generated";
import RecentPosts from "@/components/RecentPosts";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <div className={`my-5 w-full`}>
        <div className={`relative`}>
          <Image
            src={`/tooth.webp`}
            alt="대표이미지"
            width={45}
            height={45}
            layout={`responsive`}
            objectFit="cover"
            className={`rounded-3xl`}
          />
          <span
            className={`absolute top-12 font-extrabold italic text-white text-5xl md:text-9xl text flex justify-center w-full drop-shadow-lg`}
          >
            {metadata.title}
          </span>
        </div>
        <RecentPosts posts={posts} />
      </div>
    </Container>
  );
};
const getStaticProps = async () => {
  const posts = allPosts.sort(
    (prev, next) => Number(new Date(prev.date)) - Number(new Date(next.date))
  );
  return {
    props: {
      posts,
    },
  };
};
export default Home;
