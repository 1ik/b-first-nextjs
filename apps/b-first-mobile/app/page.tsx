import { BreadCrumb } from "@bfirst/components-breadcrumb";

export default function Home() {
  return (
    <div>
      <BreadCrumb
        links={[
          {
            name: "bangladesh",
            href: "/bangladesh",
          },
        ]}
      />
    </div>
  );
}
