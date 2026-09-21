import Header from './components/Header/Header'
import PostList from './components/PostList/PostList'
import withLogger from './hoc/withLogger'
import './App.css'

const HeaderWithLogger = withLogger(Header)

function App() {
  return (
    <div className="app">
      <HeaderWithLogger />
      <PostList />
    </div>
  )
}

export default App
