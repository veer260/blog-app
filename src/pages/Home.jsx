import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import BlogSlide from "../components/BlogSlide";

const Home = () => {
  const [posts, setPosts] = useState([]);
  // const [rev, setRev] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("cat");
  // console.log("ans: ", ans);
  // console.log("query:", query);
  let revClass;

  useEffect(() => {
    const fetchPosts = () => {
      const url = query
        ? `http://localhost:3006/api/posts?cat=${query}`
        : "http://localhost:3006/api/posts";
      axios.get(url).then((response) => {
        console.log("posts:", response);
        setPosts(response.data.data);
      });
      // console.log("posts:", posts.data.data);
      // setPosts(response.data.data);
    };
    fetchPosts();
  }, [query]);

  // const posts = [
  //   {
  //     id: 1,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 2,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 3,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 4,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  // ];
  return (
    <div>
      <div className="max-w-5xl mx-auto 0">
        {posts.map((item) => {
          revClass =
            revClass == "flex-row-reverse" ? "flex-row" : "flex-row-reverse";
          return (
            <BlogSlide
              item={item}
              revClass={revClass}
              key={item.id}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
