/**
 * Første skisse av det bærende visuelle konseptet:
 * dokumentstruktur som sømløst blir dyrenes fysiske rom.
 * Generell forsideversjon — ingen konkrete forskriftstall.
 */
export function ConceptSketch() {
  return (
    <figure className="concept-sketch">
      <svg
        className="concept-sketch-svg"
        viewBox="0 0 640 420"
        role="img"
        aria-labelledby="concept-sketch-title concept-sketch-desc"
      >
        <title id="concept-sketch-title">Fra dokument til dyrets rom</title>
        <desc id="concept-sketch-desc">
          Et nøkternt offentlig dokument der tabelllinjer gradvis blir vegger i
          innhegninger sett ovenfra, med dyr i feltene.
        </desc>

        <defs>
          <linearGradient id="doc-to-floor" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f7f4ee" />
            <stop offset="42%" stopColor="#f3efe8" />
            <stop offset="72%" stopColor="#ebe4d8" />
            <stop offset="100%" stopColor="#e2d8c8" />
          </linearGradient>
          <linearGradient id="wall-depth" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#302e2b" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#302e2b" stopOpacity="0.32" />
          </linearGradient>
          <clipPath id="sheet-clip">
            <rect x="28" y="28" width="584" height="364" rx="2" />
          </clipPath>
        </defs>

        {/* Sheet */}
        <rect
          className="cs-sheet"
          x="28"
          y="28"
          width="584"
          height="364"
          rx="2"
          fill="url(#doc-to-floor)"
          stroke="#cfc7ba"
          strokeWidth="1"
        />

        <g clipPath="url(#sheet-clip)">
          {/* Document header — left */}
          <g className="cs-doc-text">
            <text x="52" y="62" className="cs-meta">
              OFFENTLIG HØRING
            </text>
            <text x="52" y="92" className="cs-heading">
              Bestemmelser om dyrehold
            </text>
            <text x="52" y="118" className="cs-body">
              § 4 Areal og innredning
            </text>
            <text x="52" y="140" className="cs-body muted">
              Dyrets plass følger av bestemmelsen.
            </text>
          </g>

          {/* Table that becomes pens — continuous structure */}
          <g className="cs-grid" transform="translate(52 168)">
            {/* Outer frame: document border → pen walls */}
            <rect
              className="cs-cell-frame"
              x="0"
              y="0"
              width="536"
              height="196"
              fill="none"
              stroke="#302e2b"
              strokeWidth="1.25"
            />

            {/* Vertical dividers */}
            <line className="cs-vline" x1="178" y1="0" x2="178" y2="196" />
            <line className="cs-vline" x1="356" y1="0" x2="356" y2="196" />
            {/* Horizontal divider */}
            <line className="cs-hline" x1="0" y1="98" x2="536" y2="98" />

            {/* Depth bands that strengthen toward the right */}
            <rect className="cs-depth d1" x="178" y="0" width="178" height="98" fill="url(#wall-depth)" opacity="0" />
            <rect className="cs-depth d2" x="356" y="0" width="180" height="98" fill="url(#wall-depth)" opacity="0" />
            <rect className="cs-depth d3" x="178" y="98" width="178" height="98" fill="url(#wall-depth)" opacity="0" />
            <rect className="cs-depth d4" x="356" y="98" width="180" height="98" fill="url(#wall-depth)" opacity="0" />

            {/* Left cells: still document-like labels */}
            <g className="cs-labels">
              <text x="14" y="28" className="cs-cell-label">
                Areal
              </text>
              <text x="14" y="48" className="cs-cell-label muted">
                pr. dyr
              </text>
              <text x="14" y="126" className="cs-cell-label">
                Innredning
              </text>
              <text x="14" y="146" className="cs-cell-label muted">
                og miljø
              </text>
            </g>

            {/* Middle: marks that become animals */}
            <g className="cs-marks mid">
              <ellipse className="cs-mark m1" cx="248" cy="42" rx="18" ry="11" />
              <ellipse className="cs-mark m2" cx="292" cy="58" rx="14" ry="9" />
              <ellipse className="cs-mark m3" cx="268" cy="140" rx="16" ry="10" />
              <ellipse className="cs-mark m4" cx="310" cy="156" rx="12" ry="8" />
            </g>

            {/* Right: clearer animals in physical space */}
            <g className="cs-marks right">
              <g className="cs-animal a1" transform="translate(402 28)">
                <ellipse cx="22" cy="18" rx="22" ry="13" />
                <ellipse cx="40" cy="14" rx="8" ry="6" />
                <circle cx="44" cy="12" r="1.4" className="cs-eye" />
              </g>
              <g className="cs-animal a2" transform="translate(448 52)">
                <ellipse cx="18" cy="14" rx="18" ry="11" />
                <ellipse cx="32" cy="11" rx="7" ry="5" />
                <circle cx="35" cy="9" r="1.2" className="cs-eye" />
              </g>
              <g className="cs-animal a3" transform="translate(390 122)">
                <ellipse cx="20" cy="16" rx="20" ry="12" />
                <ellipse cx="36" cy="13" rx="7.5" ry="5.5" />
                <circle cx="40" cy="11" r="1.3" className="cs-eye" />
              </g>
              <g className="cs-animal a4" transform="translate(455 148)">
                <ellipse cx="16" cy="12" rx="16" ry="10" />
                <ellipse cx="28" cy="10" rx="6.5" ry="5" />
                <circle cx="31" cy="8" r="1.1" className="cs-eye" />
              </g>
            </g>

            {/* Measurement ticks that appear with the physical reading */}
            <g className="cs-measure" aria-hidden="true">
              <line x1="356" y1="206" x2="536" y2="206" />
              <line x1="356" y1="202" x2="356" y2="210" />
              <line x1="536" y1="202" x2="536" y2="210" />
              <text x="446" y="222" className="cs-measure-label" textAnchor="middle">
                rommet bestemmelsen gir
              </text>
            </g>
          </g>
        </g>
      </svg>
      <figcaption>
        Konseptskisse · dokumentets struktur blir dyrets rom · ikke en konkret sak
      </figcaption>
    </figure>
  );
}
