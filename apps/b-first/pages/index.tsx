import BackToTop from "../components/BackToTop/BackToTop";
import BlockNews from "../components/BlockNews/BlockNews";
import BlockNews2 from "../components/BlockNews2/BlockNews2";
import BlockNews3 from "../components/BlockNews3/BlockNews3";
import FeaturedItems from "../components/FeaturedItems/FeaturedItems";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import Slider from "../components/Slider/Slider";

// export const maxText = (text: string, length = 10) => {
//   if (text.length > length) {
//     return `${text.substr(0, length)}...`;
//   }
//   return text;
// };

//     export function SquareGrid({ items, gridClass }: { items: any[]; gridClass: string}) {

//   return (
//     <div className="flex flex-row flex-wrap -mx-3">
//       {items.map((item, idx) => {
//         return (
//           <div className={`flex-shrink max-w-full w-full ${gridClass} px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100`}>
//             <div className="flex flex-row sm:block hover-img">
//               <div className="w-[100%] hidden md:block">
//                 <a href={newsUrl(item)}>
//                   <img className="object-fill" src={getImageUrl(item.featured_image)} alt={item.title} />
//                 </a>
//               </div>

//               <div className="w-[40%] md:hidden">
//                 <a href={newsUrl(item)}>
//                   <img className="object-fill" src={getImageUrl(item.featured_image)} alt={item.title} />
//                 </a>
//               </div>

