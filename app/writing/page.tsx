// import { Suspense } from "react";
// import { fetchPosts, type Post } from "@/lib/posts";

// type EntriesPerYearProps = {
//   year: number;
//   posts: Post[];
// };

// function EntriesPerYear({ posts }: EntriesPerYearProps) {
//   return (
//     <div>
//       {posts.map((post, idx) => {
//         const mText = post.month.toString();
//         const month = mText.length == 2 ? mText : `0${mText}`;
//         return (
//           <span key={idx}>
//             <p>{post.title}</p>
//             <p>
//               {month}/{post.year}`
//             </p>
//           </span>
//         );
//       })}
//     </div>
//   );
// }

// async function Entries() {
//   const posts = await fetchPosts();
//   const posts_per_year = new Map<number, Post[]>();

//   for (const post of posts) {
//     let cur_posts = posts_per_year.get(post.year);

//     if (cur_posts === undefined) {
//       cur_posts = new Array<Post>();
//     }

//     posts_per_year.set(post.year, [...cur_posts, post]);
//   }

//   return (
//     <section>
//       {[...posts_per_year.entries()].map(([year, posts], idx) => {
//         return <EntriesPerYear key={idx} year={year} posts={posts} />;
//       })}
//     </section>
//   );
// }

// function EntriesFallback() {
//   return <div>Loading entries...</div>;
// }

// export default function Writing() {
//   return (
//     <article>
//       <h1>Writing</h1>
//       {/* <Suspense fallback={<EntriesFallback />}>
//         <Entries />
//       </Suspense> */}
//       Coming Soon!
//     </article>
//   );
// }

export default function Writing() {
  return <div>WIP</div>
}