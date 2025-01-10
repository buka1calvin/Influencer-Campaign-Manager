

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

export const fetchCampaigns = async () => {
  try {
    if (!apiDomain) {
      return [];
    }
    const res = await fetch(`${apiDomain}/campaigns`, {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    return [];
  }
};
export const getCampaign = async (id: string) => {
  try {
    const res = await fetch(`${apiDomain}/campaigns/${id}`);
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchSubmissions = async () => {
  try {
    if (!apiDomain) {
      return [];
    }
    const res = await fetch(`${apiDomain}/submissions`, {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getSubmission = async (id: string) => {
    try {
      const res = await fetch(`${apiDomain}/submissions/${id}`);
      return res.json();
    } catch (error) {
      console.log(error);
      return [];
    }
  };
