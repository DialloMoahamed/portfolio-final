import { Link } from "react-router-dom";
import { POSTS } from "../data/posts";
import BlogCard from "../components/BlogCard";
import useInView from "../hooks/useInView";
import { useLang } from "../i18n";

export default function Blog() {
  const { t } = useLang();
  const [blogRef, blogVisible] = useInView();
  const latest = POSTS.slice(0, 3);

  return (
    <section id="blog" ref={blogRef}>
      <div className={`fade-in${blogVisible ? " visible" : ""}`}>
        <div className="section-tag">{t("blog.tag")}</div>
        <h2 className="section-title">
          {t("blog.title1")} <span style={{ color: "var(--accent)" }}>{t("blog.title2")}</span>
        </h2>
      </div>
      <div className="blog-grid">
        {latest.map((p, i) => (
          <div key={p.slug} className={`fade-in delay-${i + 1}${blogVisible ? " visible" : ""}`}>
            <BlogCard post={p} />
          </div>
        ))}
      </div>
      <div className={`fade-in delay-4${blogVisible ? " visible" : ""}`} style={{ marginTop: 32 }}>
        <Link className="btn-ghost" to="/blog">{t("blog.all")} ({POSTS.length}) →</Link>
      </div>
    </section>
  );
}
