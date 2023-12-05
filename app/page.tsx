import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";

const HomePage = () => {
  const postMetadata = getPostMetadata();

  // Sort post metadata array in descending order based on date
  postMetadata.sort((a, b) => {
    const dateA = new Date(a.date.split("-").reverse().join("-"));
    const dateB = new Date(b.date.split("-").reverse().join("-"));
    return dateB.getTime() - dateA.getTime();
  });

  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return <div className="grid grid-cols-1 gap-4">{postPreviews}</div>;
};

export default HomePage;
