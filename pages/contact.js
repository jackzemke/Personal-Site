import Head from 'next/head';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const links = [
  {
    label: 'jzemke@tulane.edu',
    href: 'mailto:jzemke@tulane.edu',
    icon: HiOutlineMail,
    external: false,
  },
  {
    label: 'linkedin.com/in/jack-zemke',
    href: 'https://www.linkedin.com/in/jack-zemke/',
    icon: FaLinkedin,
    external: true,
  },
  {
    label: 'github.com/jackzemke',
    href: 'https://github.com/jackzemke',
    icon: FaGithub,
    external: true,
  },
];

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Jack Zemke</title>
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
          Get in touch
        </motion.h1>

        <motion.p
          className="text-stone-500 leading-relaxed mb-10"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
        >
          I&apos;m always interested in talking about AI systems, production deployment
          challenges, or interesting technical problems. Feel free to reach out.
        </motion.p>

        <motion.div
          className="space-y-4"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } },
          }}
        >
          {links.map(({ label, href, icon: Icon, external }) => (
            <motion.a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-3 group"
              variants={fadeUp}
            >
              <Icon className="w-5 h-5 text-stone-400 group-hover:text-[var(--accent)] transition-colors shrink-0" />
              <span className="text-stone-700 group-hover:text-[var(--accent)] transition-colors text-sm">
                {label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </section>
    </>
  );
}
