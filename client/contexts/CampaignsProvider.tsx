import { fetchCampaigns, getCampaign } from "@/lib/requests";
import { createContext, useContext, useState } from "react";
import { useQuery } from "react-query";

interface CampaignContextType {
  campaigns: Campaign[];
  isLoading: boolean;
  isError: unknown;
  campaign: Campaign;
  fetchCampaign: (id: string) => void;
}

const campaignsContext = createContext<CampaignContextType | undefined>(
  undefined
);

export const useCampaigns = () => {
  const context = useContext(campaignsContext);
  if (!context) {
    throw new Error("usePosts must be used within a campaignProvider");
  }
  return context;
};

export const CampaignsProvider = ({ children }: { children: React.ReactNode }) => {
  const [campaignId, setCampaignId] = useState("");
  const {
    data: campaigns = [],
    isLoading,
    isError,
  } = useQuery("campaigns", fetchCampaigns);
  const { data: campaign = null } = useQuery(["campaign", campaignId], () =>
    getCampaign(campaignId)
  );
  const fetchCampaignId = (id: string) => {
    setCampaignId(id);
  };
  return (
    <campaignsContext.Provider
      value={{
        campaigns,
        isLoading,
        isError,
        fetchCampaign: fetchCampaignId,
        campaign,
      }}
    >
      {children}
    </campaignsContext.Provider>
  );
};
