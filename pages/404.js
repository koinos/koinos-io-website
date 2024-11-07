import Layout from "@/components/layout/Layout"
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
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ404アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const charArray = characters.split('');
    
    const fontSize = 16;
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
        
        drops[i]++;
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
    <Layout headerStyle={1} footerStyle={1} headerCls="navbar-dark">
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
            }

            .matrix-canvas {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: 1;
            }

            .content-wrapper {
              position: relative;
              z-index: 2;
              padding: 3rem;
              border-radius: 16px;
              box-shadow: 0 0 30px rgba(153, 102, 255, 0.1);
            }

            .glitch-text {
              font-size: 180px;
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
              font-size: 2.5rem;
              font-weight: 700;
              margin: 2rem 0 1rem;
              text-transform: uppercase;
              letter-spacing: 2px;
              text-shadow: 0 0 10px rgba(153, 102, 255, 0.5);
            }

            .page-404-subtext {
              color: #a3a3a3;
              font-size: 1.25rem;
              max-width: 600px;
              margin: 0 auto 2rem auto;
            }

            .gradient-border-btn {
              position: relative;
              display: inline-flex;
              padding: 0.75rem 2rem;
              border-radius: 8px;
              background: rgba(18, 18, 18, 0.9);
              color: #9966FF;
              text-decoration: none;
              font-weight: 500;
              text-transform: uppercase;
              letter-spacing: 2px;
              isolation: isolate;
              overflow: hidden;
              transition: all 0.3s ease;
            }

            .gradient-border-btn::before {
              content: '';
              position: absolute;
              inset: -2px;
              background: #9966FF;
              opacity: 0.7;
              z-index: -2;
            }

            .gradient-border-btn::after {
              content: '';
              position: absolute;
              inset: 2px;
              background: rgba(18, 18, 18, 0.9);
              border-radius: 6px;
              z-index: -1;
            }

            .gradient-border-btn:hover {
              transform: translateY(-2px);
              color: #fff;
              text-shadow: 0 0 10px #9966FF;
            }

            .gradient-border-btn:hover::before {
              opacity: 1;
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
                      <h2 className="page-404-heading">Reality Not Found</h2>
                      <h6 className="page-404-subtext">
                        The digital realm you seek exists beyond our current dimension
                      </h6>
                    </div>

                    <div className="button-wrapper">
                      <Link href="/demo-1" className="gradient-border-btn">
                        Return to Reality
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