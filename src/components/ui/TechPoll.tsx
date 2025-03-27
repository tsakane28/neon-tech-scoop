
import React, { useState } from 'react';
import { Poll } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface PollOption {
  id: string;
  text: string;
  votes: number;
}

interface TechPollProps {
  id: string;
  question: string;
  options: PollOption[];
  totalVotes: number;
  endDate?: string;
}

const TechPoll: React.FC<TechPollProps> = ({ id, question, options, totalVotes: initialTotalVotes, endDate }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [pollOptions, setPollOptions] = useState(options);
  const [totalVotes, setTotalVotes] = useState(initialTotalVotes);
  
  const handleVote = () => {
    if (!selectedOption) return;
    
    // Update the votes count for the selected option
    const updatedOptions = pollOptions.map(option => 
      option.id === selectedOption 
        ? { ...option, votes: option.votes + 1 }
        : option
    );
    
    setPollOptions(updatedOptions);
    setTotalVotes(prev => prev + 1);
    setHasVoted(true);
    
    toast({
      title: "Vote Submitted!",
      description: "Thank you for participating in our poll."
    });
  };
  
  return (
    <div className="rounded-xl bg-card p-6 shadow-sm border">
      <div className="flex items-center mb-4">
        <Poll className="h-5 w-5 text-primary mr-2" />
        <h3 className="text-lg font-bold">Tech Poll</h3>
      </div>
      
      <h4 className="text-xl font-medium mb-4">{question}</h4>
      
      <div className="space-y-3 mb-6">
        {pollOptions.map(option => (
          <div key={option.id} className="relative">
            <label 
              className={`
                block p-3 border rounded-lg transition-all cursor-pointer
                ${hasVoted 
                  ? 'bg-muted' 
                  : selectedOption === option.id 
                    ? 'border-primary ring-1 ring-primary' 
                    : 'hover:border-primary/50'}
              `}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  {!hasVoted && (
                    <input
                      type="radio"
                      name={`poll-${id}`}
                      value={option.id}
                      checked={selectedOption === option.id}
                      onChange={() => setSelectedOption(option.id)}
                      className="mt-1 mr-3"
                      disabled={hasVoted}
                    />
                  )}
                  <span>{option.text}</span>
                </div>
                {hasVoted && (
                  <span className="text-primary font-medium">
                    {Math.round((option.votes / totalVotes) * 100)}%
                  </span>
                )}
              </div>
              
              {hasVoted && (
                <div className="mt-2 h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary"
                    style={{ width: `${(option.votes / totalVotes) * 100}%` }}
                  />
                </div>
              )}
            </label>
          </div>
        ))}
      </div>
      
      <div className="flex items-center justify-between">
        {!hasVoted ? (
          <Button 
            onClick={handleVote} 
            disabled={!selectedOption}
            className="w-full"
          >
            Submit Vote
          </Button>
        ) : (
          <p className="text-sm text-muted-foreground">
            Thanks for voting! Total votes: {totalVotes}
          </p>
        )}
      </div>
      
      {endDate && (
        <p className="text-xs text-muted-foreground mt-3">
          Poll ends on {endDate}
        </p>
      )}
    </div>
  );
};

export default TechPoll;
