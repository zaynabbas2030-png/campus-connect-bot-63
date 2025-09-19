export interface KnowledgeItem {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
  category: string;
}

export const campusKnowledge: KnowledgeItem[] = [
  // Academics
  {
    id: "1",
    question: "What are the admission requirements?",
    answer: "Our admission requirements include a completed application, high school transcripts, SAT/ACT scores, letters of recommendation, and a personal essay. The average GPA for admitted students is 3.7, and SAT scores typically range from 1200-1400.",
    keywords: ["admission", "requirements", "apply", "application", "gpa", "sat", "act", "transcripts"],
    category: "admissions"
  },
  {
    id: "2",
    question: "When is the application deadline?",
    answer: "Application deadlines are: Early Decision - November 15th, Regular Decision - January 15th, and Transfer Students - March 1st. We encourage applying early for the best chance of admission and financial aid.",
    keywords: ["deadline", "application", "due date", "early decision", "regular decision", "transfer"],
    category: "admissions"
  },
  {
    id: "3",
    question: "What majors do you offer?",
    answer: "We offer over 50 undergraduate majors across 6 schools: Engineering, Business, Liberal Arts, Sciences, Education, and Fine Arts. Popular majors include Computer Science, Business Administration, Psychology, Biology, and Mechanical Engineering.",
    keywords: ["majors", "programs", "degrees", "undergraduate", "computer science", "business", "engineering"],
    category: "academics"
  },
  {
    id: "4",
    question: "What is the student-to-faculty ratio?",
    answer: "Our student-to-faculty ratio is 12:1, ensuring small class sizes and personalized attention. The average class size is 18 students, and 85% of our classes have fewer than 30 students.",
    keywords: ["ratio", "class size", "faculty", "students", "small classes"],
    category: "academics"
  },
  
  // Campus Life
  {
    id: "5",
    question: "What housing options are available?",
    answer: "We offer various housing options including traditional residence halls, suite-style living, apartments, and themed communities. All first-year students are required to live on campus. Housing applications open in February.",
    keywords: ["housing", "dorms", "residence", "living", "accommodation", "rooms"],
    category: "campus-life"
  },
  {
    id: "6",
    question: "What dining options are on campus?",
    answer: "Campus dining includes 3 main dining halls, 8 cafés, food trucks, and specialty restaurants. We offer various meal plans and accommodate dietary restrictions including vegetarian, vegan, gluten-free, and kosher options.",
    keywords: ["dining", "food", "meal plans", "cafeteria", "restaurants", "dietary"],
    category: "campus-life"
  },
  {
    id: "7",
    question: "What clubs and activities are available?",
    answer: "We have over 200 student organizations including academic clubs, Greek life, sports clubs, cultural organizations, and volunteer groups. Popular activities include Student Government, Drama Club, Debate Team, and various intramural sports.",
    keywords: ["clubs", "activities", "organizations", "greek life", "sports", "intramural"],
    category: "campus-life"
  },
  
  // Financial Aid
  {
    id: "8",
    question: "What financial aid is available?",
    answer: "We offer need-based grants, merit scholarships, work-study programs, and federal loans. Over 90% of students receive some form of financial aid. The average aid package is $28,000. FAFSA is required for all aid consideration.",
    keywords: ["financial aid", "scholarships", "grants", "loans", "fafsa", "cost", "tuition"],
    category: "financial"
  },
  {
    id: "9",
    question: "How much does tuition cost?",
    answer: "Current tuition and fees are $52,000 per year. Room and board costs approximately $15,000. Total cost of attendance including books and personal expenses is around $72,000 annually.",
    keywords: ["tuition", "cost", "fees", "room", "board", "expenses", "price"],
    category: "financial"
  },
  
  // Campus Services
  {
    id: "10",
    question: "What support services are available?",
    answer: "We provide academic advising, career counseling, mental health services, tutoring, disability services, and campus safety. The Student Success Center offers workshops on study skills, time management, and academic planning.",
    keywords: ["support", "services", "counseling", "tutoring", "advising", "mental health", "disability"],
    category: "services"
  },
  {
    id: "11",
    question: "Is there parking on campus?",
    answer: "Yes, we have multiple parking areas including student lots, visitor parking, and faculty/staff spots. Student parking permits cost $200 per semester. Freshmen are not allowed to have cars on campus.",
    keywords: ["parking", "cars", "permits", "transportation", "vehicles"],
    category: "services"
  },
  {
    id: "12",
    question: "How do I get around campus?",
    answer: "Campus is walkable, and we provide a free shuttle service with routes to all major buildings. Bike rentals are available, and the campus is bike-friendly with dedicated lanes and bike racks throughout.",
    keywords: ["transportation", "shuttle", "bus", "walking", "bikes", "getting around"],
    category: "services"
  }
];

export const fallbackResponses = [
  "I'm sorry, I don't have specific information about that. Please contact our admissions office at (555) 123-4567 or visit our website for more details.",
  "That's a great question! For the most up-to-date information, I'd recommend speaking with our student services team or checking our official website.",
  "I don't have that information readily available. You can reach out to our main office at info@university.edu, and they'll be happy to help you!",
];