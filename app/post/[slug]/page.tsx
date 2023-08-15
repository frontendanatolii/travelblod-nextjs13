import { DUMMY_POSTS } from "@/DUMMY_DATA";
import { SocialLink } from "@/components/Elements/SocialLink";
import PaddingContainer from "@/components/Layout/Padding-container";
import { PostBody } from "@/components/Post/PostBody";
import { PostHero } from "@/components/Post/PostHero";
import { notFound } from 'next/navigation'

export const generateStaticParams = async () => {
  return DUMMY_POSTS.map(post => {
    return {
      category: post.slug
    }
  })
}

export default function PostDetail({ params }: {
  params: {
    slug: string
  }
}) {
  const post = DUMMY_POSTS.find(post => post.slug === params.slug);

  if (!post) {
    notFound();
  }
  return (
    <PaddingContainer>
      <PostHero post={post} />
      <div className="flex flex-row mt-10 gap-10 md:flex-row">
        <div className="relative">
          <div className="sticky flex items-center gap-5 md:flex-col top-20">
            <div className="font-medium md:hidden">Share this content:</div>
            <SocialLink
              isShareLink={true}
              platform="facebook"
              link={`https://www.facebook.com/sharer/sharer.php?u=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
            />
            <SocialLink
              isShareLink={true}
              platform="twitter"
              link={`https://twitter.com/intent/tweet?url=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
            />
            <SocialLink
              isShareLink={true}
              platform="linkedin"
              link={`https://www.linkedin.com/shareArticle?mini=true&url=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
            />
          </div>
        </div>
        <PostBody body={post.body} />
      </div>
    </PaddingContainer>
  )
}