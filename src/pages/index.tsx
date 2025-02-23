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
        <meta property="og:url" content="https://temp-iota-ochre.vercel.app/" />
        <meta property="og:description" content="It's alive!!!" />
        <meta
          property="og:image"
          content="https://public.bnbstatic.com/static/images/common/ogImage.jpg"
        />
      </Head>

      <div className="h-full w-full p-[16px]">
        <h1 className='mb-[16px]'>Server-Side Rendered Page</h1>

        <div className="w-full h-full flex flex-wrap gap-[24px]">
          {users.map((user: any, i: number) => {
            return (
              <div key={i} className="w-[300px] border border-gray-800" onClick={() => console.log(user.id)}>
                <img src={user.avatar} alt="Profile picture" />
                <div>{user.name}</div>
                <div>{user.email}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
