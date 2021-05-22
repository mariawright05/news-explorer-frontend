import React from 'react';
import './NothingFound.css';

const NothingFound = () => {
  console.log('in nothing found');
  return (
    <div className="nothingFound">
      <i className="nothingFound__circle" />
      <p className="nothingFound__title">Nothing found</p>
      <p className="nothingFound__text">Sorry, but nothing matched your search terms.</p>
    </div>
  );
};

export default NothingFound;

// import React, { useContext } from 'react';
// import NewsContext from '../../context/news/newsContext';
// import './Preloader.css';

// const Preloader = () => {
//   const newsContext = useContext(NewsContext);
//   const { cards, searchError } = newsContext;

//   return (
//     <section className="preloader">
//       {cards.length === 0
//         ? (
//           <>
//             <i className="preloader__nothingFound" />
//             <h3 className="preloader__title">
//               {searchError ? 'Server Error' : 'Nothing found'}
//             </h3>
//             <p className="preloader__text">
//               {searchError
//                 ? 'Sorry, something went wrong during the request.'
//                 : 'Sorry, but nothing matched your search terms.'}
//             </p>
//           </>
//         )
//         : (
//           <>
//             {console.log('in the preloader')}
//             <i className="preloader__circle" />
//             <p className="preloader__text">Searching for news...</p>
//           </>
//         )}
//     </section>
//   );
// };

// export default Preloader;
