import { useState, useEffect } from 'react';


const Gototop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };


    window.addEventListener('scroll', toggleVisibility);


    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <div
          className="back-to-top"
          onClick={scrollToTop}
        >
          <span>UP</span>
        </div>
      )}

      <style jsx>{`
        .back-to-top {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          background-color: #808080;
          color: #fff;
          border-radius: 10%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          opacity: 0.7;
          transition: opacity 0.3s;
        }

        .back-to-top:hover {
          opacity: 1;
        }

        .back-to-top span {
          font-size: 20px;
        }
      `}</style>
    </>
  );
};

export default Gototop;
