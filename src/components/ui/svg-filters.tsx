export function SvgFilters() {
  return (
    <svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true">
      <filter id="glass-distortion" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.008 0.008"
          numOctaves={2}
          seed={5}
          result="noise"
        />
        <feGaussianBlur in="noise" stdDeviation={2} result="blurred" />
        <feDisplacementMap
          in="SourceGraphic"
          in2="blurred"
          scale={30}
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
  );
}