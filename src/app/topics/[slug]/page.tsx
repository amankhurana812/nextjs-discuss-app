import PostList from "@/components/posts/post-list";
import PostCreateForm from "@/components/posts/posts-create-form";
import { fetchPostByTopicSlug } from "@/db/queries/post";

interface TopicShowPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* Topic show page */
export default async function TopicShowPage({ params }: TopicShowPageProps) {
  const { slug } = await params;
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">{slug}</h1>
        <PostList fetchData={() => fetchPostByTopicSlug(slug)} />
      </div>

      <div>
        <PostCreateForm slug={slug} />
      </div>
    </div>
  );
}
