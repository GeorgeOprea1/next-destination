import { FaMap } from "react-icons/fa";
interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
}

const CampSite = ({ backgroundImage, title, subtitle }: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-3xl rounded-2xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flex items-center justify-center gap-4">
          <div className="rounded-full bg-green-500 gap-4 p-4">
            <FaMap width={28} height={28} className="text-white" />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className=" text-[18px] font-[700] text-white ">{title}</h4>
            <p className="text-[14px] font-[400] text-white">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className=" 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-10 xl:mb-20 ">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px] ">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Pineview Haven Camp"
          subtitle="Helena, Montana"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="SomeWhere in the Wilderness"
        />
      </div>
      <div className="flex items-center justify-end mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-500 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-3xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className=" text-[24px] font-[400] md:text-[32px] 2xl:text-[64px leading-[120%]  text-white">
            <strong>Feeling Los</strong>t And Not Knowing The Way?
          </h2>
          <p className="text-[14px] font-[400] xl:text-[16px] mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That's why we are here for those of you who want to start an
            adventure
          </p>
        </div>
      </div>
    </section>
  );
};

export default Camp;
