import React from "react";

export function FooterItem({ title, subtitle, icon }) {
  return (
    <div>
      <img src={icon} alt="image" />
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}
