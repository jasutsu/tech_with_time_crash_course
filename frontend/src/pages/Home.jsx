import { useEffect, useState } from "react"
import api from "../api"
import { Note } from "../components/Note"
import "../styles/Home.css"

export const Home = () => {
    const [notes, setNotes] = useState([])
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    useEffect(() => {
        getNotes()
    }, [])

    const getNotes = () => {
        api.get("/api/notes/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data)
                console.log(data)
            })
            .catch((error) => alert(error))
    }

    const deleteNote = (id) => {
        api.delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) {
                    alert("Note deleted!")
                    getNotes()
                } else {
                    alert("Failed to delete Note")
                }
            })
            .catch((error) => alert(error))
    }

    const createNote = (e) => {
        e.preventDefault()
        api.post("/api/notes/", { title, content })
            .then((res) => {
                if (res.status === 201) {
                    alert("Note created!")
                    getNotes()
                } else {
                    alert("Failed to create note")
                }
            })
            .catch((error) => alert(error))
    }

    return (
        <>
            <div>
                <h2>Notes</h2>
                {notes.map((note) => (
                    <Note note={note} onDelete={deleteNote} key={note.id} />
                ))}
            </div>
            <h2>Create a Note</h2>
            <form onSubmit={createNote}>
                <label htmlFor="title">Title:</label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label htmlFor="content">Content:</label>
                <br />
                <textarea
                    id="content"
                    name="content"
                    required
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}
