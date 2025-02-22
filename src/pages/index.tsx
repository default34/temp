// pages/index.js
export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/api/users");
  const users = await res.json();

  return { props: { users } };
}

export default function Home({ users }: { users: any }) {
  return (
    <div className='h-full w-full'>
      <h1>Server-Side Rendered Page</h1>
      {users.map((user: any) => {
        return <div className='pb-[24px]'>
          <div>{user.name}</div>
          <div>{user.email}</div>
        </div>
      })}
    </div>
  );
}
