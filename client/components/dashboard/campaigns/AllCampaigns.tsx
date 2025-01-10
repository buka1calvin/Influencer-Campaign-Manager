"use client";
import CampaignCard from "@/components/ui/CampaignCard";
import Search from "@/components/ui/Search";
import { useCampaigns } from "@/contexts/CampaignsProvider";
import { useDebounce } from "use-debounce";
import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";

const AllCampaigns = () => {
  const { campaigns , isLoading, isError } = useCampaigns();
  const [searchTerm, setSearchTerm] = useState("");
  const [perPage, setPerPage] = useState(3);
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);
  const [filteredCampaigns, setFilteredCampaigns] = useState(campaigns);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const lowercasedTerm = debouncedSearchTerm.toLowerCase();
      setFilteredCampaigns(
        campaigns.filter(
          (campaign) =>
            campaign.name.toLowerCase().includes(lowercasedTerm) ||
            campaign.description.toLowerCase().includes(lowercasedTerm)
        )
      );
    } else {
      setFilteredCampaigns(campaigns);
    }
  }, [debouncedSearchTerm, campaigns]);
  const loadMore = () => {
    setPerPage((prevPerPage) => prevPerPage + 3);
  };
  return (
    <section className="flex items-start h-full flex-col px-4 py-4 border rounded gap-4">
      <Search
        placeholders={[
          "Search by name",
          "Search by Description",
          "Find campaign",
        ]}
        onChange={(e)=>setSearchTerm(e.target.value)}
        onSubmit={(e)=>e.preventDefault()}
      />
      <div className="flex flex-col justify-center items-center w-full">
      <div className="grid md:grid-cols-3 gap-2">
        {filteredCampaigns.slice(0, perPage).map((campaign) => (
          <CampaignCard
          key={campaign.id}
            id={campaign.id}
            name={campaign.name}
            description={campaign.description}
            deadline={campaign.deadline}
            status={campaign.status}
            createdBy={campaign.createdBy}
          />
        ))}
      </div>
      {perPage < filteredCampaigns.length && (
        <button
          className="border-gray-400 mt-4 shadow-inner shadow-gray-900/30 border text-gray-700 py-2 px-8 rounded-lg hover:bg-primary hover:text-white transition"
          onClick={loadMore}
        >
          Load More
        </button>
      )}
      </div>
    </section>
  );
};

export default AllCampaigns;
