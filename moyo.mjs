// Put new patterns here

const patterns = [
  `<pattern id="checks" patternUnits="userSpaceOnUse" width="10" height="10">
  <rect x="0" y="0" width="5" height="5" fill="currentColor" />
  <rect x="5" y="5" width="5" height="5" fill="currentColor" />
</pattern>`,

  `<pattern id="checks-diagonal" patternUnits="userSpaceOnUse" width="10" height="10">
  <polygon x="0" y="0" points="5,0 10,5 5,10 0,5" fill="currentColor" />
</pattern>`,

  `<pattern id="grid" patternUnits="userSpaceOnUse" width="4" height="4">
  <rect x="0" y="2" width="4" height="1" fill="currentColor" />
  <rect x="2" y="0" width="1" height="4" fill="currentColor" />
</pattern>`,

  `<pattern id="grid-medium" patternUnits="userSpaceOnUse" width="10" height="10">
  <rect x="0" y="5" width="10" height="1" fill="currentColor" />
  <rect x="5" y="0" width="1" height="10" fill="currentColor" />
</pattern>`,

  `<pattern id="cross-dots" patternUnits="userSpaceOnUse" width="4" height="4">
  <rect x="0" y="0" width="2" height="2" fill="currentColor" />
  <rect x="2" y="2" width="2" height="2" fill="currentColor" />
</pattern>`,

  `<pattern id="vertical-lines" patternUnits="userSpaceOnUse" width="4" height="4">
  <rect x="2" y="0" width="1" height="4" fill="currentColor" />
</pattern>`,

  `<pattern id="horizontal-lines" patternUnits="userSpaceOnUse" width="4" height="4">
  <rect x="0" y="2" width="4" height="1" fill="currentColor" />
</pattern>`,

  `<pattern id="diagonal-lines-left" patternUnits="userSpaceOnUse" width="10" height="10">
  <rect width="10" height="10" fill="none" />
  <path d="M1,11 l-2,-2 M-1,4 l7,7 M-1,-1 l12,12 M4,-1 l12,12 M9,-1 l3,3" stroke="currentColor" stroke-width="1" />
</pattern>`,

  `<pattern id="diagonal-lines-right" patternUnits="userSpaceOnUse" width="10" height="10">
  <rect width="10" height="10" fill="none" />
  <path d="M-1,1 l2,-2 M-1,6 l7,-7 M0,10 l11,-11 M4,11 l8,-8 M9,11 l2,-2" stroke="currentColor" stroke-width="1" />
</pattern>`,

  `<pattern id="vertical-stripes" patternUnits="userSpaceOnUse" width="8" height="8">
  <rect x="4" y="0" width="4" height="8" fill="currentColor" />
</pattern>`,

  `<pattern id="horizontal-stripes" patternUnits="userSpaceOnUse" width="8" height="8">
  <rect x="0" y="4" width="8" height="4" fill="currentColor" />
</pattern>`,

  `<pattern id="diagonal-stripes-left" patternUnits="userSpaceOnUse" width="10" height="10">
  <rect width="10" height="10" fill="none" />
  <path d="M1,11 l-2,-2 M-1,-1 l12,12 M9,-1 l3,3" stroke="currentColor" stroke-width="3" />
</pattern>`,

  `<pattern id="diagonal-stripes-right" patternUnits="userSpaceOnUse" width="10" height="10">
  <rect width="10" height="10" fill="none" />
  <path d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke="currentColor" stroke-width="3" />
</pattern>`,

  `<pattern id="double-diagonal-stripes" patternUnits="userSpaceOnUse" width="10" height="10">
  <rect width="10" height="10" fill="none" />
  <path d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke="currentColor" opacity="0.5" stroke-width="3" />
  <path d="M1,11 l-2,-2 M-1,-1 l12,12 M9,-1 l3,3" stroke="currentColor" stroke-width="3" />
</pattern>`,

  `<pattern id="zig-zag" patternUnits="userSpaceOnUse" width="10" height="10">
  <polygon points="0,0 10,0 5,5" fill="currentColor" />
  <polygon points="0,5 5,10 0,10" fill="currentColor" />
  <polygon points="10,5 5,10 10,10" fill="currentColor" />
</pattern>`,

  `<pattern id="zig-zag-3d" patternUnits="userSpaceOnUse" width="16" height="16">
  <rect x="8" y="0" width="8" height="16" fill="currentColor" opacity="0.5" />
  <polygon points="0,0 16,0 8,8" fill="currentColor" />
  <polygon points="0,8 8,16 0,16" fill="currentColor" />
  <polygon points="16,8 8,16 16,16" fill="currentColor" />
</pattern>`,

  `<pattern id="triangles" patternUnits="userSpaceOnUse" width="10" height="10">
  <polygon x="-1" points="0,0 10,10 0,10" fill="currentColor" />
</pattern>`,

  `<pattern id="quarter-circles" patternUnits="userSpaceOnUse" width="10" height="10">
  <circle cx="11" cy="11" r="10" fill="currentColor" />
</pattern>`,

  `<pattern id="seigaiha" patternUnits="userSpaceOnUse" width="48" height="20">

  <circle cx="-4" cy="10" stroke-width="2" r="20" fill="white" stroke="black" />
  <circle cx="-4" cy="10" stroke-width="2" r="16" fill="white" stroke="black" />
  <circle cx="-4" cy="10" stroke-width="2" r="12" fill="white" stroke="black" />
  <circle cx="-4" cy="10" stroke-width="2" r="8" fill="white" stroke="black" />
  <circle cx="-4" cy="10" stroke-width="2" r="4" fill="white" stroke="black" />

  <circle cx="44" cy="10" stroke-width="2" r="20" fill="white" stroke="black" />
  <circle cx="44" cy="10" stroke-width="2" r="16" fill="white" stroke="black" />
  <circle cx="44" cy="10" stroke-width="2" r="12" fill="white" stroke="black" />
  <circle cx="44" cy="10" stroke-width="2" r="8" fill="white" stroke="black" />
  <circle cx="44" cy="10" stroke-width="2" r="4" fill="white" stroke="black" />

  <circle cx="20" cy="20" stroke-width="2" r="20" fill="white" stroke="black" />
  <circle cx="20" cy="20" stroke-width="2" r="16" fill="white" stroke="black" />
  <circle cx="20" cy="20" stroke-width="2" r="12" fill="white" stroke="black" />
  <circle cx="20" cy="20" stroke-width="2" r="8" fill="white" stroke="black" />
  <circle cx="20" cy="20" stroke-width="2" r="4" fill="white" stroke="black" />

  <circle cx="-4" cy="30" stroke-width="2" r="20" fill="white" stroke="black" />
  <circle cx="-4" cy="30" stroke-width="2" r="16" fill="white" stroke="black" />
  <circle cx="-4" cy="30" stroke-width="2" r="12" fill="white" stroke="black" />
  <circle cx="-4" cy="30" stroke-width="2" r="8" fill="white" stroke="black" />
  <circle cx="-4" cy="30" stroke-width="2" r="4" fill="white" stroke="black" />

  <circle cx="44" cy="30" stroke-width="2" r="20" fill="white" stroke="black" />
  <circle cx="44" cy="30" stroke-width="2" r="16" fill="white" stroke="black" />
  <circle cx="44" cy="30" stroke-width="2" r="12" fill="white" stroke="black" />
  <circle cx="44" cy="30" stroke-width="2" r="8" fill="white" stroke="black" />
  <circle cx="44" cy="30" stroke-width="2" r="4" fill="white" stroke="black" />

  <circle cx="20" cy="40" stroke-width="2" r="20" fill="white" stroke="black" />
  <circle cx="20" cy="40" stroke-width="2" r="16" fill="white" stroke="black" />
  <circle cx="20" cy="40" stroke-width="2" r="12" fill="white" stroke="black" />
  <circle cx="20" cy="40" stroke-width="2" r="8" fill="white" stroke="black" />
  <circle cx="20" cy="40" stroke-width="2" r="4" fill="white" stroke="black" />
</pattern>`,

  `<pattern id="wave" patternUnits="userSpaceOnUse" width="18" height="18">
  <path fill="none" stroke="currentColor" d="M0,18 C 5,15 5,2 10,5 S 14,18 18,18" />
</pattern>`,

  `<pattern id="yinyang" patternUnits="userSpaceOnUse" width="20" height="20">
  <clipPath id="cut-off-left1">
    <rect x="0" y="0" width="5" height="10" />
  </clipPath>
  <clipPath id="cut-off-right1">
    <rect x="5" y="0" width="5" height="10" />
  </clipPath>
  <rect width="20" height="20" fill="currentColor" opacity="0.5" />
  <circle cx="5" cy="5" r="5" fill="white" stroke="none" clip-path="url(#cut-off-left1)" />
  <circle cx="5" cy="5" r="5" fill="black" stroke="none" clip-path="url(#cut-off-right1)" />
  <circle cx="5" cy="2.5" r="2.5" fill="white" stroke="none" />
  <circle cx="5" cy="7.5" r="2.5" fill="black" stroke="none" />
  <circle cx="5" cy="2.5" r="1" fill="black" stroke="none" />
  <circle cx="5" cy="7.5" r="1" fill="white" stroke="none" />

  <clipPath id="cut-off-left2">
    <rect x="10" y="10" width="5" height="10" />
  </clipPath>
  <clipPath id="cut-off-right2">
    <rect x="15" y="10" width="5" height="10" />
  </clipPath>

  <circle cx="15" cy="15" r="5" fill="white" stroke="none" clip-path="url(#cut-off-left2)" />
  <circle cx="15" cy="15" r="5" fill="black" stroke="none" clip-path="url(#cut-off-right2)" />
  <circle cx="15" cy="12.5" r="2.5" fill="white" stroke="none" />
  <circle cx="15" cy="17.5" r="2.5" fill="black" stroke="none" />
  <circle cx="15" cy="12.5" r="1" fill="black" stroke="none" />
  <circle cx="15" cy="17.5" r="1" fill="white" stroke="none" />
</pattern>`,

  `<pattern id="circles-small" patternUnits="userSpaceOnUse" width="10" height="10">
  <circle cx="5" cy="5" r="1" fill="currentColor" stroke="currentColor" />
</pattern>`,

  `<pattern id="circles-medium" patternUnits="userSpaceOnUse" width="10" height="10">
  <circle cx="5" cy="5" r="3" fill="none" stroke="currentColor" />
</pattern>`,

  `<pattern id="circles-large" patternUnits="userSpaceOnUse" width="10" height="10">
  <circle cx="5" cy="5" r="4.5" fill="none" stroke="currentColor" />

</pattern>`,

  `<pattern id="stars" patternUnits="userSpaceOnUse" width="20" height="20">
  <rect x="2.5" y="5" width="6" height="1" fill="currentColor" />
  <rect x="5" y="2.5" width="1" height="6" fill="currentColor" />
  <rect x="12.5" y="15" width="6" height="1" fill="currentColor" />
  <rect x="15" y="12.5" width="1" height="6" fill="currentColor" />
</pattern>`,

  `<pattern id="squares" patternUnits="userSpaceOnUse" width="20" height="20">
  <rect x="0" y="0" width="20" height="1" fill="currentColor" />
  <rect x="0" y="0" width="1" height="20" fill="currentColor" />
  <rect x="0" y="12" width="20" height="1" fill="currentColor" opacity="0.5" />
  <rect x="11" y="0" width="1" height="20" fill="currentColor" opacity="0.5" />
</pattern>`,

  `<pattern id="paper" patternUnits="userSpaceOnUse" width="20" height="20">
  <rect x="0" y="0" width="20" height="1.5" fill="currentColor" />
  <rect x="0" y="0" width="1.5" height="20" fill="currentColor" />

  <rect x="0" y="4" width="20" height="1" fill="currentColor" opacity="0.5" />
  <rect x="4" y="0" width="1" height="20" fill="currentColor" opacity="0.5" />

  <rect x="0" y="8" width="20" height="1" fill="currentColor" opacity="0.5" />
  <rect x="8" y="0" width="1" height="20" fill="currentColor" opacity="0.5" />

  <rect x="0" y="12" width="20" height="1" fill="currentColor" opacity="0.5" />
  <rect x="12" y="0" width="1" height="20" fill="currentColor" opacity="0.5" />

  <rect x="0" y="16" width="20" height="1" fill="currentColor" opacity="0.5" />
  <rect x="16" y="0" width="1" height="20" fill="currentColor" opacity="0.5" />
</pattern>`,

  `<pattern id="cubes" patternUnits="userSpaceOnUse" width="14" height="26">
  <rect x="0" y="0" width="14" height="26" fill="none" />
  <path d="M0,5 l7,-5 l0,8 l-7,5" stroke="none" fill="currentColor" />
  <path d="M0,13 l7,5 l0,8 l-7,-5" stroke="none" fill="currentColor" opacity="0.5" />
  <path d="M7,18 l7,-5 l0,8 l-7,5" stroke="none" fill="currentColor" />
  <path d="M7,0 l7,5 l0,8 l-7,-5" stroke="none" fill="currentColor" opacity="0.5" />
</pattern>`
]

export {
  patterns as
  default
}
