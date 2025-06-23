
import AnimatedBlob from '../components/animantedblob';
import NavBar from '@/components/navbar';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
    <NavBar/>
    <div className="absolute inset-0 -z-10 overflow-hidden"> 
          <AnimatedBlob
            className="bg-pink-400"
            style={{ top: '5%', left: '0%', width: 800, height: 800 }}
          />
          <AnimatedBlob
            className="bg-blue-400"
            style={{ bottom: '0%', right: '0%', width: 900, height: 900 }}
          />
          <AnimatedBlob
            className="bg-purple-400"
            style={{ top: '20%', right: '20%', width: 800, height: 800 }}
          />
          <AnimatedBlob
            className="bg-yellow-300"
            style={{ bottom: '10%', left: '10%', width: 850, height: 850 }}
          />
        </div>    
      <h1 className="text-4xl font-semibold mb-4 text-blue-700">About Me</h1>
      <p className="text-gray-700 max-w-2xl text-center leading-relaxed">
        Hi! I&apos;m Jack Zemke. I am a software developer and AI enthusiast excited about building tools that help people work smarter. 
        I recently graduated from Tulane, and I&apos;ve managed the full lifecycle of numerous 
        AI systems in both academic and industry settings, from conception all the way to deployment.
        <br /><br />
        I care deeply about ensuring AI is used responsibly, providing clarity in design, and creating systems that feel intuitive and powerful.
      </p>
    <footer className="fixed bottom-0 w-full text-center text-xs text-gray-500 pb-2">
      © 2025 Jack Zemke. All rights reserved.
      </footer>
    </div>
  );
}