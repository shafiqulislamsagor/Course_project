import PropTypes from 'prop-types';

const Card = ({ card, click }) => {
    const { course_cover, course_name, course_description, course_price, course_duration, instructor } = card;
    // console.log(click)
    return (
        <div className='p-4 border rounded-2xl bg-slate-100 space-y-3 flex flex-col'>
            <div className='h-36'><img className='w-full max-h-full rounded-md' src={course_cover} alt="" /></div>
            <h3  className='text-xl font-medium'>{course_name}</h3>
            <p className='flex-1 text-sm font-medium text-gray-500'>{course_description}</p>
            <div className='flex justify-between items-center'>
                    <div className='flex flex-col items-center'>
                        <h6 className='text-lg'>Instructor</h6>
                        <p className='font-bold'>({instructor})</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='font-semibold text-gray-600'>Time: {course_duration}</p>
                        <button onClick={() => click(card)} className='btn bg-green-600 text-white hover:bg-green-800 h-auto min-h-max py-3'>{course_price} TK</button>
                    </div>
                </div>


        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
    click: PropTypes.func.isRequired,
};

export default Card;