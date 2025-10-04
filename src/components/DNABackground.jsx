
import bgVideo from "../assets/854228-hd_1920_1080_30fps.mp4";

export default function DNABackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
       
        muted
        playsInline
      >
         <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    
    </div>
  );
}
