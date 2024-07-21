import React,{useState,useEffect} from 'react'
import './Home.css'

import axios from 'axios';
import Pagination from '../../components/Pagination';
export default function Home() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/')
      .then(response => {
        console.log('API Response:', response.data);
        if (response.data.success) {
          setBook(response.data.users);
        } else {
          console.log('Error fetching data:', response.data.error);
        }
      })
      .catch(err => {
        console.log('Error fetching data:', err);
      });
  }, []);
  return (
    <div className='wholebody'>
     <div className="body1">
      <div>
      <center style={{ textAlign: 'justify', paddingLeft: '1rem', paddingRight: '1rem' }}>
        <div>
          <div className="froker-blog">
            <span>
              <span className="froker-blog-span">Froker</span>
              <span className="froker-blog-span2"></span>
              <span className="froker-blog-span3">Blog</span>
            </span>
          </div>
          <center>
            <div className="sub">
              "Articles covering the most recent "
              <br/>
              "updates and advancements"

            </div>
          </center>
        </div>
        <div className="blogs">
          <a href="" className="boox1">
            <div className="subbox">
            <img src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1707379910/Frokerassets/blog5creator_wpwvki.png" alt="pic of blogs" className="blogimg1" style={{ borderRadius: '20px' }}/>
            </div>
            <div className="autor">
              "by Varshita"
              "-"
              "9 Feb 2024"
            </div>
            <div className="ins">Title: Mastering the Art of Co...</div>
            <p className="inside">
              "Introduction: Welcome to the dynamic world of content creation, where creativity..."
            </p>
            <div className="bottom">Read More...</div>
          </a>
          <div className="sideblog">
            <a href="/blog/7" className="boox2">
            <div className="subbboox">
            <img src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709878252/cc5_cye3u1.png" alt="pic of blogs" className="blogimg2 "/>
            </div>
            <div className="side">
              <div className="autor">
                "by Varshita"
                "-"
                "3 March 2024"
              </div>
              <div className="ins">What Is Content Creation, Anyw...</div>
              <p className="inside">So, you've heard the buzz about content creation. ...</p>
              <div className="bottom">Read More...</div>
            </div>
            </a>
            <a href="/blog/6" className="boox2">
            <div className="subbboox">
            <img src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1709362347/f30i30_zzcco6.png" alt="pic of blogs" className="blogimg2 "/>
            </div>
            <div className="side">
              <div className="autor">
                "by Varshitha"
                "-"
                "3 March 2024"
              </div>
              <div className="ins">Forbes 30 Under 30 India: Cele...</div>
              <p className="inside">Unconventional Geniuses, Fearless Entrepreneurs, a...</p>
              <div className="bottom2">Read More...</div>
            </div>

            </a>
          </div>
        </div>
  
      </center>
      </div>
     </div>
     <div className="body2">
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div>
      <div style={{ textAlign: 'justify', paddingLeft: '1rem', paddingRight: '1rem' }}></div>
      <div className="headin">
        <span>Recent Post</span>
      </div>
      <div className="blogss">
        
        <Pagination/>
        
        
        
       
      </div>
      </div>
    
      </div>
      

     </div>
     <div>
      <center>
        <div className="parentletter">
          <div className="newsletter">
            <div className="letterimg">
              <img src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1706767740/Frokerassets/OBJECTS_lpey0b.png" alt="" className='pic'/>
            </div>
            <div className="lettersecond">
              <div className="subscribetonews">Subscribe to our newsletter to get the latest updates and news</div>
              <div className="subnews">
                <span>
                  <b>Subscribe</b>
                  <br />
                  "to our newsletter to get the latest"
                  <br />
                  " updates and news"
                </span>
              </div>
              <div>
                <form>
                  <div className="subscribebutton">
                    <div className="mail">
                      <input
                       type="email"
                       id="email"
                       name="Email_ID"
                       placeholder="Enter your email"
                       required
                       value=""
                       style={{
                       width: '100%',
                        height: '100%',
                        color: 'black',
                        border: '0px',
                       borderRadius: '20px',
                        outline: 'none',
                       padding: '0px 20px'
                       }}
                      />

                    </div>
                    <button className="subscribee" >
                      <div className="subscribe">Subscribe</div>

                    </button>
                  </div>
                </form>
              </div>
              {/* <div>
                <form>
                  <div className="maill"></div>
                </form>
              </div> */}

            </div>
          </div>
        </div>
      </center>
     </div>
    </div>
    
  )
}
