import AllCampaigns from "@/components/dashboard/campaigns/AllCampaigns";
import CampaignsFilter from "@/components/dashboard/campaigns/CampaignsFilter";
import React from "react";

const page = () => {
  return (
    <section className="w-full h-full overflow-y-scroll flex flex-col gap-7 px-10">
      <div className="flex sticky top-0 flex-col bg-white z-30 gap-6 pt-3">
      <h1 className="text-3xl font-bold">My Campaigns</h1>
      <CampaignsFilter/>
      </div>
      <AllCampaigns/>
    </section>
  );
};

export default page;
