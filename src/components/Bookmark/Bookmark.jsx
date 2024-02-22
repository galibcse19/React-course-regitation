import PropTypes from 'prop-types';
// ({value,bookmark}) 
const Bookmark = ({value}) => {
    const uniqueData = [...new Set(value)];
    return (
        <div>
            {/* <p className='p-1 ml-4'>{bookmark.title}</p> */}
            <ol>
                {
                    uniqueData.map((item,index)=>(
                        <li className='py-2' key={index}>{`${index+1} ${item.title}`}</li>
                    ))
                }
            </ol>
        </div>
    );
};
Bookmark.propTypes ={
    bookmark:PropTypes.object.isRequired,
    index:PropTypes.number,
    value:PropTypes.object,
}
export default Bookmark;