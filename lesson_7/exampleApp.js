import {
  BrowserRouter as Router,
  Routes, Route, Link,
  useMatch,
  useNavigate
} from "react-router-dom"

const Home = () => (
  <div> <h2>TKTL notes app</h2> </div>
)

const Notes = () => (
  <div> <h2>Notes</h2> </div>
)

const Users = () => (
  <div> <h2>Users</h2> </div>
)

const Login = props => {
  const navigate = useNavigate()

  const onSubmit = (event) => {
    event.preventDefault()
    props.onLogin('mluukkai')
    navigate('/')
  }

  return (
    <div>
      <h2>Log In</h2>
      <form onSubmit={onSunbmit}>
        <div>
          username: <input />
        </div>
        <div>
          password: <input type='password' />
        </div>
      </form>
    </div>
  )
}

const Note = ({ note }) => {
  return (
    <div>
      <h2>{note.content}</h2>
      <div>{note.user}</div>
      <div><strong>{note.important ? 'important' : ''}</strong></div>
    </div>
  )
}

const App = () => {

  const padding = {
    padding: 5
  }

  const match = useMatch('/notes/:id')
  const note = match
    ? notes.find(note => note.id === Number(match.params.id))
    : null

  return (
    <div>
      <Router>
        <div>
          <Link style={padding} to="/">home</Link>
          <Link style={padding} to="/notes">notes</Link>
          <Link style={padding} to="/users">users</Link>
          {user
            ? <em>{user} logged in</em>
            : <Link style={padding} to="/login">Log In</Link>
          }
        </div>


        <Routes>
          <Route path="/notes/:id" element={<Note note={note} />} />
          <Route path="/notes" element={<Notes notes={notes} />} />
          <Route path="/users" element={user ? <Users /> : <Navigate replace to="/login" />} />
          <Route path="/login" element={<Login onLogin={login} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <footer>
        <br />
        <em>Note app, Department of Computer Science 2022</em>
      </footer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
)