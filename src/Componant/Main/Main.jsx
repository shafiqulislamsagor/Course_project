import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Main = ({click}) => {
    const [cards, setCards] = useState([]);
    // console.log(click);

    useEffect(() => {
        const data = async () => {
            const fec = await fetch('data.json');
            const res = await fec.json();
            const data = res;
            setCards(data)
        };
        data()
    }, [])
    return (
        <div className='lg:mt-9'>
            <h2 className='text-center text-3xl font-bold text-slate-600 mb-5'>Our Course</h2>
            <div className='grid lg:grid-cols-3 lg:px-10 gap-5'>
                {
                    cards.map(card => <Card key={card.id} card={card} click={click}></Card>)
                }
            </div>
        </div>
    );
};

Main.propTypes = {
    click: PropTypes.func.isRequired,
};

export default Main;