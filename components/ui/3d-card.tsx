import * as React from 'react';

import { cn } from '@/lib/utils';

type CardContainerProps = {
  containerClassName?: string;
  children: React.ReactNode;
};

export function CardContainer({ containerClassName, children }: CardContainerProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = React.useState<React.CSSProperties>({
    transform: 'perspective(1400px) rotateX(0deg) rotateY(0deg)',
    transition: 'transform 0.2s ease-out',
    transformStyle: 'preserve-3d',
    willChange: 'transform',
  });
  const [isInteractive, setIsInteractive] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const updateInteractive = () => setIsInteractive(mediaQuery.matches);

    updateInteractive();
    mediaQuery.addEventListener('change', updateInteractive);

    return () => mediaQuery.removeEventListener('change', updateInteractive);
  }, []);

  const handlePointerMove = React.useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!isInteractive || event.pointerType === 'touch' || !containerRef.current) {
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const px = (x / rect.width) * 2 - 1;
      const py = (y / rect.height) * 2 - 1;
      const rotateY = px * 12;
      const rotateX = -py * 12;

      setStyle((prev) => ({
        ...prev,
        transform: `perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }));
    },
    [isInteractive]
  );

  const handlePointerLeave = React.useCallback(() => {
    setStyle((prev) => ({
      ...prev,
      transform: 'perspective(1400px) rotateX(0deg) rotateY(0deg)',
    }));
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn('relative', containerClassName)}
      style={style}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerCancel={handlePointerLeave}
    >
      {children}
    </div>
  );
}

export const CardBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, style, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('[transform-style:preserve-3d]', className)}
    style={{
      transformStyle: 'preserve-3d',
      ...style,
    }}
    {...props}
  />
));
CardBody.displayName = 'CardBody';

export const CardItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    translateZ?: number;
  }
>(({ className, translateZ = 0, style, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('[transform-style:preserve-3d] will-change-transform', className)}
    style={{
      transform: `translateZ(${translateZ}px)`,
      transformStyle: 'preserve-3d',
      ...style,
    }}
    {...props}
  />
));
CardItem.displayName = 'CardItem';
