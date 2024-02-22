import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({value,creditHour,price,remaining}) => {
     
    return (
        <div className="lg:w-1/3 ml-4  rounded-lg p-4">
             
            <p className='p-4 font-bold text-blue-700'>Credit Hour Remaining {remaining} hr</p>
            <hr />
            <h2 className='text-2xl p-4 font-bold'>Course Name</h2>
            {/* {
                value.map(bookmark=><Bookmark key={value.id} bookmark={bookmark}></Bookmark>)
            } */}
           
            <div className='p-4'> <Bookmark value={value}></Bookmark></div>
            <p className='mb-6'></p>
            <hr />
            <p className='p-4 font-bold'>Total Credit Hour : {creditHour}</p>
            <hr />
            <p className='p-4 font-bold'>Total Price: {price} USD</p>
        </div>
    );
};
Bookmarks.propTypes ={
    value:PropTypes.object.isRequired,
    creditHour:PropTypes.number,
    price:PropTypes.number,
    remaining:PropTypes.number,
}
export default Bookmarks;