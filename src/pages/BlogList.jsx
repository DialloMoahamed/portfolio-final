import { useEffect } from "react";
import { POSTS } from "../data/posts";
import BlogCard from "../components/BlogCard";
import BlogShell from "../components/BlogShell";
import { useLang } from "../i18n";

export default function BlogList() {
  const { t } = useLang();
  useEffect(() => {
    document.title = "Blog — Mohamed Attahir Diallo";
    window.scrollTo(0, 0);
  }, []);

  return (
    <BlogShell>
      <div className="section-tag">{t("blog.tag")}</div>
      <h1 className="section-title">
        {t("blog.title1")} <span style={{ color: "var(--accent)" }}>{t("blog.title2")}</span>
      </h1>
      <div className="blog-grid" style={{ marginTop: 48 }}>
        {POSTS.map((p) => (
          <BlogCard key={p.slug} post={p} />
        ))}
      </div>
    </BlogShell>
  );
}
