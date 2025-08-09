import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

type CategoryKey =
  | 'programming'
  | 'frontend'
  | 'backend'
  | 'databases'
  | 'tools'
  | 'iot';

const StackByCategory: React.FC = () => {
  const [active, setActive] = useState<CategoryKey | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('modal-open', active !== null);
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.body.classList.remove('modal-open');
      }
    };
  }, [active]);

  const categories = useMemo(
    () => (
      [
        {
          key: 'programming' as const,
          label: 'Programming Languages',
          items: [
            'Python',
            'Java',
            'JavaScript',
            'C/C++',
            'PHP',
            'Assembly',
            'Shell/Bash',
            'Dart',
          ],
        },
        {
          key: 'frontend' as const,
          label: 'Frontend Technologies',
          items: ['HTML', 'CSS', 'JavaScript', 'Flutter', 'Next.js', 'React'],
        },
        {
          key: 'backend' as const,
          label: 'Backend Technologies',
          items: ['Laravel', 'Django', 'Node.js'],
        },
        {
          key: 'databases' as const,
          label: 'Databases',
          items: ['MySQL', 'Firebase', 'SQLite', 'MSSQL', 'MariaDB'],
        },
        {
          key: 'tools' as const,
          label: 'Tools & Platforms',
          items: ['Git', 'GitHub', 'Docker'],
        },
        {
          key: 'iot' as const,
          label: 'IoT & Embedded Systems',
          items: ['Arduino', 'ESP‑IDF', 'Node‑RED', 'Raspberry Pi', 'MicroPython'],
        },
      ]
    ),
    []
  );

  const activeCategory = categories.find((c) => c.key === active) || null;

  return (
    <div className="stack-by-category">
      <div className="stack-categories">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`category-btn${active === cat.key ? ' is-active' : ''}`}
            onClick={() => setActive(cat.key)}
            aria-expanded={active === cat.key}
            aria-controls={`stack-popout-${cat.key}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {activeCategory &&
        createPortal(
          <div className="stack-popout" role="dialog" aria-modal="true">
            <div
              id={`stack-popout-${activeCategory.key}`}
              className="stack-popout-card"
            >
              <div className="popout-header">
                <div className="popout-title">{activeCategory.label}</div>
                <button className="popout-close" onClick={() => setActive(null)} aria-label="Close">
                  ×
                </button>
              </div>
              <div className="popout-content">
                {activeCategory.items.map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="stack-popout-backdrop" onClick={() => setActive(null)} />
          </div>,
          document.body
        )}
    </div>
  );
};

export default StackByCategory;


