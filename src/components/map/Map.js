export default function Map() {
  return (
    <div className="mt-8">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.817116783624!2d38.7768816500576!3d8.989174409893874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b857399188aed%3A0x6d11848db93467f1!2sICON%20Import%20%26%20Export!5e0!3m2!1sen!2sbd!4v1673010494671!5m2!1sen!2sbd"
        width="100%"
        height="450"
        className="border-none"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="map"
      ></iframe>
    </div>
  );
}
