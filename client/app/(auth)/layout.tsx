import Image from "next/image";
import React from "react";

const AutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen ">
      <section className="bg-primary p-10 lg:flex hidden w-1/2 items-center justify-center xl:2/5">
        <div className="flex max-h-[800px] max-w-[430px] flex-col space-y-12 justify-center">
          <Image
            src="/icons/logo.png"
            alt=""
            width={124}
            height={42}
            className="h-auto"
          />
          <div className="space-y-5 text-white">
            <h1 className="text-2xl fot-bold">Empower Campaigns, Empower Growth</h1>
            <p className="text-sm text-green-100">
              Brands, SMEs, and influencers unite! Launch impactful campaigns
              that drive success. Whether you’re growing your business or
              seeking profit as an influencer, this is your platform to thrive.
            </p>
          </div>
          <div className="w-full relative h-56">
            <Image
              src="/images/image-form.png"
              alt="image form"
              width={0}
              height={0}
              sizes="100vw"
              fill
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute flex items-end px-5 text-center text-white top-0 left-0 bg-gradient-to-b from-transparent to-primary h-full w-full">
              <h1>
                Connect with brands and influencers worldwide. Turn ideas into
                campaigns, and campaigns into profits. Your next big opportunity
                is waiting here.
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:p-10 lg:py-0 lg:justify-center ">
        <div className="mb-16 lg:hidden">
          <Image
            src="/icons/logo-full-brand.svg"
            alt=""
            width={244}
            height={82}
            className="h-auto w-[200px] lg:w-[250px]"
          />
        </div>
        {children}
      </section>
    </div>
  );
};

export default AutLayout;
