import { pdf } from "@react-pdf/renderer";
import { Resume } from "./Resume";
import { Icon } from "@components/common/Icon";

export default function ResumeDownloadButton() {
  const handleDownload = async () => {
    const blob = await pdf(<Resume />).toBlob();
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleDownload}
      className={`
        bg-[rgba(72,72,72,0.45)] cursor-pointer
        glass rounded-full p-2 transition 
        backdrop-blur-md text-white 
        shadow-[inset_2px_2px_0.5px_-2px_rgba(173,173,173,0.5),inset_-2px_-2px_0.5px_-2px_rgba(173,173,173,0.5),inset_0px_0px_0px_1px_rgba(255,255,255,0.1),0px_2px_8px_2px_rgba(0,0,0,0.1)]
        hover:bg-[rgba(115,115,115,0.45)] hover:shadow-[inset_-2px_2px_0.5px_-2px_rgba(173,173,173,0.5),inset_2px_-2px_0.5px_-2px_rgba(173,173,173,0.5),inset_0px_0px_0px_1px_rgba(255,255,255,0.1),0px_2px_8px_2px_rgba(0,0,0,0.1)]
      `}
    >
      <div className="flex items-center gap-2 h-[28px] px-3 justify-center">
        <p className="text-sm">Resume</p>
        <Icon icon="DownloadSimple" />
      </div>
    </button>
  );
}
