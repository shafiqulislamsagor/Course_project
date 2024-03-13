import PropTypes from 'prop-types';

const Select = ({ product ,remove}) => {
    // console.log(remove)
    const { course_cover, course_name} = product;
    return (
        <div className='p-4 border rounded-2xl bg-slate-100 flex flex-col'>
            <div className='h-20'><img className='w-full max-h-full rounded-md' src={course_cover} alt="" /></div>
            <h3 className='flex-1 text-lg font-medium'>{course_name}</h3>
            <div>
            <button onClick={() => remove(product)} className='flex items-end btn bg-green-600 text-white hover:bg-green-800 h-auto min-h-max py-3'>Remove</button>
            </div>


        </div>
    );
};

Select.propTypes = {
    product: PropTypes.object.isRequired,
    remove: PropTypes.func.isRequired,
};

export default Select;