//               <div className="py-0 sm:py-3 pl-3 sm:pl-0 flex-1">
//                 <h3 className="text-lg font-bold leading-tight mb-2">
//                   <a href={newsUrl(item)}>{maxText(item.title, 50)}</a>
//                 </h3>
//                 <a href={newsUrl(item)} className="hidden md:block text-gray-600 leading-tight mb-1">
//                   {maxText(item.brief, 90)}
//                 </a>
//                 <a className="text-gray-500" href={newsUrl(item)}>
//                   <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
//                   {item.category?.name}
//                 </a>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export function BlockNews({ items, title, showAd = true }: { items: any[]; title: string; showAd?: boolean }) {
//   const className = 'sm:w-1/3';
//   return (
//     <>
//       <div className="bg-white">
//         <div className="md-container xl:container mx-auto px-3 sm:px-4 xl:px-2">
//           <div className="flex flex-row flex-wrap">
//             {/* Left */}
//             <div className={`flex-shrink max-w-full w-full ${showAd ? "lg:w-2/3" : ""} overflow-hidden`}>
//               {title && (
//                 <div className="w-full py-3">
//                   <h2 className="text-gray-800 text-2xl font-bold">
//                     <span className="inline-block h-5 border-l-3 border-red-600 mr-2" />
//                     {title}
//                   </h2>
//                 </div>
//               )}
//               <SquareGrid items={items} gridClass={className} />
//             </div>
//             {/* right */}
//             {showAd && (
//               <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pb-8 order-first lg:order-last">
//                 <div className="w-full bg-gray-50 h-full">
//                   <div className="text-sm py-6 sticky">
//                     <div className="w-full text-center">
//                       <a className="uppercase" href="#">
//                         Advertisement
//                       </a>
//                       <a href="#">
//                         <img className="mx-auto" src="/img/ads/250.jpg" alt="advertisement area" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export function FeaturedItems({ items }: { items: any[] }) {
//   if (!items.length) {
//     return <></>;
//   }
//   return (
//     <>
//       {/* hero big grid */}
//       <div className="bg-white py-6">
//         <div className="md-container xl:container mx-auto px-3 sm:px-4 xl:px-2">
//           {/* big grid 1 */}
//           <div className="flex flex-row flex-wrap">
//             {/*Start left cover*/}
//             <div className="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
//               <div className="relative overflow-hidden ">
//                 <a href={newsUrl(items[0])} className="filter brightness-50 hover:grayscale contrast-100">
//                   <img
//                     className="max-w-full w-full mx-auto h-auto"
//                     src={getImageUrl(items[0].featured_image)}
//                     alt="Image description"
//                   />
//                 </a>
//                 <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
//                   <a href={newsUrl(items[0])}>
//                     <h2 className="text-3xl font-bold text-white">{items[0].title}</h2>
//                   </a>
//                   <p className="text-gray-100 hidden sm:inline-block">{items[0].brief}</p>
//                   <div className="pt-2">
//                     <div className="text-gray-100">
//                       <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
//                       {items[0].category?.name}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/*Start box news*/}
//             <div className="flex-shrink max-w-full w-full lg:w-1/2">
//               <div className="box-one flex flex-row flex-wrap">
//                 <article className="flex-shrink max-w-full w-full sm:w-1/2">
//                   <div className="relative hover-img">
//                     <a href={newsUrl(items[1])}>
//                       <div className="filter brightness-50 hover:grayscale contrast-100">
//                         <img
//                           className="max-w-full w-full mx-auto h-auto"
//                           src={getImageUrl(items[1].featured_image)}
//                           alt="Image description"
//                         />
//                       </div>
//                     </a>
//                     <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
//                       <a href={newsUrl(items[1])}>
//                         <h2 className="text-lg font-bold leading-tight text-white mb-1">{items[1].title}</h2>
//                       </a>
//                       <div className="pt-1">
//                         <div className="text-gray-100">
//                           <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
//                           {items[1].category?.name}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//                 <article className="flex-shrink max-w-full w-full sm:w-1/2">
//                   <div className="relative hover-img">
//                     <a href="#">
//                       <div className="filter brightness-50 hover:grayscale contrast-100">
//                         <img
//                           className="max-w-full w-full mx-auto h-auto"
//                           src={getImageUrl(items[2].featured_image)}
//                           alt="Image description"
//                         />
//                       </div>
//                     </a>
//                     <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
//                       <a href={newsUrl(items[2])}>
//                         <h2 className="text-lg font-bold leading-tight text-white mb-1">{items[2].title}</h2>
//                       </a>
//                       <div className="pt-1">
//                         <div className="text-gray-100">
//                           <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
//                           {items[2].category?.name}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//                 <article className="flex-shrink max-w-full w-full sm:w-1/2">
//                   <div className="relative hover-img">
//                     <a href={newsUrl(items[3])}>
//                       <div className="filter brightness-50 hover:grayscale contrast-100">
//                         <img
//                           className="max-w-full w-full mx-auto h-auto"
//                           src={getImageUrl(items[3].featured_image)}
//                           alt="Image description"
//                         />
//                       </div>
//                     </a>
//                     <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
//                       <a href={newsUrl(items[3])}>
//                         <h2 className="text-lg font-bold leading-tight text-white mb-1">{items[3].title}</h2>
//                       </a>
//                       <div className="pt-1">
//                         <div className="text-gray-100">
//                           <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
//                           {items[3].category?.name}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//                 <article className="flex-shrink max-w-full w-full sm:w-1/2">
//                   <div className="relative hover-img">
//                     <a href={newsUrl(items[4])}>
//                       <div className="filter brightness-50 hover:grayscale contrast-100">
//                         <img
//                           className="max-w-full w-full mx-auto h-auto"
//                           src={getImageUrl(items[4].featured_image)}
//                           alt="Image description"
//                         />
//                       </div>
//                     </a>
//                     <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
//                       <a href={newsUrl(items[4])}>
//                         <h2 className="text-lg font-bold leading-tight text-white mb-1">{items[4].title}</h2>
//                       </a>
//                       <div className="pt-1">
//                         <div className="text-gray-100">
//                           <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
//                           {items[4].category?.name}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export function BlockNews2({ items, latest, title }: { items: any[]; title: string; latest: any[] }) {
//   if (!items.length) {
//     return <></>;
//   }

