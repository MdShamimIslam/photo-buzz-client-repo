import React from 'react';

const Gallary = () => {
    const GallaryPhoto = [
      {
        image: "https://i.ibb.co/f0Hg8pw/greenhat-photography-savethedate-3.jpg",
 
    },
    {
        image: "https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg",
 
    },
    {
        image: "https://imgv3.fotor.com/images/blog-richtext-image/Birthday-cake-with-candles.jpg",
 
    },
    {
        image: "https://i.ibb.co/SQ5C6B6/1543483387-reinhart-julian-1145947-unsplash.jpg",
 
    },
    {
        image :  "https://raw.githubusercontent.com/rubelrana123/phographer/main/meatloaf-3747129_960_720.jpg",
    },
    {
        image :  "https://i.ibb.co/rc7bwcY/images.jpg",
    }
  
  
]
  return (
    <div className='bg-gray-800 py-5'>
      		<div className="max-w-2xl mx-auto mb-16 text-center">
			<h2 className="text-4xl font-bold text-white lg:text-5xl">Gallery</h2>
			 
		</div>
       <div className="container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 mx-auto">

        {
          GallaryPhoto.map(photo => {
            return (
                        <div className="w-full rounded">
        <img src= {photo.image}
           className="inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100" 
            alt="gallary"/>
         </div>

            )


          })
        }


</div>
    </div>
  );
};

export default Gallary;