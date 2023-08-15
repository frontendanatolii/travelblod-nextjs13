import { DUMMY_CATEGORIES, DUMMY_POSTS } from "@/DUMMY_DATA"
import PaddingContainer from "@/components/Layout/Padding-container"
import { PostsList } from "@/components/Post/PostsList"

export const generateStaticParams = async () => {
  return DUMMY_CATEGORIES.map(category => {
    return {
      category: category.slug
    }
  })
}

export default function CategoryPage({ params }: {
  params: {
    category: string
  }
}) { 
  const posts = DUMMY_POSTS.filter(post => post.category.title.toLocaleLowerCase() === params.category);
  const category = DUMMY_CATEGORIES.find(category => category.slug === params.category);

  return (
    <PaddingContainer>
      <div className="mb-10">
        <h1 className="text-4xl font-semibold">{category?.title}</h1>
        <p className="text-lg text-neutral-600">{category?.description}</p>
      </div>
      <PostsList posts={posts} />
    </PaddingContainer>
  )
}