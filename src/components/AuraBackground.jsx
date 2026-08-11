import React from "react";

/**
 * AuraBackground - animated gradient blobs + grid + noise overlay.
 * Pure CSS, GPU-accelerated, mobile-friendly.
 */
const AuraBackground = () => {
  return (
    <div className="aura" aria-hidden="true" data-testid="aura-background">
      <div className="aura__blob aura__blob--a" />
      <div className="aura__blob aura__blob--b" />
      <div className="aura__blob aura__blob--c" />
      <div className="aura__blob aura__blob--d" />
      <div className="aura__grid" />
      <div className="aura__noise" />
      <div className="aura__vignette" />
    </div>
  );
};

export default AuraBackground;