//   const className = 'sm:w-1/3';
//   return (
//     <div className="bg-gray-50 py-6">
//       <div className="md-container xl:container mx-auto px-3 sm:px-4 xl:px-2">
//         <div className="flex flex-row flex-wrap">
//           {/* Left */}
//           <div className="flex-shrink max-w-full w-full lg:w-2/3  overflow-hidden">
//             <div className="w-full py-3">
//               <h2 className="text-gray-800 text-2xl font-bold">
//                 <span className="inline-block h-5 border-l-3 border-red-600 mr-2" />
//                 {title}
//               </h2>
//             </div>
//             <SquareGrid items={items} gridClass={className} />
//           </div>
//           {/* right */}
//           <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
//             <div className="w-full bg-white">
//               <div className="mb-6">
//                 <div className="p-4 bg-gray-100">
//                   <h2 className="text-lg font-bold">Latest</h2>
//                 </div>
//                 <ul className="post-number">
//                   {latest.map((item) => {
//                     return (
//                       <li className="border-b border-gray-100 hover:bg-gray-50">
//                         <a className="text-lg font-bold px-6 py-3 flex flex-row items-center" href={newsUrl(item)}>
//                           {item.title}
//                         </a>
//                       </li>
//                     );
//                   })}
//                 </ul>
//               </div>
//             </div>
//             <div className="text-sm py-6 sticky">
//               <div className="w-full text-center">
//                 <a className="uppercase" href="#">
//                   Advertisement
//                 </a>
//                 <a href="#">
//                   <img className="mx-auto" src="/img/ads/250.jpg" alt="advertisement area" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function BlockNews3({ items, title }: { items: any[]; title: string }) {
//   if (!items?.length) {
//     return <></>;
//   }

//   const className = 'sm:w-1/3';
//   return (
//     <>
//       {/* block news */}
//       <div className="bg-gray-50 py-6">
//         <div className="md-container xl:container mx-auto px-3 sm:px-4 xl:px-2">
//           <div className="flex flex-row flex-wrap">
//             {/* post */}
//             <div className="flex-shrink max-w-full w-full lg:w-2/3 ">
//               <div className="w-full py-3">
//                 <h2 className="text-gray-800 text-2xl font-bold">
//                   <span className="inline-block h-5 border-l-3 border-red-600 mr-2" />
//                   {title}
//                 </h2>
//               </div>
//               <div className="flex flex-row flex-wrap -mx-3">
//                 <div className="flex-shrink max-w-full w-full px-3 pb-5">
//                   <div className="relative hover-img max-h-98 overflow-hidden">
//                     {/*thumbnail*/}
//                     <a href="#">
//                       <img
//                         className="max-w-full w-full mx-auto h-auto"
//                         src={getImageUrl(items[0].featured_image)}
//                         alt={items[0].title}
//                       />
//                     </a>
//                     <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
//                       {/*title*/}
//                       <a href="#">
//                         <h2 className="text-3xl font-bold capitalize text-white mb-3">{items[0].title}</h2>
//                       </a>
//                       <p className="text-gray-100 hidden sm:inline-block">{items[0].brief}</p>
//                       {/* author and date */}
//                       <div className="pt-2">
//                         <div className="text-gray-100">
//                           <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
//                           {items[0].category?.name}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="pl-3">
//                   <SquareGrid items={items.slice(1, 7)} gridClass={className} />
//                 </div>
//               </div>
//             </div>
//             {/* sidebar */}
//             <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pr-8 lg:pt-14 lg:pb-8 order-first">
//               <div className="w-full bg-white">
//                 <div className="mb-6">
//                   <div className="p-4 bg-gray-100">
//                     <h2 className="text-lg font-bold">Most Popular</h2>
//                   </div>
//                   <ul className="post-number">
//                     <li className="border-b border-gray-100 hover:bg-gray-50">
//                       <a className="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">
//                         Why the world would end without political polls
//                       </a>
//                     </li>
//                     <li className="border-b border-gray-100 hover:bg-gray-50">
//                       <a className="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">
//                         Meet The Man Who Designed The Ducati Monster
//                       </a>
//                     </li>
//                     <li className="border-b border-gray-100 hover:bg-gray-50">
//                       <a className="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">
//                         2020 Audi R8 Spyder spy shots release
//                       </a>
//                     </li>
//                     <li className="border-b border-gray-100 hover:bg-gray-50">
//                       <a className="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">
//                         Lamborghini makes Huracán GT3 racer faster for 2019
//                       </a>
//                     </li>
//                     <li className="border-b border-gray-100 hover:bg-gray-50">
//                       <a className="text-lg font-bold px-6 py-3 flex flex-row items-center" href="#">
//                         ZF plans $14 billion autonomous vehicle push, concept van
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="text-sm py-6 sticky">
//                 <div className="w-full text-center">
//                   <a className="uppercase" href="#">
//                     Advertisement
//                   </a>
//                   <a href="#">
//                     <img className="mx-auto" src="/img/ads/250.jpg" alt="advertisement area" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export function BackToTop() {
//   return (
//     <a
//       href="#"
//       className="back-top fixed p-4 rounded bg-gray-100 border border-gray-100 text-gray-500 dark:bg-gray-900 dark:border-gray-800 right-4 bottom-4 hidden"
//       aria-label="Scroll To Top"
//     >
//       <svg width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//         <path fillRule="evenodd" d="M8 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z" clipRule="evenodd" />
//         <path
//           fillRule="evenodd"
//           d="M7.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 3.707 5.354 6.354a.5.5 0 11-.708-.708l3-3z"
//           clipRule="evenodd"
//         />
//       </svg>
//     </a>
//   );
// }

