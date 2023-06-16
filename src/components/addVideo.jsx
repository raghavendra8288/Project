import '../styles/addVideo.css'
import { useRef } from 'react';
import { useNavigate } from "react-router-dom"

const AddVideo = () => {

    let navigate = useNavigate()

    let thumbnail = useRef(null)
    let title = useRef(null)
    let channel = useRef(null)
    let views = useRef(null)

    let upload = (e) => {
        e.preventDefault() // prevents the page from reloading
        let data = {
            thumbnail: thumbnail.current.value,
            title: title.current.value,
            channel: channel.current.value,
            views: views.current.value
        }
        fetch('http://localhost:4000/videos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        alert('video uploaded successfully')
        navigate('/')
    }

    return (
        <div className="addVideo">
            <div className="image">
                <img src="data:image/jpeg;base64,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" alt="" />
            </div>
            <div className="content">
                <div className="cont1">
                    <h1>Welcome to Youtube</h1>
                    <p>Common and create an account</p>
                </div>
                <div className="cont2">
                    <form action="" onSubmit={upload}>
                        <label htmlFor="">thumbnail</label><br />
                        <input ref={thumbnail} type="text" />
                        <label htmlFor="">title</label><br />
                        <input ref={title} type="text" />
                        <label htmlFor="">channel</label><br />
                        <input ref={channel} type="text" />
                        <label htmlFor="">views</label><br />
                        <input ref={views} type="text" />
                        <button>Upload Video</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddVideo;