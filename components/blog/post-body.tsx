// components/blog/post-body.tsx
import Image from "next/image";
import { PostCardProps } from "@/lib/types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface PostBodyProps {
  post: PostCardProps;
}

export default function PostBody({ post }: PostBodyProps) {
  return (
    <article>
      {/* Featured Image */}
      {post.imageUrl && (
        <figure className="my-8">
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={1200}
            height={675}
            className="w-full h-auto rounded-2xl bg-gray-100 object-cover shadow-lg"
            priority
          />
        </figure>
      )}

      {/* Article Content */}
      <div className="prose prose-lg lg:prose-xl max-w-none mx-auto prose-emerald">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content || ""}
        </ReactMarkdown>
      </div>
    </article>
  );
}