// export function Footer() {
//   return (
//     <>
//       {/* =========={ FOOTER }==========  */}
//       <footer className="bg-black text-gray-400">
//         {/*Footer content*/}
//         <div id="footer-content" className="relative pt-8 xl:pt-16 pb-6 xl:pb-12">
//           <div className="md-container xl:container mx-auto px-3 sm:px-4 xl:px-2 overflow-hidden">
//             <div className="flex flex-wrap flex-row lg:justify-between -mx-3">
//               <div className="flex-shrink max-w-full w-full lg:w-2/5 px-3 lg:pr-16">
//                 <div className="flex items-center mb-2">
//                   <span className="text-3xl bg-white leading-normal mb-2 font-bold text-gray-100 mt-2">
//                     <img src="/img/logo.svg" alt="LOGO" />
//                   </span>
//                   {/* <img src="src/img-min/logo.png" alt="LOGO"> */}
//                 </div>
//                 <p>A newspaper that publishes news with authenticity and without fear.</p>
//                 <ul className="space-x-3 mt-6 mb-6 Lg:mb-0">
//                   {/*facebook*/}
//                   <li className="inline-block">
//                     <a
//                       target="_blank"
//                       className="hover:text-gray-100"
//                       rel="noopener noreferrer"
//                       href="https://facebook.com"
//                       title="Facebook"
//                     >
//                       {/* <i class="fab fa-facebook fa-2x"></i> */}
//                       <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 512 512">
//                         <path
//                           fill="currentColor"
//                           d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"
//                         />
//                       </svg>
//                     </a>
//                   </li>
//                   {/*twitter*/}
//                   <li className="inline-block">
//                     <a
//                       target="_blank"
//                       className="hover:text-gray-100"
//                       rel="noopener noreferrer"
//                       href="https://twitter.com"
//                       title="Twitter"
//                     >
//                       {/* <i class="fab fa-twitter fa-2x"></i> */}
//                       <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 512 512">
//                         <path
//                           fill="currentColor"
//                           d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"
//                         />
//                       </svg>
//                     </a>
//                   </li>
//                   {/*youtube*/}
//                   <li className="inline-block">
//                     <a
//                       target="_blank"
//                       className="hover:text-gray-100"
//                       rel="noopener noreferrer"
//                       href="https://youtube.com"
//                       title="Youtube"
//                     >
//                       {/* <i class="fab fa-youtube fa-2x"></i> */}
//                       <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 512 512">
//                         <path
//                           fill="currentColor"
//                           d="M508.64,148.79c0-45-33.1-81.2-74-81.2C379.24,65,322.74,64,265,64H247c-57.6,0-114.2,1-169.6,3.6-40.8,0-73.9,36.4-73.9,81.4C1,184.59-.06,220.19,0,255.79q-.15,53.4,3.4,106.9c0,45,33.1,81.5,73.9,81.5,58.2,2.7,117.9,3.9,178.6,3.8q91.2.3,178.6-3.8c40.9,0,74-36.5,74-81.5,2.4-35.7,3.5-71.3,3.4-107Q512.24,202.29,508.64,148.79ZM207,353.89V157.39l145,98.2Z"
//                         />
//                       </svg>
//                     </a>
//                   </li>
//                   {/*instagram*/}
//                   <li className="inline-block">
//                     <a
//                       target="_blank"
//                       className="hover:text-gray-100"
//                       rel="noopener noreferrer"
//                       href="https://instagram.com"
//                       title="Instagram"
//                     >
//                       {/* <i class="fab fa-instagram fa-2x"></i> */}
//                       <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 512 512">
//                         <path
//                           fill="currentColor"
//                           d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"
//                         />
//                         <path
//                           fill="currentColor"
//                           d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"
//                         />
//                         <path
//                           fill="currentColor"
//                           d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"
//                         />
//                       </svg>
//                     </a>
//                   </li>
//                   {/*end instagram*/}
//                 </ul>
//               </div>
//               <div className="flex-shrink max-w-full w-full lg:w-3/5 px-3">
//                 <div className="flex flex-wrap flex-row">
//                   <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
//                     <h4 className="text-base leading-normal mb-3 uppercase text-gray-100">Categories</h4>
//                     <ul>
//                       <li className="py-1 hover:text-white">
//                         <a href="/Bangladesh">Bangladesh</a>
//                       </li>
//                       <li className="py-1 hover:text-white">
//                         <a href="/World">World</a>
//                       </li>
//                       <li className="py-1 hover:text-white">
//                         <a href="/Economy">Economy</a>
//                       </li>
//                       <li className="py-1 hover:text-white">
//                         <a href="/Sports">Sports</a>
//                       </li>
//                       <li className="py-1 hover:text-white">
//                         <a href="">Login</a>
//                       </li>
//                     </ul>
//                   </div>
//                   <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
//                     <h4 className="text-base leading-normal mb-3 uppercase text-gray-100">Support</h4>
//                     <ul>
//                       <li className="py-1 hover:text-white">
//                         <a href="#">NewsRoom</a>
//                       </li>
//                       <li className="py-1 hover:text-white">
//                         <a href="#">Media</a>
//                       </li>
//                       <li className="py-1 hover:text-white">
//                         <a href="#">Sales</a>
//                       </li>
//                       <li className="py-1 hover:text-white">
//                         <a href="#">Editor</a>
//                       </li>
//                     </ul>
//                   </div>
//                   <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
//                     <h4 className="text-base leading-normal mb-3 uppercase text-gray-100">Includes</h4>
//                     <ul>
//                       <li className="py-1 hover:text-white">
//                         <a href="#">Utilities</a>
//                       </li>
//                       <li className="py-1 hover:text-white">
//                         <a href="#">Components</a>
//                       </li>
//                       <li className="py-1 hover:text-white">
//                         <a href="#">Example code</a>
//                       </li>
//                       <li className="py-1 hover:text-white">
//                         <a href="#">Updates</a>
//                       </li>
//                     </ul>
//                   </div>
//                   <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
//                     <h4 className="text-base leading-normal mb-3 uppercase text-gray-100">Legal</h4>
//                     <ul>
//                       <li className="py-1 hover:text-white hover:text-white">
//                         <a href="#">Privacy Policy</a>
//                       </li>
//                       <li className="py-1 hover:text-white">
//                         <a href="#">Terms of Use</a>
//                       </li>
//                       <li className="py-1 hover:text-white">
//                         <a href="#">License</a>
//                       </li>
//                       <li className="py-1 hover:text-white">
//                         <a href="#">GDPR</a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/*Start footer copyright*/}
//         <div className="footer-dark">
//           <div className="container py-4 border-t border-gray-200 border-opacity-10">
//             <div className="row">
//               <div className="col-12 col-md text-center">
//                 <p className="d-block my-3">Copyright © Bangladeshfirst.com | All rights reserved.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/*End footer copyright*/}
//       </footer>
//       {/* end footer */}
//     </>
//   );
// }

