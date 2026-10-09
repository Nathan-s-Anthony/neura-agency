import Header from "./header";

export default function Dashboard() {
  return (
    <div className="dashboard h-screen w-full block col-span-2 relative">
      <div className=" test lg:ml-58 mr-auto h-full">
        <div className="border 2 p-6 border-slate-150/50 bg-slate-200 h-full">
          <Header />
          <div className="flex gap-2 flex-col">
            <h1 className="font-bold text-2xl">Current Tasks Status</h1>
            <div className=" flex w-full gap-4">
              <div className="agents shadow-sm  p-6 bg-blue-200 rounded-xl ">
                <h2>Tech Lead</h2>
                <p>Status:</p>
              </div>
              <div className="agents  shadow-sm  p-6 bg-blue-200 rounded-xl ">
                <h2>Tech Lead</h2>
                <p>Status:</p>
              </div>
              <div className="agents  shadow-sm  p-6 bg-blue-200 rounded-xl ">
                <h2>Tech Lead</h2>
                <p>Status:</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
