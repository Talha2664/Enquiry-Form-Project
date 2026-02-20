import LeftForm from "./Components/Left-Enquiry-Form";
import RightList from "./Components/Right-Enquiry-List";

const App = () => {
  return (
    <div className="p-4">
      <h1 className="text-[40px] text-center font-bold py-6 m-4">User Enquiry</h1>

      <div className="grid grid-cols-[30%_auto] gap-4">
        <LeftForm />

        {/* Right column: Content */}
        <div className="bg-gray-200 p-4 rounded">
          <RightList />
        </div>
      </div>
    </div>
  );
};

export default App;
