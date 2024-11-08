import Layout from "@/components/layout/Layout";
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function NotFoundPage() {
  const canvasRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = document.documentElement.clientWidth;
      canvas.height = document.documentElement.clientHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const characters = 'KOINOS404アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const charArray = characters.split('');
    
    const fontSize = Math.min(16, window.innerWidth / 50);
    const columns = canvas.width / fontSize;
    const drops = [];
    
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -100);
    }

    // Updated gradient with purple colors
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#9966FF');  // Main purple
    gradient.addColorStop(0.5, '#9966FF');
    gradient.addColorStop(1, '#4B3280');  // Darker purple for fade

    const draw = () => {
      ctx.fillStyle = 'rgba(18, 18, 18, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = gradient;
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        
        if (Math.random() < 0.1) {
          ctx.fillStyle = '#fff'; // Bright white for highlights
        } else {
          ctx.fillStyle = gradient;
        }
        
        ctx.fillText(char, x, y);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i]+= 0.5;
      }
    };

    let animationFrameId;
    const animate = () => {
      draw();
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <Layout headerStyle={1} footerStyle={3}>
      <div>
        <section id="page-404">
          <style jsx>{`
            #page-404 {
              background-color: #121212;
              min-height: 100vh;
              display: flex;
              align-items: center;
              position: relative;
              overflow: hidden;
              margin: 0;
              padding: 0;
            }

            .matrix-canvas {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              z-index: 1;
              overflow: hidden;
            }

            .content-wrapper {
              position: relative;
              z-index: 2;
              padding: clamp(1rem, 3vh, 3rem);
              margin: 0;
              border-radius: 16px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              min-height: 100vh;
            }

            .page-404-txt {
              padding-top: env(safe-area-inset-top);
            }

            .glitch-text {
              font-size: clamp(80px, 25vw, 180px);
              font-weight: 800;
              color: #fff;
              text-shadow: 
                0 0 5px #fff,
                0 0 10px #fff,
                0 0 20px #9966FF,
                0 0 30px #9966FF,
                0 0 40px #9966FF;
              opacity: ${isLoaded ? '1' : '0'};
              transform: scale(${isLoaded ? '1' : '0.8'});
              transition: all 0.5s ease-out;
            }

            .page-404-heading {
              color: #fff;
              font-size: clamp(1.5rem, 5vw, 2.5rem);
              font-weight: 700;
              margin: 2rem 0 1rem;
              text-transform: uppercase;
              letter-spacing: 2px;
              text-shadow: 0 0 10px rgba(153, 102, 255, 0.5);
            }

            .page-404-subtext {
              color: #a3a3a3;
              font-size: clamp(1rem, 3vw, 1.25rem);
              max-width: 600px;
              margin: 0 auto 2rem auto;
              padding: 0 1rem;
            }

            :global(.gradient-border-btn) {
              position: relative;
              display: inline-flex;
              padding: clamp(0.5rem, 2vw, 0.75rem) clamp(1rem, 4vw, 2rem);
              border-radius: 8px;
              background: #121212;
              color: #fff;
              text-decoration: none;
              font-weight: 500;
              text-transform: uppercase;
              letter-spacing: 2px;
              transition: all 0.3s ease;
              box-shadow:
                0 0 5px rgba(153, 102, 255, 0.5),
                0 0 10px rgba(153, 102, 255, 0.3),
                inset 0 0 5px rgba(153, 102, 255, 0.5),
                inset 0 0 10px rgba(153, 102, 255, 0.3);
              font-size: clamp(0.875rem, 2.5vw, 1rem);
            }

            :global(.gradient-border-btn:hover) {
              transform: translateY(-2px);
              background: #1a1a1a;
              color: #fff;
              text-shadow: 
                0 0 5px #fff,
                0 0 10px #fff,
                0 0 20px #9966FF,
                0 0 30px #9966FF,
                0 0 40px #9966FF,
                0 0 50px #9966FF;
              box-shadow:
                0 0 10px rgba(153, 102, 255, 0.7),
                0 0 20px rgba(153, 102, 255, 0.5),
                inset 0 0 10px rgba(153, 102, 255, 0.7),
                inset 0 0 20px rgba(153, 102, 255, 0.5);
            }

            @keyframes float {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-20px);
              }
            }

            .content-wrapper {
              animation: float 6s ease-in-out infinite;
              box-shadow: none !important;
              -webkit-box-shadow: none !important;
              -moz-box-shadow: none !important;
            }

            @media (max-width: 480px) {
              .content-wrapper {
                padding: max(1rem, 3vh) 1rem;
                min-height: 100vh;
                animation: none;
                justify-content: center;
              }

              .page-404-txt {
                margin-top: -10vh;
              }
            }
          `}</style>

          <canvas ref={canvasRef} className="matrix-canvas" />

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-8">
                <div className="content-wrapper">
                  <div className="page-404-txt text-center">
                    <div className="glitch-text">404</div>

                    <div className="text-content">
                      <h2 className="page-404-heading">There is no spoon</h2>
                      <h6 className="page-404-subtext">
                        It is not the spoon that bends, it is only yourself.
                      </h6>
                    </div>

                    <div className="button-wrapper">
                      <Link href="/" className="gradient-border-btn">
                        Back to the Real World
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}