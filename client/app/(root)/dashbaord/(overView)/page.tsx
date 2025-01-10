import React from "react";

const OverViewPage = () => {
  return (
    <section className="w-full h-full flex flex-col gap-7 px-10 py-10">
      <div className="border border-secondary/50 p-5 rounded bg-primary/10 flex flex-col gap-5">
        <h1 className="font-bold text-3xl text-secondary">Welcome!</h1>
        <p className="text-text">
          We're so glad you signed up. Check out the Collaboration Hub and
          explore hundreds of awesome opportunities, from ShoutOuts to Giveaways
          and Paid Campaigns!
        </p>
        <button className="self-start bg-secondary py-2 text-white px-3">
          Complete your profile
        </button>
      </div>
      <div className="border border-orange-500/50 p-5 rounded bg-orange-700/10 flex flex-col gap-5">
        <h1 className="font-bold text-3xl text-orange-600">Welcome!</h1>
        <p className="text-text font-semibold">
          We need the following info to check your eligibility for campaigns:
        </p>
        <ul className="list-disc list-inside pl-5">
          <li>Birthdate (you must be at least 18 to participate in most campaigns)</li>
          <li>Residence (certain brands can only ship products to specific locations)</li>
          <li>Niche (your social media content must match the brand's niche)</li>
        </ul>
        <button className="self-start bg-white rounded-full py-2 text-orange-400 border border-orange-400 px-3">
          Collaboration Hub
        </button>
      </div>
    </section>
  );
};

export default OverViewPage;
