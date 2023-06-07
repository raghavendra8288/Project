import { useState } from "react";
import "../styles/videos.css"

const Videos = () => {
    let [video, setVideo] = useState([
        {
            id: "1",
            thumbnail: "https://i.ytimg.com/vi/0n7AWxYCj9I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUChiH24-GK6MgafIoIeMz8AMZ1A",
            title: "Na Roja Nuvve | Kushi | Vijay Deverakonda | Samantha Ruth Prabhu | Hesham Abdul Wahab | Lyrical by Saregama Telugu 3 weeks ago 4 minutes, 14 seconds 27,012,120 views",
            channel: "Saregama Telugu",
            views: "27M views"
        },
        {
            id: "2",
            thumbnail: "https://i.ytimg.com/vi/t_aO4EMP-i0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcny5NT18OXd6UVO_y0j2_iGEVow",
            title: "Gundellonaa - Video Song | Ori Devuda | Vishwak Sen, Asha | Ashwath Marimuthu | Leon James | Anirudh by Saregama Telugu 6 months ago 4 minutes, 1 second 104,581,866 views",
            channel: "Saregama Telugu",
            views: "104M views"
        },
        {
            id: "3",
            thumbnail: "https://i.ytimg.com/vi/Hiiae2lRw9U/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC6NIzDz6UtgbGbbpeXVpchB8_U-A",
            title: "Jinthaak - Video Song | Dhamaka | Ravi Teja | Sreeleela | Bheems Ceciroleo | Thrinadha Rao Nakkina by Divo Music 3 months ago 3 minutes, 46 seconds 32,996,278 views",
            channel: "Divo Music",
            views: "32M views"
        },
        {
            id: "4",
            thumbnail: "https://i.ytimg.com/vi/M-954V9LORI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCC-ANRTQIxXTCzVZDzK1CO37lhmw",
            title: "#TilluAnnaDJPedithe Full Video Song |DJ Tillu Songs |Siddhu,Neha Shetty |Vimal Krishna |Ram Miriyala by Aditya Music India 1 year ago 3 minutes, 9 seconds 269,496,304 views",
            channel: "Aditya Music India",
            views: "269M views"
        },
        {
            id: "5",
            thumbnail: "https://i.ytimg.com/vi/Rb8GCqEv1qQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBYkBFFghNawQU9Q1lvEtPU0266Jw",
            title: "Kick Telugu Full Movie | Ravi Teja And Ileana Action Comedy Movie | Sayaji Shinde | Cinema Theatre by Cinema Theatre 11 months ago 2 hours, 18 minutes 4,859,519 views",
            channel: "Cinema Theatre",
            views: "4.8M views"
        },
        {
            id: "6",
            thumbnail: "https://i.ytimg.com/vi/B8HNY-wYnB0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5iohaUi7pZh9rMpjWKxRmlGhvHg",
            title: "Gemini Telugu Full Movie | Venkatesh | Namitha | Brahmanandam | Venu Madhav by Telugu Movie Center 3 years ago 2 hours, 5 minutes 798,110 views",
            channel: "Telugu Movie Center",
            views: "798K views"
        },
        {
            id: "7",
            thumbnail: "https://i.ytimg.com/vi/VcapbfyKUl4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLChHVApfLxBgDe5gikDEB2A4nP6rg",
            title: "Gopichand, Hansika, Catherine Tresa Telugu FULL HD Action Comedy Drama Movie | Jordaar Movies by Jordaar Movies 4 hours ago 2 hours, 11 minutes 5,528 views",
            channel: "Jordaar Movies",
            views: "5.5K views"
        },
        {
            id: "8",
            thumbnail: "https://i.ytimg.com/vi/WHzADi9lJ0o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjcDK08dUUQtw4G_0I4M_88bJl_Q",
            title: "MS Dhoni: Why The Brand Value Of The Ace Cricketer Continues To Increase",
            channel: "India Today",
            views: "3.3K views"
        },
        {
            id: "9",
            thumbnail: "https://i.ytimg.com/vi/6rG0iCU3Ols/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCiiMjYBdiCDQnkdSefQLkE99cPrg",
            title: "40/- Rs Street Food India | Veerji ki ChatGPT Biryani, Rajma Chawal, dugdug Kadhi Chawal by Harry Uppal 20 hours ago 9 minutes, 38 seconds 37,466 views",
            channel: "Harry Uppal",
            views: "37K views"
        },
        {
            id: "10",
            thumbnail: "https://i.ytimg.com/vi/wfuQn7vauYw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNyOxFpbiuH45lbU4FBYBd9qRnxA",
            title: "Andhra Vs Telangana Food | Ft. Sai Pallavi Senthamarai | Nikhil Vijayendra Simha by Nikhil Vijayendra Simha 10 months ago 25 minutes 1,746,125 views",
            channel: "Nikhil Vijayendra Simha",
            views: "1.7M views"
        },
        {
            id: "11",
            thumbnail: "https://i.ytimg.com/vi/aaaxAtVWHC4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGtsWpoReeaiVoER7AXXSsKj2ktw",
            title: "Bhojanalu Ekkada || Wirally Originals || Tamada Media",
            channel: "Wirally",
            views: "1M views"
        },
        {
            id: "12",
            thumbnail: "https://i.ytimg.com/vi/tXdU_uNYobY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmbRBpDCAHRUDvR3JqHes6ewHFQA",
            title: "Types of Delivery Boys || Bumchick Bunty || Tamada Media by Bumchick Bunty 9 days ago 12 minutes, 45 seconds 130,320 views",
            channel: "Bumchick Bunty",
            views: "130K views"
        }
    ])
    let [short, setShorts] = useState([
        {
            thumbnail: "https://i.ytimg.com/vi/TBgKq6V9Ri8/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAudAmiA5Wb6g2P0JPFGUmluhc7TA",
            title: "Wanna Be My Chammak Challo❤️‍🔥💃|@dhruvvikram6191 #poomadhiye #dancesteps #shortsviral #dhruvlove",
            views: "2.5M views"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/S4FL-VVVctE/hq720_2.jpg?sqp=-oaymwEdCOgCENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLBuc0E-H2Au6RXVQElK9bdhbPtk1A",
            title: "Sirivennela Song| #Fullscreen #WhatsAppStatus #Saipallavi #Nani",
            views: "12M views"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/HMdc4gyveUQ/hq720.jpg?sqp=-oaymwEdCMAEENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLAcsMeZr1FUR854xzdCjS1j1t74Vw",
            title: "Aishwarya Lekshmi Fight Scene | Gatta Kusthi | Don't Underestimate Girls Power",
            views: "4M views"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/39CME4f2OU0/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDA2XzoxzOr1005VPfUBpAjp0Ntow",
            title: "First Ride on a Royal Enfield Scram 411 #Shorts",
            views: "38K views"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/QN3-WFUVMZk/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLAfN0F8Vy1iiuVCnDI3ckmnQMT78g",
            title: "#HeyPillagaada Song #Fidaa Movie #Shorts",
            views: "1.9M views"
        },
        {
            thumbnail: "https://i.ytimg.com/vi/W9_8Ofh0R88/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDoncCXdE80F00iXzIhb2YIq2rCXg",
            title: "Rose Apple Milkshake #shorts",
            views: "5.6M views"
        }
    ])
    let removeVideo = (id, name) => {
        setVideo(
            video.filter((x) => x.id !== id)
        )
        alert(`${name} video got removed`)
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