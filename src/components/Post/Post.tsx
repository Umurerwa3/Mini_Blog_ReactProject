import type { Post as PostType } from '../../types/Post'
import './Post.css'

interface PostProps {
  post: PostType
  highlightAuthor?: string
}

const PREVIEW_WORD_COUNT = 15
const ONE_DAY_MS = 24 * 60 * 60 * 1000

function getPreview(content: string, wordCount: number): string {
  const words = content.trim().split(/\s+/)
  if (words.length <= wordCount) return content
  return `${words.slice(0, wordCount).join(' ')}...`
}

function isPostedWithinLast24Hours(date: string): boolean {
  const postedAt = new Date(date).getTime()
  return Date.now() - postedAt < ONE_DAY_MS
}

function Post({ post, highlightAuthor }: PostProps) {
  const isHighlighted = post.author === highlightAuthor
  const isNew = isPostedWithinLast24Hours(post.date)

  return (
    <article
      className={`post ${isHighlighted ? 'post--highlighted' : ''}`}
      style={isHighlighted ? { borderLeftColor: '#f0a500' } : undefined}
    >
      <h3 className="post__title">
        {post.title} {isNew && <span className="post__badge">New!</span>}
      </h3>
      <p className="post__meta">
        By <span className="post__author">{post.author}</span> · {post.date}
      </p>
      <p className="post__preview">{getPreview(post.content, PREVIEW_WORD_COUNT)}</p>
    </article>
  )
}

export default Post
