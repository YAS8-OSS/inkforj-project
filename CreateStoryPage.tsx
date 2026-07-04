import React, { useState } from 'react';

const CreateStoryPage = () => {
  const [storyTitle, setStoryTitle] = useState("");
  const [storySummary, setStorySummary] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!storySummary) {
      alert("حقل ملخص القصة إجباري!");
      return;
    }
    console.log("تمت العملية بنجاح");
  };

  return (
    <div className="bg-slate-950 p-8 text-white min-h-screen">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
        <h1 className="text-2xl font-bold">إنشاء مانغا</h1>
        
        <div>
          <label>عنوان القصة</label>
          <input className="w-full bg-slate-800 p-2 rounded" value={storyTitle} onChange={(e) => setStoryTitle(e.target.value)} />
        </div>

        <div>
          <label>حدد نوع قصتك</label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {['مانغا', 'مانهوا', 'ويبتون', 'هزلي'].map(type => (
              <button 
                type="button"
                key={type}
                className={`p-2 border ${selectedType === type ? 'bg-purple-600' : 'bg-slate-800'}`}
                onClick={() => setSelectedType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label>ملخص القصة (مطلوب)</label>
          <textarea 
            required
            className="w-full bg-slate-800 p-2 rounded h-32"
            value={storySummary}
            onChange={(e) => setStorySummary(e.target.value)}
          />
        </div>

        <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded">
          يكمل
        </button>
      </form>
    </div>
  );
};

export default CreateStoryPage;
