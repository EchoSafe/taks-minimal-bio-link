import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';

const achievements = [
  // Top tier achievements (Winners)
  {
    title: "Junior Webmaster Camp ครั้งที่ 12",
    awards: ["The Winner", "The Best Idea", "The Best Teamwork"],
    year: "2023",
    tier: "gold",
    type: "Triple Winner"
  },
  {
    title: "โครงการยอดนักคิด 3/2564",
    awards: ["รางวัลชนะเลิศอันดับหนึ่ง"],
    year: "2021",
    tier: "gold",
    type: "Champion"
  },
  {
    title: "Minecraft Hackathon Education Edition",
    awards: ["รางวัลชนะเลิศ"],
    prize: "10,000 บาท",
    year: "2022",
    tier: "gold",
    type: "Champion"
  },
  
  // Second tier achievements (Runners-up)
  {
    title: "Code Your Future Hackathon 2022",
    awards: ["รองชนะเลิศ"],
    prize: "10,000 บาท",
    year: "2022",
    tier: "silver",
    type: "Runner-up"
  },
  {
    title: "KU Startup Boot Camp for Entrepreneur 2025",
    awards: ["รองชนะเลิศอันดับ 1"],
    prize: "3,000 บาท",
    year: "2025",
    tier: "silver",
    type: "Runner-up"
  },
  {
    title: "KU Happy & Healthy Hackathon 2024",
    awards: ["3rd Place"],
    prize: "10,000 บาท",
    year: "2024",
    tier: "bronze",
    type: "3rd Place"
  },
  
  // Third tier achievements (Mentions & Participation)
  {
    title: "KU Hackathon 2023",
    awards: ["Honorable Mention"],
    prize: "5,000 บาท",
    year: "2023",
    tier: "mention",
    type: "Recognition"
  },
  {
    title: "High Tech Coding Challenge 2024",
    awards: ["รางวัลชมเชย"],
    prize: "2,000 บาท",
    year: "2024",
    tier: "mention",
    type: "Recognition"
  },
  {
    title: "ETHPADTHAI WEB3 BOOTCAMP",
    awards: ["เข้าร่วม Bootcamp"],
    year: "2024",
    tier: "participation",
    type: "Participation"
  }
];

const getTierIcon = (tier: string) => {
  switch (tier) {
    case 'gold': return <Trophy className="w-5 h-5 text-yellow-500" />;
    case 'silver': return <Award className="w-5 h-5 text-gray-400" />;
    case 'bronze': return <Award className="w-5 h-5 text-amber-600" />;
    default: return <Star className="w-5 h-5 text-blue-500" />;
  }
};

const getTierBorder = (tier: string) => {
  switch (tier) {
    case 'gold': return 'border-l-yellow-500 bg-yellow-50';
    case 'silver': return 'border-l-gray-400 bg-gray-50';
    case 'bronze': return 'border-l-amber-600 bg-amber-50';
    case 'mention': return 'border-l-blue-500 bg-blue-50';
    default: return 'border-l-green-500 bg-green-50';
  }
};

export default function AchievementsShowcase() {
  // Add this function to calculate total prize money
  const calculateTotalPrize = () => {
    return achievements
      .filter(achievement => achievement.prize)
      .reduce((total, achievement) => {
        const prizeAmount = parseInt(achievement.prize?.replace(/[^\d]/g, '') || '0');
        return total + prizeAmount;
      }, 0);
  };

  return (
    <div className="min-h-screen bg-white p-6">
  
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-900 mb-2">🏆Achievements</h1>
          <div className="w-16 h-0.5 bg-gray-300 mx-auto"></div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">3</div>
            <div className="text-sm text-gray-600">Champions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-500">2</div>
            <div className="text-sm text-gray-600">Runners-up</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">3</div>
            <div className="text-sm text-gray-600">Recognition</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{calculateTotalPrize().toLocaleString()}</div>
            <div className="text-sm text-gray-600">Prize Money (฿)</div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`border-l-4 ${getTierBorder(achievement.tier)} p-6 rounded-r-lg transition-all duration-200 hover:shadow-md hover:translate-x-1`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    {getTierIcon(achievement.tier)}
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {achievement.type}
                    </span>
                    <span className="text-sm text-gray-400">
                      {achievement.year}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
                  
                  <div className="space-y-1">
                    {achievement.awards.map((award, awardIndex) => (
                      <div key={awardIndex} className="text-gray-700">
                        {award}
                      </div>
                    ))}
                  </div>
                </div>
                
                {achievement.prize && (
                  <div className="text-right">
                    <div className="text-lg font-semibold text-gray-900">
                      {achievement.prize}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
}