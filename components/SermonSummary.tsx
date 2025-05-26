
import React from 'react';
import { Sermon } from '../types';

interface SermonSummaryProps {
  sermon: Sermon;
}

const SermonSummary: React.FC<SermonSummaryProps> = ({ sermon }) => {
  return (
    <div className="bg-brand-secondary p-6 rounded-lg shadow-xl mb-6">
      <h3 className="text-2xl font-heading text-brand-accent mb-2">{sermon.title}</h3>
      <p className="text-brand-text-medium mb-1">By: {sermon.speaker}</p>
      {sermon.reference && <p className="text-brand-text-medium italic mb-3">Reference: {sermon.reference}</p>}
      
      {sermon.fullText ? (
        <div className="text-brand-text-light space-y-3 whitespace-pre-line text-sm md:text-base">{sermon.fullText}</div>
      ) : (
        sermon.summaryPoints && sermon.summaryPoints.length > 0 && (
          <ul className="list-disc list-inside text-brand-text-light space-y-1 mb-3 text-sm md:text-base">
            {sermon.summaryPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )
      )}

      {sermon.conclusion && <p className="text-brand-text-light mt-3 text-sm md:text-base">{sermon.conclusion}</p>}
      {sermon.authorTag && <p className="text-brand-accent font-bold mt-3 text-sm md:text-base">{sermon.authorTag}</p>}
    </div>
  );
};

export default SermonSummary;
