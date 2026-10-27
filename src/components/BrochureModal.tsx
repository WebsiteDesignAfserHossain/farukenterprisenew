import React, { useState } from 'react';
import { BROCHURE_PAGES, COMPANY_INFO } from '../data/brochureData';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Maximize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  BookOpen,
  FileCheck,
} from 'lucide-react';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPage?: number;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  isOpen,
  onClose,
  initialPage = 1,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  if (!isOpen) return null;

  const totalPages = BROCHURE_PAGES.length;
  const currentItem = BROCHURE_PAGES[currentPage - 1];

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      setZoomLevel(1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      setZoomLevel(1);
    }
  };

  const handleZoomIn = () => setZoomLevel((z) => Math.min(z + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((z) => Math.max(z - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-4">
      <div className="relative w-full max-w-5xl h-[94vh] bg-neutral-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-emerald-900/60">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-neutral-950 border-b border-neutral-800 text-white">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-emerald-900/80 text-emerald-300">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white tracking-wide flex items-center gap-2">
                FARUK ENTERPRISE BROCHURE
                <span className="hidden sm:inline-block text-xs bg-emerald-700/60 text-emerald-200 px-2 py-0.5 rounded-full font-mono">
                  Official PDF
                </span>
              </h3>
              <p className="text-xs text-neutral-400 line-clamp-1">
                Page {currentPage} of {totalPages}: {currentItem.title}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Download PDF button */}
            <a
              href={COMPANY_INFO.pdfUrl}
              download={COMPANY_INFO.pdfFileName}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-xs transition-colors"
              title="Download original brochure PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            {/* Close modal */}
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Viewer Area */}
        <div className="relative flex-1 bg-neutral-950/70 overflow-auto flex items-center justify-center p-2 sm:p-6">
          <div
            className="transition-transform duration-200 ease-out origin-center flex items-center justify-center max-w-full"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="max-h-[74vh] w-auto max-w-full rounded-lg shadow-2xl object-contain border border-neutral-800"
            />
          </div>

          {/* Floating Navigation Controls */}
          <button
            onClick={handlePrev}
            disabled={currentPage <= 1}
            className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 text-white hover:bg-emerald-700 transition-all backdrop-blur-xs cursor-pointer shadow-lg ${
              currentPage <= 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-90 hover:opacity-100'
            }`}
            aria-label="Previous page"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage >= totalPages}
            className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 text-white hover:bg-emerald-700 transition-all backdrop-blur-xs cursor-pointer shadow-lg ${
              currentPage >= totalPages ? 'opacity-30 cursor-not-allowed' : 'opacity-90 hover:opacity-100'
            }`}
            aria-label="Next page"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Floating Zoom Tools */}
          <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-neutral-900/90 border border-neutral-700/80 rounded-lg p-1 text-white shadow-lg backdrop-blur-sm">
            <button
              onClick={handleZoomOut}
              className="p-1.5 hover:bg-neutral-800 rounded text-neutral-300 hover:text-white"
              title="Zoom out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-[11px] px-1 font-mono text-emerald-400">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              className="p-1.5 hover:bg-neutral-800 rounded text-neutral-300 hover:text-white"
              title="Zoom in"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetZoom}
              className="p-1.5 hover:bg-neutral-800 rounded text-neutral-300 hover:text-white"
              title="Reset Zoom"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Thumbnail Strip */}
        <div className="h-20 bg-neutral-950 border-t border-neutral-800 px-4 py-2 flex items-center gap-2 overflow-x-auto scrollbar-thin">
          {BROCHURE_PAGES.map((page) => {
            const isSelected = page.pageNumber === currentPage;
            return (
              <button
                key={page.pageNumber}
                onClick={() => {
                  setCurrentPage(page.pageNumber);
                  setZoomLevel(1);
                }}
                className={`relative flex-shrink-0 h-16 w-12 rounded overflow-hidden border-2 transition-all cursor-pointer ${
                  isSelected
                    ? 'border-emerald-500 scale-105 shadow-md shadow-emerald-900/50'
                    : 'border-neutral-800 opacity-60 hover:opacity-90'
                }`}
                title={`Jump to Page ${page.pageNumber}: ${page.title}`}
              >
                <img
                  src={page.image}
                  alt={`Thumbnail ${page.pageNumber}`}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 inset-x-0 bg-black/80 text-[9px] text-center font-bold text-white py-0.5">
                  {page.pageNumber}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
