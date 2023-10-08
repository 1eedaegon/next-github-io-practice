import BlogPost from "@/components/BlogPost";
import Container from "@/components/Container";
import { allPosts } from "@/.contentlayer/generated";
import { InferGetStaticPropsType } from "next";

// Pre-rendering(Build time)
const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <div className={`mt-10 flex flex-col`}>
        {posts.map((post) => (
          <BlogPost
            date={post.date}
            title={post.title}
            desc={post.desc}
            slug={post._raw.flattenedPath}
            key={post._id}
          />
        ))}
      </div>
    </Container>
  );
};

const getStaticProps = async () => {
  const posts = allPosts.sort(
    (prev, next) => Number(new Date(prev.date)) - Number(new Date(next.date))
  );
  return {
    props: { posts },
  };
};

export default Blog;
