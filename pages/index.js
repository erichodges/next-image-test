import Image from 'next/image';

export default function Home() {
  return (
    <div
      style={{
        position: 'relative',
        height: 0,
        zIndex: -1
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1
        }}
      >
        <Image
          src='https://res.cloudinary.com/dn3baky3u/image/upload/v1580246844/gatsby-cloudinary/evora-gt-side.jpg'
          alt='car'
          width='2400'
          height='1200'
          layout='responsive'
          priority='true'
        />
      </div>
    </div>
  );
}

// Old approach:
// import { Image } from 'cloudinary-react';

// export default function Home() {
//   return (
//     <div>
//       <div>
//         <h2>Responsive</h2>
//         <Image
//           cloudName='dn3baky3u'
//           publicId='v1576797449/gatsby-cloudinary/evora-gt-front'
//           width='auto'
//           alt='image'
//         />
//       </div>
//     </div>
//   );
// }
