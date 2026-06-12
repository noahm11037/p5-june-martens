import { Image } from "@heroui/image";

import { title } from "@/components/primitives";

export default function DocsPage() {
  return (
    <div>
      <h1 className={title()}>Docs</h1>

      <div className="my-20">
        <span className="text-2xl mr-6">you can find so many cats</span>{" "}
      </div>

      <div className="flex gap-4">
        <Image
          alt="cat 3"
          src="https://thf.bing.com/th/id/OIP.uJ-CdDXeagsvkug02GZ5YgHaEK?w=303&h=180&c=7&r=0&o=7&cb=thfc1falcon2&pid=1.7&rm=3"
          width={1000}
        />
      </div>
    </div>
  );
}
