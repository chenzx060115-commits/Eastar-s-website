export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Eastar's Website
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Welcome to my personal website. This is a modern, fast, and responsive website built with React, Vite, and Tailwind CSS.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
            Learn More
          </button>
          <button className="px-6 py-3 border border-border rounded-lg hover:bg-card transition-colors">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  )
}
