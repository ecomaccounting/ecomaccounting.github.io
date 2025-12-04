import Image from "next/image";
import Link from "next/link";
import blogPosts from "@/data/blogs.json"; // adjust based on your file location

export default function TopReads() {
  // Take top 3 from your list
  const blogs = blogPosts.blogs;
  const topThree = blogs.slice(0, 3);

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-center tracking-tight">
        Reads
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {topThree.map((post) => (
          <Link
            key={post.id}
            href={`/blogs/${post.slug}`}
            className="group block"
          >
            <div className="bg-white/5 rounded-2xl overflow-hidden shadow-lg border border-white/10 hover:border-blue-500/30 transition-all">
              <div className="overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={320}
                  className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
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
