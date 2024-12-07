// components/View360.
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { Viewer } from 'photo-sphere-viewer';

const View360 = () => {
  const viewerRef = useRef(null);

  useEffect(() => {
    if (viewerRef.current) {
      const viewer = new Viewer({
        container: viewerRef.current,
        panorama: '/images/360.jpg',
        navbar: false,
        defaultLat: 0.3,
        defaultZoomLvl: 30, 
      });

      viewer.on('ready', () => {
        viewerRef.current.style.height = '100%';
      });

      return () => {
        viewer.destroy();
      };
    }
  }, []);

  return (
    <div className="text-center my-8">
      <div
        ref={viewerRef}
        className="w-full max-w-4xl mx-auto h-[400px] lg:h-[500px] border border-[#6300a3] rounded-md shadow-lg overflow-hidden"
      ></div>
      <div className='my-32'>
      <Link href="/" legacyBehavior>
          <a className="inline-block bg-[#6300a3] text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-600">
            Back to Home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default View360;
