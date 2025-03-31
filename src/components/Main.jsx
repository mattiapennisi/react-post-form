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
            <form className='d-flex'>
                <input type="text" name="authorInput" id="authorInput" placeholder='Enter post author' value={postForm.author}/>
                <input type="text" name="titleInput" id="titleInput" placeholder='Enter post title' value={postForm.title}/>
                <input type="text" name="bodyInput" id="bodyInput" placeholder='Enter post body' value={postForm.body}/>
                <label htmlFor="publicInput">Public</label>
                <input type="checkbox" name="publicInput" id="publicInput" placeholder='Enter ' value={postForm.public}/>
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}