// export function Header() {
//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 border-b-2">
//       <nav className="bg-white">
//         <div className="md-container xl:container mx-auto px-3 sm:px-4 xl:px-2">
//           <div className="flex justify-between">
//             <div className="mx-w-10 text-2xl font-bold capitalize text-white flex items-center">
//               <a href="/">
//                 <img src="/img/logo.svg" alt="" />
//               </a>
//             </div>

//             <div className="flex flex-row">
//               <ul className="navbar hidden lg:flex lg:flex-row text-gray-400 text-sm items-center font-bold">
//                 <li className="active relative border-l hover:bg-gray-900">
//                   <a className="block py-3 px-6 border-b-2 border-transparent" href="/Bangladesh">
//                     Bangladesh
//                   </a>
//                 </li>
//                 <li className="relative border-l hover:bg-gray-900">
//                   <a className="block py-3 px-6 border-b-2 border-transparent" href="/World">
//                     World
//                   </a>
//                 </li>
//                 <li className="relative border-l hover:bg-gray-900">
//                   <a className="block py-3 px-6 border-b-2 border-transparent" href="/Politics">
//                     Politics
//                   </a>
//                 </li>
//                 <li className="relative border-l hover:bg-gray-900">
//                   <a className="block py-3 px-6 border-b-2 border-transparent" href="/Sports">
//                     Sports
//                   </a>
//                 </li>

