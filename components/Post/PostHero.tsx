import { Post } from "@/types/collections"
import { PostContent } from "./PostContent"
import Image from "next/image"

interface Props {
  post: Post,
}

export function PostHero({ post }: Props) {
  return (
    <div>
      <PostContent post={post} isPostPage={true} />
      <Image
        priority
        className="rounded-md object-cover object-center h-[300px] md:h-[500px] mt-6"
        src={post.image}
        width={1280}
        height={500}
        alt={post.title}
      />
    </div>
  )
}