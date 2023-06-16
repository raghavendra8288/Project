import { useState } from "react";
import "../styles/videos.css"
import { useEffect } from "react";

const Videos = () => {
    let [video, setVideo] = useState([])
    let [short, setShorts] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            let responce = await fetch('http://localhost:4000/videos')
            let data = await responce.json()
            setVideo(data)

            let responce1 = await fetch('http://localhost:4000/shorts')
            let data1 = await responce1.json()
            setShorts(data1)
        }
        fetchData()
    }, [])
    let removeVideo = (id, name) => {
        fetch(`http://localhost:4000/videos/${id}`, {
            method: 'DELETE'
        })
        alert(`${name} video got removed`)

        // let result = video.filter((x) => x.id !== id)
        // setVideo(result)
        // alert(`${name} video got removed`)
    }
    return (
        <div className="videos">
            <h1>Featured Videos</h1>
            <div className="videoData">
                {
                    video.map((data) => {
                        return (
                            <div className="video">
                                <img src={data.thumbnail} alt="" />
                                <div className="videoDetails">
                                    <h3>{data.title}</h3>
                                    <p>{data.channel}</p>
                                    <p>{data.views}</p>
                                    <a onClick={() => removeVideo(data.id, data.channel)}>Remove</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="shorts">
                <h2>Shorts</h2>
                <div className="shortData">
                    {
                        short.map((data) => {
                            return (
                                <div className="short">
                                    <img src={data.thumbnail} alt="" />
                                    <div className="shortDetails">
                                        <h3>{data.title}</h3>
                                        <p>{data.views}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Videos;