//                 <li className="dropdown relative border-l border-r hover:bg-gray-900">
//                   <a className="block py-3 px-6 border-b-2 border-transparent" href="#">
//                     More
//                   </a>
//                   <ul className="dropdown-menu font-normal absolute left-0 right-auto top-full z-50 border-b-0 text-left bg-white text-gray-700 border ">
//                     <li className="relative hover:bg-gray-50">
//                       <a className="block py-2 px-6 border-b border-gray-100" href="#">
//                         Corporates
//                       </a>
//                     </li>
//                     <li className="relative hover:bg-gray-50">
//                       <a className="block py-2 px-6 border-b border-gray-100" href="/Tech">
//                         Tech
//                       </a>
//                     </li>
//                     <li className="relative hover:bg-gray-50">
//                       <a className="block py-2 px-6 border-b border-gray-100" href="/Opinion">
//                         Opinion
//                       </a>
//                     </li>
//                     <li className="relative hover:bg-gray-50">
//                       <a className="block py-2 px-6 border-b border-gray-100" href="/Features">
//                         Features
//                       </a>
//                     </li>
//                     <li className="relative hover:bg-gray-50">
//                       <a className="block py-2 px-6 border-b border-gray-100" href="/Lifestyle">
//                         Lifestyle
//                       </a>
//                     </li>
//                     <li className="relative hover:bg-gray-50">
//                       <a className="block py-2 px-6 border-b border-gray-100" href="/Education">
//                         Education
//                       </a>
//                     </li>
//                     <li className="relative hover:bg-gray-50">
//                       <a className="block py-2 px-6 border-b border-gray-100" href="">
//                         Search
//                       </a>
//                     </li>
//                   </ul>
//                 </li>
//               </ul>

//               <div className="flex flex-row items-center text-gray-300">
//                 <div className="relative hover:bg-gray-800 block lg:hidden">
//                   <button type="button" className="menu-mobile block py-3 px-6 border-b-2 border-transparent">
//                     <span className="sr-only">Mobile menu</span>
//                     <svg
//                       className="inline-block h-6 w-6 mr-2"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                     </svg>{" "}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export function MobileMenu() {
//   return (
//     <>
//       {/* Mobile menu */}
//       <div className="side-area fixed w-full h-full inset-0 z-50">
//         {/* bg open */}
//         <div className="back-menu fixed bg-gray-900 bg-opacity-70 w-full h-full inset-x-0 top-0">
//           <div className="cursor-pointer text-white absolute right-64 p-2">
//             <svg
//               className="bi bi-x"
//               width="2rem"
//               height="2rem"
//               viewBox="0 0 16 16"
//               fill="currentColor"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z"
//                 clipRule="evenodd"
//               />
//               <path
//                 fillRule="evenodd"
//                 d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </div>
//         </div>
//         {/* Mobile navbar */}
//         <nav
//           id="mobile-nav"
//           className="side-menu flex flex-col right-0 w-64 fixed top-0 bg-white h-full overflow-auto z-40"
//         >
//           <div className="mb-auto">
//             {/*navigation*/}
//             <nav className="relative flex flex-wrap">
//               <ul id="side-menu" className="w-full float-none flex flex-col">
//                 <li className="relative">
//                   <a href="/Bangladesh" className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50">
//                     Bangladesh
//                   </a>
//                 </li>
//                 <li className="relative">
//                   <a href="/World" className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50">
//                     World
//                   </a>
//                 </li>
//                 <li className="relative">
//                   <a href="/Politics" className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50">
//                     Politics
//                   </a>
//                 </li>
//                 <li className="relative">
//                   <a href="/Sports" className="block py-2 px-5 border-b border-gray-100 hover:bg-gray-50">
//                     Sports
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//           {/* copyright */}
//           <div className="py-4 px-6 text-sm mt-6 text-center">
//             <p>
//               Copyright <a href="#">BangladeshFirst.com</a> - All right reserved
//             </p>
//           </div>
//         </nav>
//       </div>
//       {/* End Mobile menu */}
//     </>
//   );
// }

