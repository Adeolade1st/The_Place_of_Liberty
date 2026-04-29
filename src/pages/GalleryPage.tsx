import { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

//type Category = 'All' | 'Classroom' | 'Therapy' | 'Activities' | 'Events' | 'Community';

const allImages: { src: string; alt: string; category: Exclude<Category, 'All'>; caption: string }[] = [
  {
    src: '/pics12.jpg',
    alt: 'Children in classroom',
    category: 'Classroom',
    caption: 'Our bright, welcoming classroom where learning comes alive every day.',
  },
  {
    src: 'pics11.jpg',
    alt: 'Art therapy session',
    category: 'Therapy',
    caption: 'Art therapy helps children express emotions and build fine motor skills.',
  },
  {
    src: 'pics11.PNG',
    alt: 'Reading time',
    category: 'Classroom',
    caption: 'Storytime sessions nurture language development and imagination.',
  },
  {
    src: 'pics10.jpg',
    alt: 'Group activity',
    category: 'Activities',
    caption: 'Group activities build teamwork, communication, and social bonds.',
  },
  {
    src: 'pics9.JPG',
    alt: 'Teacher with student',
    category: 'Classroom',
    caption: 'One-on-one teaching time ensures every child gets personalised attention.',
  },
  {
    src: 'pics8.JPG',
    alt: 'Sensory play',
    category: 'Therapy',
    caption: 'Sensory integration activities help children regulate and focus.',
  },
  {
    src: 'pics7.JPG',
    alt: 'Outdoor play',
    category: 'Activities',
    caption: 'Outdoor play promotes physical development and wellbeing.',
  },
  {
    src: 'pics6.jpg',
    alt: 'Speech therapy',
    category: 'Therapy',
    caption: 'Speech therapy sessions support communication development.',
  },
  {
    src: 'pics5.jpeg',
    alt: 'Community outreach',
    category: 'Community',
    caption: 'We extend our care beyond the school into the wider community.',
  },
  {
    src: 'pics4.jpeg',
    alt: 'Graduation ceremony',
    category: 'Events',
    caption: 'Celebrating each child\'s milestones at our annual graduation ceremony.',
  },
  {
    src: 'pics3.jpg',
    alt: 'Parent engagement day',
    category: 'Events',
    caption: 'Parents participate in workshops and open days to support their children at home.',
  },
  {
    src: 'pics2.JPG',
    alt: 'Music therapy',
    category: 'Therapy',
    caption: 'Music therapy brings joy and improves cognitive and emotional skills.',
  },
];

const categories: Category[] = ['All', 'Classroom', 'Therapy', 'Activities', 'Events', 'Community']

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? allImages
    : allImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  const nextImage = () => setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero banner */}
      <div
        className="relative py-20 px-4 text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(21,128,61,0.88), rgba(21,128,61,0.93)), url('/pics1.JPG')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <p className="text-orange-300 font-semibold text-sm uppercase tracking-wider mb-2">Our Moments</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
        <p className="text-green-100 max-w-xl mx-auto leading-relaxed">
          A window into daily life at The Place of Liberty — where every day brings new smiles, discoveries, and milestones worth celebrating.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border-2 ${
                activeCategory === cat
                  ? 'bg-orange-500 border-orange-500 text-white shadow-sm'
                  : 'bg-white border-gray-200 text-gray-700 hover:border-orange-300 hover:text-orange-600'
              }`}
            >
              {cat}
              <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${activeCategory === cat ? 'bg-white/20' : 'bg-gray-100'}`}>
                {cat === 'All' ? allImages.length : allImages.filter((i) => i.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className="break-inside-avoid group relative cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="inline-flex items-center gap-1 text-white text-xs font-semibold bg-orange-500 px-2.5 py-1 rounded-full self-start mb-2">
                  {img.category}
                </span>
                <p className="text-white text-sm leading-snug">{img.caption}</p>
              </div>
              <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn size={16} className="text-white" />
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400">No images in this category yet.</div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            aria-label="Close"
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-10"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>

          {/* Prev */}
          <button
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-orange-500 rounded-full p-3 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <ChevronLeft size={22} />
          </button>

          {/* Image */}
          <div
            className="relative max-w-4xl w-full mx-16 md:mx-24"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              className="w-full max-h-[75vh] object-contain rounded-xl"
            />
            <div className="mt-3 text-center">
              <span className="inline-block bg-orange-500 text-white text-xs px-3 py-1 rounded-full mb-2">
                {filtered[lightboxIndex].category}
              </span>
              <p className="text-gray-300 text-sm">{filtered[lightboxIndex].caption}</p>
              <p className="text-gray-500 text-xs mt-2">{lightboxIndex + 1} / {filtered.length}</p>
            </div>
          </div>

          {/* Next */}
          <button
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-orange-500 rounded-full p-3 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </div>
  );
}
