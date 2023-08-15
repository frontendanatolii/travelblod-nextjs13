import { Post } from "@/types/collections"
import { PostCard } from "./PostCard"

interface Props {
  posts: Post[],
  layout?: 'vertical' | 'horizontal'
}

export function PostsList({ posts, layout = 'vertical' }: Props) {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-flow-col lg:auto-cols-fr">
      {posts.map(post => (
        <PostCard key={post.id} post={post} layout={layout} />
      ))}
    </div>
  )
}