import React from "react";
import { Link } from "react-router-dom";

const list = [
  {
    to: "/",
    label: "Homepage"
  },
  {
    to: "/sitemap",
    label: "sitemap"
  },
  {
    to: "/skill",
    label: "skill"
  },
  {
    to: "/projects",
    label: "projects"
  }
];

export default function SiteMap() {
  return (
    <>
        <p className="font-semibold my-4">Sitemap</p>
        <p>다른 페이지들은 XML로 설정하고 그러던데 난 귀찮아서 안 함</p>
        {list.map((k, v) => (
            <Link to={k.to} key={v} className="block px-2 py-4 text-xl font-semibold hover:underline cursor-pointer">{k.label}</Link>
        ))}
    </>
  );
}
