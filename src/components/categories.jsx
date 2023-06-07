import '../styles/categories.css'

const Categories = () => {
    let categories = [
        { link: "All" },
        { link: "Sports" },
        { link: "Comedy" },
        { link: "Fashion" },
        { link: "Vlogs" },
        { link: "Movies" },
        { link: "Travel" },
        { link: "Food" },
        { link: "Bollywood" },
        { link: "Kids" },
        { link: "Recently uploaded" }
    ]
    return (
        <div className="categories">
            {/* <ul>
                <li><a href="">All</a></li>
                <li><a href="">Sports</a></li>
                <li><a href="">Comedy</a></li>
                <li><a href="">Travel</a></li>
                <li><a href="">Music</a></li>
                <li><a href="">Kids</a></li>
                <li><a href="">Gaming</a></li>
                <li><a href="">Movies</a></li>
                <li><a href="">Bollywood</a></li>
                <li><a href="">Recently uploaded</a></li>
            </ul> */}
            <ul>
                {categories.map((data) => {
                    return (
                        <li><a href="">{data.link}</a></li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Categories;