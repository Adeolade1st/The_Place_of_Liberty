import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const images = [
  {
    src: '/pics1.JPG',
    alt: 'Children in classroom',
    category: 'Classroom',
    span: 'col-span-2 row-span-2',
  },
  {
    src: '/pics2.JPG',
    alt: 'Art therapy session',
    category: 'Therapy',
    span: '',
  },
  {
    src: 'pics3.jpg',
    alt: 'Reading time',
    category: 'Learning',
    span: '',
  },
  {
    src: 'pics4.jpeg',
    alt: 'Group activity',
    category: 'Activities',
    span: '',
  },
  {
    src: 'pics5.jpeg',
    alt: 'Teacher assisting student',
    category: 'Teaching',
    span: '',
  },
  {
    src: 'pics6.jpg',
    alt: 'Sensory play',
    category: 'Therapy',
    span: '',
  },
  {
    src: 'pics7.JPG',
    alt: 'Outdoor play',
    category: 'Activities',
    span: 'col-span-2',
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="gallery" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 sr-hidden">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">
            Our Moments
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            A glimpse into daily life at The Place of Liberty — where every day brings new discoveries, smiles, and milestones.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px] sr-hidden">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative group cursor-pointer overflow-hidden rounded-xl ${img.span}`}
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <ZoomIn size={20} className="text-white" />
                  </div>
                  <span className="text-white text-xs font-semibold bg-orange-500 px-3 py-1 rounded-full">
                    {img.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="Close lightbox"
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <X size={24} />
          </button>
          <img
            src={lightbox}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
