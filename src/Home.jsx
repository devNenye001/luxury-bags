import React from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const Home = () => {
  const links = [
    {
      id: 1,
      title: "Luxury Catalog",
      description: "Explore our exclusive bag collection",
      url: "https://25243.x.yupoo.com",
      // Luxury Bag SVG Icon
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      )
    },
    {
      id: 2,
      title: "WhatsApp",
      description: "Chat with us on WhatsApp",
      url: "http://Wa.me//13022799377",
      // Official WhatsApp SVG Icon
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.43 5.63 1.432h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      )
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    show: { 
      opacity: 1, y: 0, scale: 1,
      transition: { type: "spring", stiffness: 60, damping: 15 }
    }
  };

  return (
    <div className="container">
      <Motion.div variants={container} initial="hidden" animate="show" className="card-wrapper">
        
        {/* Profile Section */}
        <Motion.header variants={item} className="profile-section">
          <div className="profile-image-container">
            <Motion.div 
               animate={{ rotate: [0, 5, -5, 0] }}
               transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
               className="profile-image"
            >
              <img src="pp2.jpg" alt="Luxury Bags" />
            </Motion.div>
          </div>
          <h1 className="shop-title">Luxury Bags</h1>
          <Motion.div 
            initial={{ width: 0 }} 
            animate={{ width: "60px" }} 
            transition={{ delay: 1, duration: 1 }}
            className="title-underline" 
          />
          <p className="shop-description">
            Shop your bags, tap on the link or message us to get started.
          </p>
        </Motion.header>

        {/* Links Section */}
        <nav className="links-container">
          {links.map((link) => (
            <Motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
              whileTap={{ scale: 0.98 }}
              className="link-card"
            >
              <div className="link-icon-wrapper">
                {link.icon}
              </div>
              <div className="link-content">
                <span className="link-title">{link.title}</span>
                <span className="link-subtitle">{link.description}</span>
              </div>
              <Motion.div 
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="arrow"
              >
                →
              </Motion.div>
            </Motion.a>
          ))}
        </nav>

        <Motion.footer variants={item} className="footer-text">
          Exclusive Quality & Style
        </Motion.footer>
      </Motion.div>
    </div>
  );
};

export default Home;