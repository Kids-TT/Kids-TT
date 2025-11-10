import './App.css';
import { useCallback, useState } from 'react';
import emailjs from '@emailjs/browser';
import HeroSection from './components/HeroSection';
import MediaGallery from './components/MediaGallery';
import ContactSection from './components/ContactSection';
import SiteFooter from './components/SiteFooter';
import { mediaItems } from './data/mediaItems';

function App() {
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);

  const handleContactSubmit = useCallback((event) => {
    event.preventDefault();
    if (isSending) {
      return;
    }

    const formData = new FormData(event.target);
    const payload = Object.fromEntries(formData.entries());

    setIsSending(true);
    setSendStatus(null);

    emailjs
      .send('service_0542qpl', 'template_2u9q7vk', payload, 'q0FolUKMIhQqE4HQE')
      .then(() => {
        setSendStatus('success');
        event.target.reset();
      })
      .catch(() => {
        setSendStatus('error');
      })
      .finally(() => {
        setIsSending(false);
      });
  }, [isSending]);

  return (
    <div className="page">
      <HeroSection />
      <main>
        <MediaGallery items={mediaItems} />
        <ContactSection
          onSubmit={handleContactSubmit}
          isSending={isSending}
          sendStatus={sendStatus}
        />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
