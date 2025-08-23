export const userData = {
  name: "John Doe",
  stats: {
    enrolledCourses: 8,
    hoursLearned: 142,
    certificates: 3,
    currentStreak: 15,
  },
};

export const enrolledCourses = [
  {
    id: 1,
    title: "React Development Masterclass",
    progress: 75,
    instructor: "John Doe",
    nextLesson: "Advanced Hooks",
    thumbnail: "https://via.placeholder.com/60x60?text=React",
    category: "Development",
    level: "Advanced",
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    progress: 45,
    instructor: "Jane Smith",
    nextLesson: "Prototyping in Figma",
    thumbnail: "https://via.placeholder.com/60x60?text=UX",
    category: "Design",
    level: "Beginner",
  },
  {
    id: 3,
    title: "Data Science with Python",
    progress: 30,
    instructor: "Sarah Wilson",
    nextLesson: "Machine Learning Basics",
    thumbnail: "https://via.placeholder.com/60x60?text=Python",
    category: "Data Science",
    level: "Intermediate",
  },
];

export const recentActivities = [
  {
    id: 1,
    action: "Completed lesson",
    course: "React Development",
    time: "2 hours ago",
    icon: "TrophyOutlined",
    color: "#52c41a",
  },
  {
    id: 2,
    action: "Started new course",
    course: "UI/UX Design",
    time: "1 day ago",
    icon: "BookOutlined",
    color: "#1890ff",
  },
  {
    id: 3,
    action: "Earned certificate",
    course: "JavaScript Basics",
    time: "3 days ago",
    icon: "TrophyOutlined",
    color: "#faad14",
  },
  {
    id: 4,
    action: "Submitted assignment",
    course: "Data Structures",
    time: "5 days ago",
    icon: "FileDoneOutlined",
    color: "#722ed1",
  },
];

export const upcomingLessons = [
  {
    id: 1,
    course: "React Development",
    lesson: "Advanced Hooks",
    time: "Today, 2:00 PM",
    duration: "45 min",
    instructor: "John Doe",
  },
  {
    id: 2,
    course: "UI/UX Design",
    lesson: "Prototyping Workshop",
    time: "Tomorrow, 10:00 AM",
    duration: "60 min",
    instructor: "Jane Smith",
  },
  {
    id: 3,
    course: "Data Science",
    lesson: "Data Visualization",
    time: "Friday, 3:00 PM",
    duration: "50 min",
    instructor: "Sarah Wilson",
  },
];

export const recommendedCourses = [
  {
    id: 1,
    title: "Node.js Backend Development",
    instructor: "Mike Johnson",
    rating: 4.8,
    students: 12500,
    thumbnail: "https://via.placeholder.com/200x120?text=Node.js",
    price: 89.99,
    category: "Development",
  },
  {
    id: 2,
    title: "Advanced CSS & Sass",
    instructor: "Lisa Brown",
    rating: 4.7,
    students: 8900,
    thumbnail: "https://via.placeholder.com/200x120?text=CSS",
    price: 69.99,
    category: "Design",
  },
  {
    id: 3,
    title: "Machine Learning Fundamentals",
    instructor: "David Wilson",
    rating: 4.9,
    students: 15600,
    thumbnail: "https://via.placeholder.com/200x120?text=ML",
    price: 99.99,
    category: "Data Science",
  },
];

export const learningGoals = [
  {
    id: 1,
    title: "Complete React Course",
    targetDate: "2023-12-15",
    progress: 75,
    courses: ["React Development Masterclass"],
  },
  {
    id: 2,
    title: "Learn UI/UX Design",
    targetDate: "2024-01-20",
    progress: 45,
    courses: ["UI/UX Design Fundamentals"],
  },
  {
    id: 3,
    title: "Data Science Specialization",
    targetDate: "2024-03-30",
    progress: 30,
    courses: ["Data Science with Python", "Machine Learning Fundamentals"],
  },
];
