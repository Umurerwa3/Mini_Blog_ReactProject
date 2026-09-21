import type { Post as PostType } from '../../types/Post'
import './Post.css'

interface PostProps {
  post: PostType
  highlightAuthor?: string
}

const PREVIEW_WORD_COUNT = 15

function getPreview(content: string, wordCount: number): string {
  const words = content.trim().split(/\s+/)
  if (words.length <= wordCount) return content
  return `${words.slice(0, wordCount).join(' ')}...`
}

function Post({ post, highlightAuthor }: PostProps) {
  const isHighlighted = post.author === highlightAuthor

  return (
    <article
      className={`post ${isHighlighted ? 'post--highlighted' : ''}`}
      style={isHighlighted ? { borderLeftColor: '#f0a500' } : undefined}
    >
      <h3 className="post__title">{post.title}</h3>
      <p className="post__meta">
        By <span className="post__author">{post.author}</span> · {post.date}
      </p>
      <p className="post__preview">{getPreview(post.content, PREVIEW_WORD_COUNT)}</p>
    </article>
  )
}

export default Post
