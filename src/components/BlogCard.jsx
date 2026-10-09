import { Link } from "react-router-dom";
import { useLang } from "../i18n";

export default function BlogCard({ post }) {
  const { t } = useLang();
  return (
    <Link className="blog-card" to={`/blog/${post.slug}`}>
      <div className="blog-card-meta">
        <span>{post.period}</span>
        <span>{post.readTime} {t("blog.min")}</span>
      </div>
      {post.private && <span className="private-badge">🔒 {t("blog.private")}</span>}
      <h3 className="blog-card-title">{post.title}</h3>
      <p className="blog-card-excerpt">{post.excerpt}</p>
      <div className="project-tags">
        {post.tags.map((t) => (
          <span className="tag" key={t}>{t}</span>
        ))}
      </div>
      <span className="blog-card-more">{t("blog.read")}</span>
    </Link>
  );
}
