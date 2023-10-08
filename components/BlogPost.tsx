import { Post } from "@/.contentlayer/generated";
import Link from "next/link";

const BlogPost = ({ date, title, desc, slug }: Post | any) => (
  <Link
    className="w-full my-7 hover:-translate-x-1.5"
    href={`/blog/${slug}`}
    passHref
  >
    <div className={`font-medium text-xs text-gray-400`}>{date}</div>
    <div className={`font-extrabold text-2xl mt-2`}>{title}</div>
    <div className={`font-medium text-gray-600 text-xl mt-1`}>{desc}</div>
  </Link>
);

export default BlogPost;
