// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './pagination.css'; // Assuming you have an App.css file for the CSS

// export default function Pagination() {
//   const [book, setBook] = useState([]);
//   const [currentPage,setcurrentPage]=useState(1)
//   const[postsperPage,setpostsperpage]=useState(6)

//   useEffect(() => {
//     axios.get('http://localhost:4000/')
//       .then(response => {
//         console.log('API Response:', response.data);
//         if (response.data.success) {
//           setBook(response.data.users);
//         } else {
//           console.log('Error fetching data:', response.data.error);
//         }
//       })
//       .catch(err => {
//         console.log('Error fetching data:', err);
//       });
//   }, []);
//   const lastPostIndex=currentPage * postsperPage;
//   const fristpostindex=lastPostIndex - postsperPage
//   const currentpost = coinsData.slice(fristpostindex,lastPostIndex)

//   return (
//     <div>
//       {/* <h1>Recent Post</h1> */}
//       {book.length > 0 ? (
//         <div className='flex-container'>
//           {book.map(record => (
//             <div key={record._id} className='flex-item'>
//               <a href="/blog/18" className="box px-2 py-2">
//                 <div className="image-container">
//                   <div className="image-wrapper">
//                     <img src={record.titleImg} alt="pic of blogs" className="blog-image" />
//                   </div>
//                 </div>
//                 <div className="author">
//                   {record.author}
//                 </div>
//                 <div className="title">{record.title}</div>
//                 <p className='description'>{record.description}</p>
//                 <div className="bottom">Read More...</div>
//               </a>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>nothing found</p>
//       )}
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './pagination.css'; // Assuming you have an App.css file for the CSS
import Like from './Like';

export default function Pagination() {
  const [book, setBook] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);

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

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = book.slice(firstPostIndex, lastPostIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(book.length / postsPerPage);

  return (
    <div>
      {book.length > 0 ? (
        <div className='flex-container'>
          {currentPosts.map(record => (
            <div key={record._id} className='flex-item'>
              <a  className="box px-2 py-2">
                <div className="image-container">
                  <div className="image-wrapper">
                    <img src={record.titleImg} alt="pic of blogs" className="blog-image" />
                    
                  </div>
                </div>
                <div className="author">
                  {record.author}
                </div>
                <div className="title">{record.title}</div>
                <p className='description'>{record.description}</p>
                <div className="bottom">Read More...</div>
                
              </a>
              <Like/>
            </div>
            
          ))}
          
        </div>
      ) : (
        <p>nothing found</p>
      )}

      
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
