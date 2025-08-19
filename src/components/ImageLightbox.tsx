import React, { useEffect, useMemo, useRef, useState } from 'react';

type ImageLightboxProps = {
  src: string;
  alt?: string;
  onClose: () => void;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const ImageLightbox: React.FC<ImageLightboxProps> = ({ src, alt = '', onClose }) => {
  const [scale, setScale] = useState<number>(1);
  const [translate, setTranslate] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const lastPointRef = useRef<{ x: number; y: number } | null>(null);
  const pinchStartDistanceRef = useRef<number | null>(null);
  const pinchStartScaleRef = useRef<number>(1);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '=')) { e.preventDefault(); setScale((s) => clamp(s + 0.25, 1, 5)); }
      if ((e.ctrlKey || e.metaKey) && e.key === '-') { e.preventDefault(); setScale((s) => clamp(s - 0.25, 1, 5)); }
      if (e.key === '0' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); resetView(); }
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.classList.add('modal-open');
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('modal-open');
    };
  }, [onClose]);

  const resetView = () => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  };

  const onWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.12 : -0.12;
    setScale((s) => clamp(Number((s + delta).toFixed(3)), 1, 5));
  };

  const onMouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (scale <= 1) return; // no pan if not zoomed
    setIsDragging(true);
    lastPointRef.current = { x: e.clientX, y: e.clientY };
  };

  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!isDragging || !lastPointRef.current) return;
    const dx = e.clientX - lastPointRef.current.x;
    const dy = e.clientY - lastPointRef.current.y;
    lastPointRef.current = { x: e.clientX, y: e.clientY };
    setTranslate((t) => ({ x: t.x + dx, y: t.y + dy }));
  };

  const endDrag = () => {
    setIsDragging(false);
    lastPointRef.current = null;
  };

  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (e.touches.length === 1) {
      if (scale <= 1) return;
      lastPointRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      setIsDragging(true);
    } else if (e.touches.length === 2) {
      const d = distance(e.touches[0], e.touches[1]);
      pinchStartDistanceRef.current = d;
      pinchStartScaleRef.current = scale;
      setIsDragging(false);
    }
  };

  const onTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (e.touches.length === 1 && isDragging && lastPointRef.current) {
      const dx = e.touches[0].clientX - lastPointRef.current.x;
      const dy = e.touches[0].clientY - lastPointRef.current.y;
      lastPointRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      setTranslate((t) => ({ x: t.x + dx, y: t.y + dy }));
    } else if (e.touches.length === 2 && pinchStartDistanceRef.current) {
      const d = distance(e.touches[0], e.touches[1]);
      const ratio = d / pinchStartDistanceRef.current;
      const next = clamp(pinchStartScaleRef.current * ratio, 1, 5);
      setScale(next);
    }
  };

  const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = () => {
    setIsDragging(false);
    lastPointRef.current = null;
    pinchStartDistanceRef.current = null;
  };

  const onDoubleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setScale((s) => (s === 1 ? 2 : 1));
    if (scale === 1) {
      setTranslate({ x: 0, y: 0 });
    }
  };

  const containerStyle = useMemo<React.CSSProperties>(() => ({
    cursor: isDragging ? 'grabbing' : scale > 1 ? 'grab' : 'auto',
    touchAction: 'none',
  }), [isDragging, scale]);

  const imgStyle = useMemo<React.CSSProperties>(() => ({
    transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
    transformOrigin: 'center center',
    maxWidth: '90vw',
    maxHeight: '90vh',
    userSelect: 'none',
    pointerEvents: 'auto',
    cursor: 'auto',
  }), [scale, translate.x, translate.y]);

  return (
    <div className="lightbox-overlay" role="dialog" aria-modal onClick={onClose}>
      <div
        className="lightbox-content"
        onWheel={onWheel}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={containerStyle}
        
      >
        <img
          className="lightbox-image"
          src={src}
          alt={alt}
          style={imgStyle}
          onClick={(e) => e.stopPropagation()}
          onDoubleClick={onDoubleClick}
        />
      </div>
    </div>
  );
};

export default ImageLightbox;

function distance(a: Touch, b: Touch): number {
  const dx = a.clientX - b.clientX;
  const dy = a.clientY - b.clientY;
  return Math.hypot(dx, dy);
}


