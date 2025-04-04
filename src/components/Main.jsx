import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const url = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

export default function Main() {

    const [postForm, setPostForm] = useState({
        author: '',
        title: '',
        body: '',
        public: false
    })

    function handlePostForm(e) {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value

        setPostForm((post) => ({
            ...post,
            [e.target.name]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()

        console.log(postForm);

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postForm)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Data sent succesfully')
            })
            .catch(err => {
                console.error(err)
                alert('Something went wrong')
            })
    }

    return (
        <main id="main" className='p-4'>
            <h1 className='text-center mb-4'>Blog Posts Dashboard</h1>
            <form className='d-flex container flex-column' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        type="text"
                        name="author"
                        id="authorInput"
                        className="form-control"
                        placeholder='Enter post author'
                        value={postForm.author}
                        onChange={handlePostForm}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        name="title"
                        id="titleInput"
                        className="form-control"
                        placeholder='Enter post title'
                        value={postForm.title}
                        onChange={handlePostForm}
                    />
                </div>
                <div className="mb-3">
                    <textarea
                        name="body"
                        id="bodyInput"
                        className="form-control"
                        placeholder='Enter post body'
                        value={postForm.body}
                        onChange={handlePostForm}
                        rows="3"
                    />
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        name="public"
                        id="publicInput"
                        className="form-check-input"
                        checked={postForm.public}
                        onChange={handlePostForm}
                    />
                    <label className="form-check-label" htmlFor="publicInput">Public</label>
                </div>
                <button type="submit" className="btn btn-primary mb-4">Add post</button>
            </form>

        </main>
    )
}