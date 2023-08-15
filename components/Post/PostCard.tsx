import { Post } from "@/types/collections"
import Image from "next/image"
import Link from "next/link"
import { PostContent } from "./PostContent"

interface Props {
  post: Post,
  layout?: 'vertical' | 'horizontal',
  reverse?: boolean,
}

export function PostCard({
  post,
  layout = 'horizontal',
  reverse = false
}: Props) {
  return (
    <Link
      href={`/post/${post?.slug}`}
      className={`@container ${
        layout === "horizontal"
          ? "grid items-center grid-cols-1 md:grid-cols-2 gap-10"
          : "space-y-10"
      } `}
    >
      <Image
        alt={post?.title}
        src={post?.image}
        width={600}
        height={300}
        className={`rounded-md w-full object-cover object-center h-full max-h-[300px] ${
          reverse ? "md:order-last" : ""
        }`}
      />
      <div className="flex items-center">
        <PostContent post={post} />
      </div>
    </Link>
  )
}