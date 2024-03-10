import React,{useState, useEffect} from 'react'
import "./learnGrow.scss"
import doc1 from "../../assets/doc1.svg"
import doc2 from "../../assets/doc2.svg"
import doc3 from "../../assets/doc3.svg"
import doc4 from "../../assets/doc4.svg"
import doc5 from "../../assets/doc5.svg"
import doc6 from "../../assets/doc6.svg"
import YoutubeEmbed from '../../components/youtubeEmbed/youtubeEmbed'
import axios from 'axios'

const learnGrow = () => {
  const youtubeId1 = 'vNyJuQuuMC8';
  const youtubeId2 = 'j7rKKpwdXNE';
  const youtubeId3 = 'AB3Y-4a3ZrU';
  const youtubeId4 = 'Yzm3fA2HhkQ';
  const youtubeId5 = '8T39OBNaNzU';
  const youtubeId6 = 'klmBssEYkdU';

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const response = await axios.get('https://web-production-e2fc.up.railway.app/learn/get-learn');
        setData(response.data.journals);
        console.log(response.data.journals);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData2();
  }, []);
  return (
    <div className='learnGrow'>
      <h1>Consult Psychiatrists</h1>
      <div className='doctors'>
        <div className='doctor'>
          <img src={doc1} alt="doc" />
          <p className='docname'>Dr. Lokeshi</p>
          <p className='apply'>Apply Now</p>
        </div>
        <div className='doctor'>
          <img src={doc2} alt="doc" />
          <p className='docname'>Dr. Sandeepa</p>
          <p className='apply'>Apply Now</p>
        </div>
        <div className='doctor'>
          <img src={doc3} alt="doc" />
          <p className='docname'>Dr. John</p>
          <p className='apply'>Apply Now</p>
        </div>
        <div className='doctor'>
          <img src={doc4} alt="doc" />
          <p className='docname'>Dr. Mahesh</p>
          <p className='apply'>Apply Now</p>
        </div>
        <div className='doctor'>
          <img src={doc5} alt="doc" />
          <p className='docname'>Dr. Rahul</p>
          <p className='apply'>Apply Now</p>
        </div>
        <div className='doctor'>
          <img src={doc6} alt="doc" />
          <p className='docname'>Dr. Max</p>
          <p className='apply'>Apply Now</p>
        </div>
      </div>
      <div className="header">
        <div className='head'>Learn more about</div>
        <div className='tail'>Mental Health</div>
      </div>
      <div className="videos">
        <div className='video'>
          <div className='player'>
            <YoutubeEmbed youtubeId={youtubeId1} />
          </div>
          <div className='tag'>
            Learn Sun Salutation Pose from
            Dr Lokeshi
          </div>
        </div>
        <div className='video'>
          <div className='player'>
            <YoutubeEmbed youtubeId={youtubeId5} />
          </div>
          <div className='tag'>
            Learn Sun Salutation Pose from
            Dr Lokeshi
          </div>
        </div>
        <div className='video'>
          <div className='player'>
            <YoutubeEmbed youtubeId={youtubeId3} />
          </div>
          <div className='tag'>
            Learn Sun Salutation Pose from
            Dr Lokeshi
          </div>
        </div>
        <div className='video'>
          <div className='player'>
            <YoutubeEmbed youtubeId={youtubeId4} />
          </div>
          <div className='tag'>
            Learn Sun Salutation Pose from
            Dr Lokeshi
          </div>
        </div>
        <div className='video'>
          <div className='player'>
            <YoutubeEmbed youtubeId={youtubeId2} />
          </div>
          <div className='tag'>
            Learn Sun Salutation Pose from
            Dr Lokeshi
          </div>
        </div>
        <div className='video'>
          <div className='player'>
            <YoutubeEmbed youtubeId={youtubeId6} />
          </div>
          <div className='tag'>
            Learn Sun Salutation Pose from
            Dr Lokeshi
          </div>
        </div>
      </div>
    </div>
  )
}

export default learnGrow