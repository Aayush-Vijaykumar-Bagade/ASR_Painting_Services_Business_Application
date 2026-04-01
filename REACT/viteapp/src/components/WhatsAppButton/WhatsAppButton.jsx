import './WhatsAppButton.css';

const WHATSAPP_NUMBER = '91XXXXXXXXXX';
const CALL_NUMBER = '+91XXXXXXXXXX';

export default function WhatsAppButton() {
  const waMessage = encodeURIComponent(
    'Hello ASR Painting Services! I\'d like to enquire about your painting services and book a free consultation.'
  );

  return (
    <>
      <div className="whatsapp-fab">
        <div className="whatsapp-tooltip">Chat with us on WhatsApp</div>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
          className="whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <span className="whatsapp-pulse" />
          <span className="whatsapp-pulse whatsapp-pulse-2" />
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>

      <div className="call-fab">
        <a
          href={`tel:${CALL_NUMBER}`}
          className="call-btn"
          aria-label="Call us"
          title="Call ASR Painting Services"
        >
          <i className="fas fa-phone"></i>
        </a>
      </div>
    </>
  );
}
