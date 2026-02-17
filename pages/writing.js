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

const topics = [
  'Deploying Llama models on-premise with llama.cpp',
  'Building RAG systems for non-technical users',
  'Task-specific model selection in production',
  'On-premise AI infrastructure for sensitive data',
  'What I learned shipping AI systems in a non-tech company',
  'The reality of "prompt engineering" vs. actual system design',
];

export default function Writing() {
  return (
    <>
      <Head>
        <title>Writing | Jack Zemke</title>
        <link rel="icon" href="/bold.ico" />
      </Head>

      <section className="max-w-2xl mx-auto px-6 pt-24 pb-16 md:pt-28">
        <motion.h1
          className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900 mb-4"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          Writing
        </motion.h1>

        <motion.p
          className="text-stone-500 leading-relaxed mb-10"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
        >
          I write about AI systems, deployment, and what I&apos;m learning while building.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } },
          }}
        >
          <motion.p
            className="text-sm font-medium text-stone-400 uppercase tracking-wide mb-4"
            variants={fadeUp}
          >
            Topics I&apos;m writing about
          </motion.p>

          <ul className="space-y-3 mb-12">
            {topics.map((topic, i) => (
              <motion.li
                key={i}
                className="flex gap-3 text-stone-700 text-sm leading-relaxed"
                variants={fadeUp}
              >
                <span className="text-stone-300 mt-px shrink-0">&mdash;</span>
                <span>{topic}</span>
              </motion.li>
            ))}
          </ul>

          <motion.p
            className="text-stone-500 text-sm border-l-2 border-[var(--accent)] pl-4"
            variants={fadeUp}
          >
            First post coming soon. I&apos;m focusing on practical, technical content about
            production AI systems&mdash;not hot takes or hype.
          </motion.p>
        </motion.div>
      </section>
    </>
  );
}
