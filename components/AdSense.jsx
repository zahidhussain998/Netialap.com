// import React, { useEffect, useState } from 'react';

// const AdSense = ({ adClient, adSlot }) => {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//     if (window && !window.adsbygoogle) {
//       const script = document.createElement('script');
//       script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}`;
//       script.async = true;
//       script.crossOrigin = 'anonymous';
//       script.onload = () => {
//         (window.adsbygoogle = window.adsbygoogle || []).push({});
//       };
//       script.onerror = () => {
//         console.error('AdSense script failed to load');
//       };
//       document.body.appendChild(script);
//     } else if (window && window.adsbygoogle) {
//       (window.adsbygoogle = window.adsbygoogle || []).push({});
//     }
//   }, [adClient]);

//   if (!isClient) return null; // Don't render anything on the server

//   return (
//     <ins
//       className="adsbygoogle"
//       style={{ display: 'block' }}
//       data-ad-client={adClient}
//       data-ad-slot={adSlot}
//       data-ad-format="auto"
//       data-full-width-responsive="true"
//     />
//   );
// };

// export default AdSense;