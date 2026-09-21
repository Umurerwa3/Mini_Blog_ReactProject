import { posts } from '../../data/posts'
import Post from '../Post/Post'
import './PostList.css'

const HIGHLIGHTED_AUTHOR = 'Aline Mukamana'

function PostList() {
  return (
    <section className="post-list">
      <h2 className="post-list__heading">Latest Posts</h2>
      {posts.map((post) => (
        <Post key={post.id} post={post} highlightAuthor={HIGHLIGHTED_AUTHOR} />
      ))}
    </section>
  )
}

export default PostList
