import { useState } from 'react'

export default function Main() {

    const [postForm, setPostForm] = useState({
        author: '',
        title: '',
        body: '',
        public: false
    })

    return (
        <main id="main">
            <form>
                <input type="text" name="authorInput" id="authorInput" />
                <input type="text" name="titleInput" id="titleInput" />
                <input type="text" name="bodyInput" id="bodyInput" />
                <label htmlFor="publicInput">Public</label>
                <input type="checkbox" name="publicInput" id="publicInput" />
            </form>
        </main>
    )
}