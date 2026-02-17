import Head from 'next/head';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Jack Zemke | AI Engineer</title>
        <link rel="icon" href="/bold.ico" />
        <meta
          name="description"
          content="AI engineer building production LLM systems. Focused on on-premise deployment, RAG architecture, and making AI work for non-technical users."
        />
        <meta property="og:title" content="Jack Zemke - AI Engineer" />
        <meta
          property="og:description"
          content="AI engineer building production LLM systems. Focused on on-premise deployment, RAG architecture, and making AI work for non-technical users."
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <motion.h1
          className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          Hi, I&apos;m Jack Zemke.
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-stone-500 text-center max-w-md"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
        >
          I build AI systems that people actually use.
        </motion.p>
      </section>

      {/* About */}
      <section className="max-w-2xl mx-auto px-6 pb-16">
        <motion.div
          className="space-y-5 text-stone-700 leading-relaxed"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
          }}
        >
          <motion.p variants={fadeUp}>
            I&apos;m an AI engineer leading all AI initiatives at a 300-person engineering and
            construction consulting firm. I architect on-premise LLM infrastructure using
            llama.cpp, design RAG systems for document-heavy workflows, and work directly with
            executives on AI strategy. I report to the CEO, lead an 18-person AI pilot program
            that includes C-suite executives, and regularly present to company-wide audiences of
            150+ employees.
          </motion.p>

          <motion.p variants={fadeUp}>
            I graduated magna cum laude from Tulane University in May 2025 with degrees in
            Computer Science and Economics and a 3.95 GPA. My senior capstone,{' '}
            <a
              href="https://github.com/jackzemke/Entergy-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:text-[var(--accent-hover)]"
            >
              REGGIE
            </a>
            , an AI regulatory research tool built for Entergy, was awarded Most Outstanding
            Senior Capstone in Computer Science. Before Tulane, I studied Computer Engineering at
            UC Santa Cruz.
          </motion.p>

          <motion.p variants={fadeUp}>
            I&apos;m interested in the intersection of technical depth and real-world impact. I
            care about building AI systems that solve actual problems, not impressive demos. Right
            now I&apos;m particularly focused on on-premise AI deployment, RAG systems that work
            at scale, and making AI accessible to non-technical users.
          </motion.p>
        </motion.div>
      </section>
    </>
  );
}
