export default async function Contacts() {

  const data = await fetch('https://console.eleveight.ai/api/articles');
  const posts = await data.json()
  console.log(posts)

  return (
    <div>
      {posts.data.map((item: any) => (
        <span key="item.id">{item.title}</span>
      ))}
    </div>

  );
}