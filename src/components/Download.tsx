import SectionHead from "./SectionHead";
import { sectionHeadContentList, downloadContentList } from "../data/data";
import DownloadUnit from "./DownloadUnit";

const Download = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-5 pt-24 md:gap-10">
      <SectionHead content={sectionHeadContentList[1]} />
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <DownloadUnit content={downloadContentList[0]} />
        </div>
        <div className="lg:mt-10">
          <DownloadUnit content={downloadContentList[1]} />
        </div>
        <div className="lg:mt-20">
          <DownloadUnit content={downloadContentList[2]} />
        </div>
      </div>
    </div>
  );
};

export default Download;
