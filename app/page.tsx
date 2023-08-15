'use client';
import { DUMMY_POSTS } from '@/DUMMY_DATA';
import { CtaCard } from '@/components/Elements/CtaCard'
import PaddingContainer from '@/components/Layout/Padding-container'
import { PostCard } from '@/components/Post/PostCard'
import { PostsList } from '@/components/Post/PostsList'

export default function Home() {
  return (
    <PaddingContainer>
      <main className='h-auto space-y-10'>
        <PostCard post={DUMMY_POSTS[0]} />
        <PostsList posts={DUMMY_POSTS.filter((_post, index) => index > 0 && index < 3)} />
        <CtaCard />
        <PostCard reverse={true} post={DUMMY_POSTS[3]} />
        <PostsList posts={DUMMY_POSTS.filter((_post, index) => index > 3 && index < 6)} />
      </main>
    </PaddingContainer>
  )
}
