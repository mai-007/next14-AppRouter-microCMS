import { siteMeta } from '@/lib/contents'
import { openGraphMetadata, twitterMetadata } from 'lib/baseMetadata'
import { getAllPosts } from '@/lib/api'
import Container from '@/components/Container'
import Hero from '@/components/Hero'
import Posts from '@/components/Posts'
import Pagination from '@/components/Pagination'
import { getPlaiceholder } from 'plaiceholder'

// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from 'lib/constants'

export default  async function Home() {
  const posts = await getAllPosts(4)

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return (
    <Container>
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
      <Posts posts={posts} />
      <Pagination nextUrl="/blog" nextText="More Posts" />
    </Container>
  )
}