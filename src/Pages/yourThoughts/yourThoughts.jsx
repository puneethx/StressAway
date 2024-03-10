import React, { useState, useEffect } from 'react';
import "./yourThoughts.scss"
import Yoga from "../../assets/yoga.svg"
import play from "../../assets/play.svg"
import Journal from '../../components/Journal/Journal';
import axios from 'axios';

const yourThoughts = () => {
    const [data, setData] = useState([]);
    const [melodies, setMelody] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://web-production-e2fc.up.railway.app/melodies/get-melodies', {
                    params: {
                        tag: 'Stress_Relief'
                    }
                });
                setMelody(response.data.melodies);
                console.log(response.data.journals)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData2 = async () => {
            try {
                const response = await axios.get('https://web-production-e2fc.up.railway.app/journal/get-journal');
                setData(response.data.journals);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData2();
    }, []);
      

    const yoga = [
        {
            id: 1,
            title: "Sun Salutation Pose"
        },
        {
            id: 2,
            title: "Sitting Pose"
        },
        {
            id: 3,
            title: "Happy Baby Pose"
        }
    ]

    

    const melody = [
        {
            id: 1,
            title: "Scared to Live By Weekend"
        },
        {
            id: 2,
            title: "Save Your Tears By Weekend"
        },
        {
            id: 3,
            title: "Sidewalks By Weekend"
        },
        {
            id: 4,
            title: "Belong to the world By weekend"
        },
        {
            id: 5,
            title: "After Hours By weekend"
        },
        {
            id: 6,
            title: "Scared to Live By Weekend"
        },
    ]

    const [open, setOpen] = useState(null);
    return (
        <div className='thoughts'>
            <button className='today' onClick={() => setOpen(!open)}>Journal Today's Thoughts</button>
            {open && <Journal />}
            <div className='mats'>
                {data.map((item) =>
                    <div className="mat">
                        <p className='title'>{item.title}</p>
                        <p className='content'>{item.body.length > 150 ? `${item.body.substring(0, 120)}...` : item.content}</p>
                        <p className='time'>{item.date}</p>
                        <p className='time'>{item.time}</p>
                    </div>
                )}
            </div>
            <button className='seemore'>See more</button>
            <h1>Yoga</h1>
            <div className='poses'>
                {yoga.map((item) =>
                    <div className="pose">
                        <img src={Yoga} alt="" />
                        <div className="posebottom">
                            <div className='title'>{item.title}</div>
                            <div className='learnnow'>Learn now</div>
                        </div>
                    </div>
                )}
            </div>
            <h1 className='melody'>Melodies</h1>
            <div className='medies'>
                {melody.map((item) =>
                    <div className="medy">
                        <div className='title'>{item.title}</div>
                        <div className='play'>
                            <div>Play</div>
                            <div><img src={play} alt="" /></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default yourThoughts