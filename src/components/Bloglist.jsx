import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BlogList.css";

const BlogList = () => {
  const navigate = useNavigate();
  const isLoggedIn = false; 

  const handleCommentClick = () => {
    if (!isLoggedIn) {
      alert("You must log in to comment!");
      navigate("/guest"); 
    }
  };


  const blogs = [
    {
      id: 1,
      title: "The Art of Waking Up Early",
      author: "Emily Carter ",
      description: "Waking up early is more than just a habit—it's a lifestyle that transforms your day. Learn how to develop this habit, the benefits it brings, and how it can boost productivity and mental well-being.",
    },
    {
      id: 2,
      title: "How to Stay Organized in a Busy Life",
      author: "Daniel Roberts",
      description: "Managing daily tasks can feel overwhelming, but with the right organization techniques, life becomes smoother. This blog shares simple ways to plan your day, declutter your space, and maintain a stress-free routine.",
    },
    {
      id: 3,
      title: "Balancing Work and Personal Life in a Digital World",
      author: "James Reynolds",
      description: "With remote work and constant connectivity, maintaining a work-life balance is harder than ever. Learn how to set boundaries and prioritize personal time without compromising professional growth.",
    },
    {
      id: 4,
      title: "The Magic of Cooking at Home",
      author: "Olivia Williams",
      description: " Cooking at home not only saves money but also improves health and strengthens family bonds. Explore easy recipes and tips to make home-cooked meals a fun and rewarding experience.",
    },
    {
      id: 5,
      title: " Overcoming Procrastination",
      author: "Mark Thompson",
      description: "Procrastination is a common struggle, but with the right approach, you can beat it. This blog provides practical strategies to stay motivated and get things done on time.",
    },
    {
      id: 6,
      title: "Social Media and Mental Health",
      author: "David Collins",
      description: " While social media connects us, excessive use can be harmful. This blog discusses the impact of social media on mental health and provides tips to use it mindfully.",
    },
    {
      id: 7,
      title: "Practice Gratitude Every Day",
      author: "Emma Johnson",
      description: "Gratitude improves happiness and reduces stress. Discover small yet meaningful ways to practice gratitude daily and see a positive shift in your mindset.",
    },
    {
      id: 8,
      title: "The Joy of Traveling",
      author: "Sophia Anderson",
      description: "Traveling is more than just a hobby—it’s an opportunity to learn, grow, and experience different cultures. Discover the benefits of traveling and how it enriches your life in unexpected ways.",
    },
    {
      id: 9,
      title: "How Networking Can Boost Your Career and Business",
      author: "Ryan Carter",
      description: "In today's world, networking is a key ingredient for success. Learn how to build meaningful professional connections, expand your opportunities, and grow your business through effective networking strategies.",
    },
    {
      id: 10,
      title: " Entrepreneurship ",
      author: "Jessica Collins",
      description: " Many dream of starting their own business, but where do you begin? This blog covers the essentials of entrepreneurship, from idea generation to execution, to help you turn your passion into a thriving business.",
    },
   
  ];

  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="blog-container">
      <h1 className="bloglisttext">&#x1F380;All Blogs&#x1F380;</h1>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <h3>{blog.title}</h3>
            <p>{expandedId === blog.id ? blog.description : blog.author}</p>
            <button onClick={() => setExpandedId(expandedId === blog.id ? null : blog.id)}>
              {expandedId === blog.id ? "Wrap" : "Read More"}
            </button>
            <button className="comment-btn" onClick={handleCommentClick}>Add Comment</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
