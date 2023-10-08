import { Post } from "contentlayer/generated";
import Link from "next/link";

const RecentPosts = ({ posts }: { posts: Post[] }) => {
  return (
    <section className={`mt-10`}>
      <h1 className={`text-3xl font-extrabold`}>최근 게시물</h1>
      <div className={`flex flex-col`}>
        {posts.slice(0, 5).map((post: Post | any) => (
          <Link
            key={post._id}
            className={`md-5`}
            href={`/blog/${post._raw.flattenedPath}`}
            passHref
          >
            <div className={`font-medium text-xl`}>{post.title}</div>
            <div className={`font-light`}>{post.desc}</div>
          </Link>
        ))}
        <Link className={`mt-5`} href={`/`} passHref>
          <div className={`font-medium text-xl`}> Hello</div>
          <div className={`font-light`}>Content!</div>
        </Link>
      </div>
    </section>
  );
};

export default RecentPosts;
