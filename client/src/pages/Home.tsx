import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, GraduationCap } from 'lucide-react'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <div className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-[rgb(var(--border))]/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold glow-text">Eastar</div>
          <div className="flex gap-8 items-center">
            <a href="#about" className="hover:text-[rgb(var(--primary))] transition">关于</a>
            <a href="#experience" className="hover:text-[rgb(var(--primary))] transition">经验</a>
            <a href="#projects" className="hover:text-[rgb(var(--primary))] transition">项目</a>
            <a href="#contact" className="hover:text-[rgb(var(--primary))] transition">联系</a>
          </div>
        </div>
      </nav>

      {/* 英雄区 */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 glow-text"
            variants={itemVariants}
          >
            陈泽星
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-[rgb(var(--foreground))]/80"
            variants={itemVariants}
          >
            学生 | 销售专业人士 | 全栈开发者
          </motion.p>
          <motion.p
            className="text-lg mb-12 text-[rgb(var(--foreground))]/60 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            用代码和创意打造未来。深圳罗湖高级中学毕业，具备多年班长经验，擅长沟通与领导。
          </motion.p>
          <motion.div
            className="flex gap-4 justify-center"
            variants={itemVariants}
          >
            <button className="glow-button text-white">探索我的作品</button>
            <button className="px-6 py-3 rounded-lg border border-[rgb(var(--primary))]/50 hover:border-[rgb(var(--primary))] transition">
              获取联系
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* 关于部分 */}
      <section id="about" className="py-20 px-6 bg-[rgb(var(--background))]/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-12 glow-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            关于我
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Code2, title: '技术栈', desc: 'React, TypeScript, Tailwind CSS, Node.js' },
              { icon: Briefcase, title: '经验', desc: '销售、领导力、项目管理、团队协作' },
              { icon: GraduationCap, title: '教育', desc: '深圳罗湖高级中学 | 班长（多年）' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="card-glass"
                variants={itemVariants}
              >
                <item.icon className="w-12 h-12 mb-4 text-[rgb(var(--primary))]" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-[rgb(var(--foreground))]/70">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 工作经验 */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-12 glow-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            工作经验
          </motion.h2>
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: '班长', org: '深圳罗湖高级中学', period: '多年', desc: '领导班级日常事务，组织班级活动，与师生沟通协调' },
              { title: '销售专业人士', org: '多个行业', period: '持续中', desc: '具备优秀的沟通能力和销售技巧，能够有效建立客户关系' },
            ].map((exp, idx) => (
              <motion.div
                key={idx}
                className="card-glass"
                variants={itemVariants}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-semibold">{exp.title}</h3>
                  <span className="text-[rgb(var(--primary))]">{exp.period}</span>
                </div>
                <p className="text-[rgb(var(--foreground))]/70 mb-3">{exp.org}</p>
                <p className="text-[rgb(var(--foreground))]/60">{exp.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bento Box 项目 */}
      <section id="projects" className="py-20 px-6 bg-[rgb(var(--background))]/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-12 glow-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            精选项目
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-6 auto-rows-max"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: '赛博朋克作品集', desc: '深色风格、液态玻璃效果、视差滚动', size: 'md:col-span-2 md:row-span-2' },
              { title: '多语言支持', desc: '简中、繁中、英文', size: '' },
              { title: '交互动效', desc: '平滑过渡、呼吸灯效果', size: '' },
              { title: 'Bento Box 布局', desc: '创意网格设计', size: 'md:col-span-2' },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                className={`card-glass group cursor-pointer ${project.size}`}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-[rgb(var(--primary))] transition">
                      {project.title}
                    </h3>
                    <p className="text-[rgb(var(--foreground))]/70">{project.desc}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 mt-4 opacity-0 group-hover:opacity-100 transition" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 联系方式 */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-12 glow-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            联系我
          </motion.h2>
          <motion.div
            className="flex gap-6 justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Mail, href: 'mailto:eastar@example.com', label: '邮件' },
              { icon: Github, href: 'https://github.com/Eastar', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                className="card-glass p-4 hover:breathing-light"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="border-t border-[rgb(var(--border))]/20 py-8 px-6 text-center text-[rgb(var(--foreground))]/60">
        <p>© 2026 Eastar. 保留所有权利。</p>
      </footer>
    </div>
  )
}
