import React, { useState } from 'react';

const StoryForm = () => {
  const [summary, setSummary] = useState("");
  const [storyType, setStoryType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!summary) {
      alert("يرجى كتابة ملخص القصة، الحقل مطلوب!");
      return;
    }
    console.log("تم حفظ القصة:", { storyType, summary });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-slate-900 text-white rounded-lg">
      <h2 className="text-xl mb-4">حدد نوع قصتك</h2>
      
      {/* تم حذف خيار رواية من القائمة */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {['مانغا', 'مانهوا', 'ويبتون', 'هزلي'].map((type) => (
          <button 
            key={type}
            type="button"
            className={`p-2 border rounded ${storyType === type ? 'bg-purple-600' : 'bg-gray-800'}`}
            onClick={() => setStoryType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <label className="block mb-2">ملخص القصة (مطلوب)</label>
      <textarea 
        required // هذا يجعل الحقل إجبارياً
        className="w-full p-2 bg-gray-800 text-white border rounded"
        placeholder="أدخل ملخص القصة هنا..."
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
      
      <button type="submit" className="mt-4 w-full p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded">
        يكمل
      </button>
    </form>
  );
};

export default StoryForm;
