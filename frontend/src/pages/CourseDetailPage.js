import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function CourseDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handlePurchase = () => {
    // Redirect user to the login page if not logged in
    navigate('/login');
  };

  return (
    <div className="p-4">
            <h2 className="text-3xl">Course Detail: {id}</h2>
      <p>Details about the course with ID {id}.</p>
      <button 
        onClick={handlePurchase}
        className="mt-4 bg-blue-500 text-white p-2 rounded"
      >
        Purchase
      </button>
    </div>
  );
}

export default CourseDetailPage;

