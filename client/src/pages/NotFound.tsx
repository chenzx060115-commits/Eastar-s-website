import { useLocation } from 'wouter'
import { motion } from 'framer-motion'

export default function NotFound() {
  const [, setLocation] = useLocation()

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-8xl font-bold glow-text mb-4">404</h1>
        <p className="text-2xl mb-8 text-[rgb(var(--foreground))]/70">页面未找到</p>
        <p className="text-[rgb(var(--foreground))]/60 mb-8">抱歉，您访问的页面不存在。</p>
        <button
          onClick={() => setLocation('/')}
          className="glow-button text-white"
        >
          返回首页
        </button>
      </motion.div>
    </div>
  )
}
