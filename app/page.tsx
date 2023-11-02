export default function Home() {
  return (
    <div className="w-screen lg:w-full">
      {/* w-screenだとサイドバーをオープンした時に下に埋もれる */}
      {/* w-fullにすると、サイドバーをオープンした時に下に埋もれないので1024px以上で有効 */}
      <p>My site</p>
    </div>
  );
}
