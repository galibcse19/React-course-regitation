import PropTypes from 'prop-types';
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handelSetTitle}) => {
    const [blogs,setBlogs]=useState([]);
    useState(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data));
    },[])
    return (
        <div className="lg:w-2/3 grid lg:grid-cols-3 gap-8 ">
             {
                blogs.map(blog=><Blog handelSetTitle={handelSetTitle} key={blog.id} blog={blog}></Blog>)
             }
        </div>
    );
};
Blogs.propTypes ={
    blog:PropTypes.object.isRequired,
    handelSetTitle:PropTypes.func
}
export default Blogs;