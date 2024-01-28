
export interface AnalyticsProps {
  id: string
}

export function Analytics(props: AnalyticsProps) {
  const src = 'https://www.googletagmanager.com/gtag/js?id=' + props.id;
  return (
    <>
      <script async src={src}></script>
      <script
        dangerouslySetInnerHTML={{__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${props.id}');
          `}}
      />
    </>
  )
}

export default Analytics;