// export function Slider(props: { items: any[]; title: string }) {
//   return (
//     <>
//       {/* slider news */}
//       <div
//         className="relative bg-gray-50"
//         style={{
//           backgroundSize: "cover",
//           backgroundPosition: "center center",
//           backgroundAttachment: "fixed",
//         }}
//       >
//         <div className="bg-black bg-opacity-70">
//           <div className="md-container xl:container mx-auto px-3 sm:px-4 xl:px-2">
//             <div className="flex flex-row flex-wrap">
//               <div className="flex-shrink max-w-full w-full py-12 overflow-hidden">
//                 <div className="w-full py-3">
//                   <h2 className="text-white text-2xl font-bold text-shadow-black">
//                     <span className="inline-block h-5 border-l-3 border-red-600 mr-2" />
//                     {props.title}
//                   </h2>
//                 </div>
//                 <div id="post-carousel" className="splide">
//                   <div className="splide__track">
//                     <ul className="splide__list">
//                       {props.items.map((item) => (
//                         <li className="splide__slide">
//                           <Card item={item} />
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export function Card(props: { item: any }) {
//   const { item } = props;
//   return (
//     <div className="w-full pb-3">
//       <div className="hover-img bg-white">
//         <a href={newsUrl(item)}>
//           <img className="max-w-full w-full mx-auto" src={getImageUrl(item.featured_image)} alt="alt title" />
//         </a>
//         <div className="py-3 px-6">
//           <h3 className="text-lg font-bold leading-tight mb-2">
//             <a href={newsUrl(item)}>{maxText(item.title, 60)}</a>
//           </h3>
//           <a className="text-gray-500" href={`/${item.category.name}`}>
//             <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
//             {item.category.name}
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function CardCaption(props: { item: any }) {
//   const { item } = props;
//   return (
//     <div className="hover-img bg-gray-100">
//       <a href="">
//         <img
//           className="max-w-full w-full mx-auto"
//           src={getImageUrl(item.featured_image, 1600, 900)}
//           alt={item.featured_image_caption}
//         />
//       </a>
//       <div className="py-3 px-6">
//         <span className="font-black font-semibold">{item.featured_image_caption}</span>
//       </div>
//     </div>
//   );
// }

export default function Index({ featured, latestNews, bangladesh, politics, world }: any) {
  return (
    <>
      <Header />
      <MobileMenu />
      <main id="content">
        <FeaturedItems items={featured} />
        <BlockNews items={featured.slice(5)} title={""} />
        <Slider items={world.slice(0, 6)} title={"World"} />
        <BlockNews2 items={bangladesh.slice(0, 6)} latest={latestNews.slice(0, 5)} title={"Bangladesh"} />
        <BlockNews3 items={politics} latest={latestNews.slice(6, 11)} title={"Politics"} />
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  const [featuredRes, latestNewsRes, bangladeshNews, politicsNews, worldNews] = await Promise.all([
    fetch("https://panel.bangladeshfirst.com/api/v2/featured"),
    fetch("https://panel.bangladeshfirst.com/api/v2/latest"),
    fetch("https://panel.bangladeshfirst.com/api/v2/category/Bangladesh?page=1&size=20"),
    fetch("https://panel.bangladeshfirst.com/api/v2/category/Politics?page=1&size=20"),
    fetch("https://panel.bangladeshfirst.com/api/v2/category/World?page=1&size=20"),
  ]);

  const featured: any[] = await featuredRes.json();
  const latestNews: any[] = await latestNewsRes.json();

  const filterFn = (item: any) => !featured.find((f) => f.id === item.id) && !latestNews.find((f) => f.id === item.id);

  let bangladesh = (await bangladeshNews.json()).data.filter(filterFn);
  let politics = (await politicsNews.json()).data.filter(filterFn);
  let world = (await worldNews.json()).data.filter(filterFn);

  return { props: { featured, latestNews, bangladesh, politics, world } };
};
