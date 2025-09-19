import { ChatInterface } from "@/components/ChatInterface";
import { GraduationCap, Users, BookOpen } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-campus-background">
      {/* Header */}
      <header className="bg-campus-surface border-b border-chat-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-campus-primary to-campus-secondary p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-campus-text">Campus Assistant</h1>
              <p className="text-sm text-campus-text-muted">Your guide to university life</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-campus-surface rounded-xl p-4 border border-chat-border shadow-sm">
              <h3 className="font-semibold text-campus-text mb-3 flex items-center">
                <BookOpen className="h-4 w-4 mr-2 text-campus-primary" />
                Quick Topics
              </h3>
              <div className="space-y-2">
                {[
                  "Admission Requirements",
                  "Campus Housing",
                  "Financial Aid",
                  "Student Life",
                  "Academic Programs"
                ].map((topic) => (
                  <button
                    key={topic}
                    className="w-full text-left text-sm text-campus-text-muted hover:text-campus-primary transition-colors p-2 rounded-lg hover:bg-campus-muted"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-campus-surface rounded-xl p-4 border border-chat-border shadow-sm">
              <h3 className="font-semibold text-campus-text mb-3 flex items-center">
                <Users className="h-4 w-4 mr-2 text-campus-secondary" />
                Need More Help?
              </h3>
              <div className="space-y-2 text-sm text-campus-text-muted">
                <p>📞 Admissions: (555) 123-4567</p>
                <p>📧 info@university.edu</p>
                <p>🏢 Student Services: Building A</p>
                <p>⏰ Mon-Fri: 8AM-5PM</p>
              </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <div className="bg-campus-surface rounded-xl shadow-sm border border-chat-border h-full">
              <ChatInterface />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;