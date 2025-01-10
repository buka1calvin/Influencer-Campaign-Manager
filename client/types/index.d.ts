type Campaign = {
    id: string;
    name: string;
    description: string;
    deadline: string; 
    status: 'Ongoing' | 'Completed';
    createdBy: string;
  };