import SectionHead from "./SectionHead";
import { sectionHeadContentList, downloadContentList } from "../data/data";
import DownloadUnit from "./DownloadUnit";

const Download = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-5 pt-24 md:gap-10">
      <div className="flex max-w-[34rem] flex-col items-center gap-4 p-5 text-center md:gap-7">
        <SectionHead
          header={sectionHeadContentList[1].header}
          paragraph={sectionHeadContentList[1].paragraph}
        />
      </div>
      <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3">
        <div className="max-w-[350px]">
          <DownloadUnit content={downloadContentList[0]} />
        </div>
        <div className="lg:mt-10">
          <DownloadUnit content={downloadContentList[1]} />
        </div>
        <div className="md:col-span-2 md:mx-auto lg:col-auto lg:mx-0 lg:mt-20">
          <DownloadUnit content={downloadContentList[2]} />
        </div>
      </div>
    </div>
  );
};

export default Download;
