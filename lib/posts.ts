import { opendir, readFile } from "node:fs/promises";
import { CONTENT_PATH } from "@/lib/constants";
import path from "node:path";

export type Post = {
  public: boolean;
  route: string;
  title: string;
  year: number;
  month: number;
  lastUpdated: Date;
};

export async function fetchPosts(): Promise<Post[]> {
  const posts = new Array<Post>();

  for await (const postPath of await opendir(CONTENT_PATH)) {
    if (postPath.isDirectory()) {
      const postName = postPath.name;

      const metaPath = path.join(CONTENT_PATH, postName, "metadata.json");
      const metadata = JSON.parse(
        await readFile(metaPath, { encoding: "utf-8" })
      );

      posts.push({
        route: `/writing/${postName}`,
        ...metadata,
      });
    }
  }

  console.log(posts);

  return posts;
}
