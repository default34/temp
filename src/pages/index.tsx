import Head from "next/head";

export async function getServerSideProps() {
  const res = await fetch(
    "https://bobo-server-ssr-580f817d937d.herokuapp.com/api/users"
  );
  const users = await res.json();

  return { props: { users } };
}

export default function Home({ users }: { users: any }) {
  return (
    <>
      <Head>
        <title>SSR Users</title>
        <meta property="og:title" content="Server-Side Rendered Page" />
        <meta
          property="og:description"
          content="It's alive!!!"
        />
        <meta
          property="og:image"
          content="https://public.bnbstatic.com/static/images/common/ogImage.jpg"
        />
        <meta property="og:url" content="https://temp-iota-ochre.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="h-full w-full">
        <h1>Server-Side Rendered Page</h1>
        {users.map((user: any) => {
          return (
            <div className="pb-[24px]">
              <div>{user.name}</div>
              <div>{user.email}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
