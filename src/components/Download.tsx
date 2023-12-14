import SectionHead from "./SectionHead";
import { sectionHeadContentList, downloadContentList } from "../data/data";
import DownloadUnit from "./DownloadUnit";

const Download = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-10 pt-24">
      <SectionHead content={sectionHeadContentList[1]} />
      <div className="grid grid-cols-3 gap-10">
        <div>
          <DownloadUnit content={downloadContentList[0]} />
        </div>
        <div className="mt-10">
          <DownloadUnit content={downloadContentList[1]} />
        </div>
        <div className="mt-20">
          <DownloadUnit content={downloadContentList[2]} />
        </div>
      </div>
    </div>
  );
};

export default Download;
