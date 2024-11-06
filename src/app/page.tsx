// import { Button } from "@nextui-org/react";
// import * as actions from "@/actions";
// import { auth } from "@/auth";
// import Profile from "@/components/profile";

import TopicCreateForm from "@/components/topics/topics-create-form";

export default function Home() {
  // const session = await auth();
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {/* HOme Page */}
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
      </div>
      <div>
        <TopicCreateForm />
      </div>

      {/* <form action={actions.singnIn}>
        <Button type="submit">SignIn</Button>
      </form>
      <form action={actions.singnOut}>
        <Button type="submit">Sign Out</Button>
      </form>
      {
        session?.user ? <div>{JSON.stringify(session.user)}</div> : <div>Signed Out</div>
      }

      <Profile/> */}
    </div>
  );
}
