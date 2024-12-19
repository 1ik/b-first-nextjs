/* eslint-disable-next-line */
export interface GTMNoscriptProps {
  id: string;
}

export function GTMNoscript(props: GTMNoscriptProps) {
  return (
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${props.id}"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
    ></noscript>
  );
}
