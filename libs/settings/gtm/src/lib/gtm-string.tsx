/* in next js sometime script tag doesnt load on not found page (when notFound() function is called and the 
    gtm script is inside normal script tag).
  so had to expose only the gtm string so that the nextjs Script component can be used which solves the issue. 
*/

export function gtmString(id: string) {
  return `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${id}')`;
}
