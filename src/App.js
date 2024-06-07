import React,{useState,useEffect} from 'react';
import './index.css';
import PostList from './components/Postlist.jsx';
import data from "./database.json";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LoadMoreButton from "./styled.jsx"

function App() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate,setEndDate]=useState(new Date());

    const [posts, setPosts] = useState([]);
    const [visiblePosts, setVisiblePosts] = useState(8);

    useEffect(() => {setPosts(data)}, []);

  const loadMorePosts = () => {
    setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 8);
  };

    return (
        <div className="container">
            
            <header className="header-container">
            <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="138" height="138" viewBox="0 0 138 138" fill="none">
  <path d="M56.5 7.21688C64.235 2.75106 73.765 2.75106 81.5 7.21688L116.256 27.2831C123.991 31.7489 128.756 40.0021 128.756 48.9338V89.0662C128.756 97.9979 123.991 106.251 116.256 110.717L81.5 130.783C73.765 135.249 64.235 135.249 56.5 130.783L21.7442 110.717C14.0092 106.251 9.24425 97.9979 9.24425 89.0662V48.9338C9.24425 40.0021 14.0092 31.7489 21.7442 27.2831L56.5 7.21688Z" fill="white"/>
  <path d="M128.756 88.5317V89.0662C128.756 97.9979 123.991 106.251 116.256 110.717L81.5 130.783C73.765 135.249 64.235 135.249 56.5 130.783L21.7442 110.717C21.1716 110.386 20.6152 110.035 20.0758 109.664L17.5 101L26 68L33.5 56L55.5 78.5L82.5 38.5L128.756 88.5317Z" fill="#066C61"/>
  <path d="M18.1726 108.216C14.6282 105.242 11.9954 101.354 10.5392 97.0092L10.5 96.5C11.6667 83.5 16.7 56.8 27.5 54C41.5 50.3704 48.5 96.5 48.5 96.5C48.5 96.5 54.7204 32.2561 74 33.5C89.5 34.5 95.5 66.5 91.5 125L91.4793 125.022L81.5 130.783C78.1083 132.741 74.3715 133.841 70.5923 134.082C77.5658 121.943 76.9064 74.0186 73.5 56.5C71.5082 62.0157 69.939 70.5009 68.2456 79.6574C64.4128 100.382 59.9439 124.546 48.5 125.5C48.0761 125.535 47.6559 125.513 47.2396 125.437L43.4536 123.251C36.248 116.272 30.6804 94.8558 28.5 83C28.103 93.7194 24.061 105.982 22.0451 110.891L21.7442 110.717C21.4834 110.566 21.2259 110.411 20.9718 110.252L18.1726 108.216Z" fill="#B3DBC9"/>
</svg>
            </div>
                <div className="profile-info">
                    <h1>monblanproject</h1>
                    <p>870 posts | 11,787 followers | 112 following</p>
                    <p>Start on 17/02/2016</p>

                    {/* className="datePicer" */}
                <p > Date
                <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    dateFormat="dd-MM-yyyy"
                />
                \n
                <DatePicker
                    selected={endDate}
                    onChange={date => setEndDate(date)}
                    dateFormat="dd-MM-yyyy"
                />
                </p>
                </div>

            </header>
            <main>
                
                <PostList posts={posts.slice(0, visiblePosts)} />
                    {visiblePosts < posts.length && (
                <LoadMoreButton onClick={loadMorePosts}>Load More</LoadMoreButton>)}
               
            </main>
        </div>
    );
}

export default App;
