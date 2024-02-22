import PropTypes from 'prop-types';
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
const Blog = ({blog,handelSetTitle}) => {
    const {title,image,description,price,credit_hour}=blog;
    return (
        <div className='bg-slate-200 rounded-lg p-4'>
            <div className='w-full my-4 '><img className='rounded-lg' src={image} alt="" /></div>
            <h2 className='text-xl font-bold'>{title}</h2> 
            <p className='my-4'>{description}</p>
            <div className='flex items-center justify-around'>
                <div className='text-xl'><MdOutlineAttachMoney /></div>
                <div className='px-2 text-xl'>Price : {price}</div>
                <div className='ml-2 text-xl'><IoBookOutline /></div>
                <div className='px-2 text-xl'>Credit : {credit_hour}hr</div>
            </div>
            <button onClick={()=>handelSetTitle(blog)} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-4 border border-blue-700 rounded">Select</button>
        </div>
    );
};
Blog.propTypes ={
    blog:PropTypes.object.isRequired,
    handelSetTitle:PropTypes.func
}
export default Blog;