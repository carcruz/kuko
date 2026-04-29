import { useEffect, useState } from 'react'

export default function ReadingProgress({ targetId }: { targetId: string }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = document.getElementById(targetId)
    if (!el) return

    const onScroll = () => {
      const rect = el.getBoundingClientRect()
      const pct = (-rect.top / (rect.height - window.innerHeight)) * 100
      setProgress(Math.min(100, Math.max(0, pct)))
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [targetId])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent pointer-events-none">
      <div
        className="h-full bg-[#00A896]"
        style={{ width: `${progress}%`, transition: 'width 60ms linear' }}
      />
    </div>
  )
}
