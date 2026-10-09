import Header from "./header";

export default function Dashboard() {
  return (
    <div className="dashboard h-screen w-full absolute overflow-y-hidden left-0 top-4 right-0 bottom-0  ">
      <div className="  lg:ml-50 mr-auto h-full">
        <div className="border border-foreground/20 bg-background/80 shadow-lg rounded-tr-4xl rounded-tl-4xl rounded-bl-4xl h-full">
          <Header />
        </div>
      </div>
    </div>
  );
}
