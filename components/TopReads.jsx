import Image from "next/image";
import Link from "next/link";
import blogPosts from "@/data/blogs.json"; // adjust based on your file location

export default function TopReads() {
  // Take top 3 from your list
  const blogs = blogPosts.blogs;
  const topThree = blogs.slice(0, 3);

  return (
    <section className="py-12">
      <h2 className="text-4xl mb-6 text-center tracking-tight">
        Reads
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-2">
        {topThree.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <div className="bg-accent rounded-2xl overflow-hidden  transition-all">
              <div className="overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={350}
                  className="w-full h-60 object-cover transform transition-transform duration-500 group-hover:scale-120"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg leading-snug">
                  {post.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
