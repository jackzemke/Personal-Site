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

const stagger = {
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

export default function Work() {
  return (
    <>
      <Head>
        <title>Work | Jack Zemke</title>
        <link rel="icon" href="/bold.ico" />
      </Head>

      <section className="max-w-2xl mx-auto px-6 pt-24 pb-16 md:pt-28">
        <motion.h1
          className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900 mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          Work
        </motion.h1>

        {/* Current Role */}
        <motion.div
          className="mb-14"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-xl font-semibold text-stone-900">
              Souder, Miller &amp; Associates
            </h2>
            <p className="text-sm text-stone-400 mt-1">
              AI Engineer &middot; June 2025 &ndash; Present
            </p>
          </motion.div>

          <motion.p
            className="mt-4 text-stone-700 leading-relaxed"
            variants={fadeUp}
          >
            Leading all AI initiatives for a 300-person engineering and construction consulting
            firm. I built on-premise AI infrastructure using llama.cpp for local LLM deployment
            and shipped production RAG systems, managing the full lifecycle from discovery through
            adoption.
          </motion.p>

          <motion.ul
            className="mt-4 space-y-2 text-stone-700"
            variants={stagger}
          >
            {[
              'Architected multi-model AI infrastructure using llama.cpp, selecting different Llama variants based on task requirements\u2014long-context summarization vs. retrieval-augmented Q&A',
              'Delivered first production AI system in 6 months; currently developing 3 additional systems',
              'Lead 18-person AI pilot program including C-suite executives',
              'Present AI strategy to 150+ employees and serve as technical advisor on vendor evaluations',
            ].map((item, i) => (
              <motion.li
                key={i}
                className="flex gap-2 text-sm leading-relaxed"
                variants={fadeUp}
              >
                <span className="text-[var(--accent)] mt-1 shrink-0">&bull;</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            className="mt-4 text-xs text-stone-400"
            variants={fadeUp}
          >
            Python &middot; llama.cpp &middot; Weaviate &middot; FastAPI &middot; Streamlit &middot; Llama 3
          </motion.p>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-stone-200 mb-14" />

        {/* REGGIE */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-xl font-semibold text-stone-900">
              REGGIE &mdash; REGulatory Governance Inquiry Engine
            </h2>
            <p className="text-sm text-stone-400 mt-1">
              Project Manager &middot; Fall 2024 &ndash; Spring 2025
            </p>
          </motion.div>

          <motion.p
            className="mt-4 text-stone-700 leading-relaxed"
            variants={fadeUp}
          >
            Led a 5-person team building a RAG chatbot for Entergy&apos;s Compliance and Investor
            Relations teams. The system streamlined Public Service Commission filing research using
            semantic search and LLM-powered Q&amp;A, replacing hours of manual document review.
            Awarded{' '}
            <span className="font-medium text-stone-900">
              Most Outstanding Senior Capstone
            </span>{' '}
            in Computer Science.
          </motion.p>

          <motion.p
            className="mt-4 text-xs text-stone-400"
            variants={fadeUp}
          >
            Python &middot; Weaviate &middot; Cohere &middot; FastAPI &middot; Streamlit
          </motion.p>

          <motion.div className="mt-3" variants={fadeUp}>
            <a
              href="https://github.com/jackzemke/Entergy-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--accent)] hover:text-[var(--accent-hover)]"
            >
              View on GitHub &rarr;
            </a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
