import './GoogleMap.css';

export function GoogleMap() {
  return (
    
    <iframe
      title="Google Map"
      className="map-container"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.6219113775524!2d-84.64140548908625!3d10.451547065058483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa00df77c969a71%3A0x4196927540e97ec3!2sDelicias%20Fortune%C3%B1as!5e0!3m2!1ses-419!2scr!4v1767470905301!5m2!1ses-419!2scr"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    />
    
  );
}

