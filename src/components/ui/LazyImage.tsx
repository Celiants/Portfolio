import { useRef, useState, useEffect } from 'react'

interface Props {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
  objectPosition?: string
}

export default function LazyImage({ src, alt, className, style, objectPosition }: Props) {
  const [loaded, setLoaded] = useState(false)
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={className} style={{ position: 'relative', overflow: 'hidden', ...style }}>
      {inView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: objectPosition ?? 'top',
            transition: 'opacity 0.6s ease, filter 0.6s ease',
            opacity: loaded ? 1 : 0,
            filter: loaded ? 'blur(0px)' : 'blur(8px)',
          }}
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  )
}
