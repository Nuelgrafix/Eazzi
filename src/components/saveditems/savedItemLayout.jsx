import SavedHero from "./savedHero";
import SavedItemStore from "./savedItemStore";
import Newsletter from "../newsletter";

const SavedItemLayout = () => {
  return (
    <>
      <div className="w-[100%] overflow-y-hidden">
        <SavedHero />
        <SavedItemStore />
        <Newsletter />
      </div>
    </>
  );
};

export default SavedItemLayout;
