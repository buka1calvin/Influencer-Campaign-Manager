"use client"
import { useCampaigns } from '@/contexts/CampaignsProvider';
import React, { useEffect, useState } from 'react';
import { MoonLoader } from 'react-spinners';

const CampaignPage = ({params}: {params: {id: string}}) => {
  const { campaign, fetchCampaign, isError, isLoading } = useCampaigns();
  const [requestForm, setRequestForm] = useState({
    influencerName: '',
    socialMediaHandles: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const campId = params.id;

  useEffect(() => {
    fetchCampaign(campId);
  }, [campId, fetchCampaign]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRequestForm({
      ...requestForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      alert("Request submitted successfully!");
    } catch (error) {
      console.error("Error submitting request:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="text-center text-lg h-screen w-screen flex justify-center items-center">
        <MoonLoader />
      </div>
    );
  }

  if (isError) {
    return <div>Error loading campaign details!</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{campaign?.name}</h1>
      <p className="text-lg mb-6">{campaign?.description}</p>

      <h2 className="text-2xl font-semibold mb-4">Submit Your Request to Participate</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="influencerName" className="text-lg font-medium mb-2">Your Name</label>
          <input
            id="influencerName"
            name="influencerName"
            type="text"
            value={requestForm.influencerName}
            onChange={handleInputChange}
            className="border p-2 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="socialMediaHandles" className="text-lg font-medium mb-2">Social Media Handles</label>
          <input
            id="socialMediaHandles"
            name="socialMediaHandles"
            type="text"
            value={requestForm.socialMediaHandles}
            onChange={handleInputChange}
            className="border p-2 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-lg font-medium mb-2">Message (Why do you want to participate?)</label>
          <textarea
            id="message"
            name="message"
            value={requestForm.message}
            onChange={handleInputChange}
            className="border p-2 rounded-md"
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          className={`bg-blue-500 text-white p-3 rounded-md w-full ${isSubmitting ? 'opacity-50' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
};

export default CampaignPage;
