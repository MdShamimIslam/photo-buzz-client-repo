import { useEffect } from 'react';

const UseTitle = (title) => {
   useEffect(() => {
    document.title = `${title } - PhotoBuzz`;
   }, [title])
};

export default UseTitle;





 