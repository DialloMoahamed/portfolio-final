import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getPost, POSTS } from "../data/posts";
import { PROJECTS } from "../data/projects";
import BlogShell from "../components/BlogShell";
import { useLang } from "../i18n";

export default function BlogPost() {
  const { t } = useLang();
  const { slug } = useParams();
  const post = getPost(slug);

  useEffect(() => {
    if (!post) return;
    document.title = `${post.title} — Mohamed Attahir Diallo`;
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  const related = PROJECTS.filter((p) => post.projects.includes(p.id));
  const index = POSTS.findIndex((p) => p.slug === slug);
  const next = POSTS[index + 1];

  return (
    <BlogShell>
      <Link className="blog-back" to="/blog">{t("blog.back")}</Link>
      <div className="blog-card-meta" style={{ marginTop: 24 }}>
        <span>{post.period}</span>
        <span>{post.readTime} {t("blog.min")}</span>
      </div>
      <h1 className="blog-post-title">{post.title}</h1>

      {post.notice && (
        <aside className="blog-notice" role="note">
          <strong>🔒 {t("blog.private")}</strong>
          <span>{post.notice}</span>
        </aside>
      )}

      <article className="blog-post-body">
        {post.content.map((b, i) => {
          if (b.t === "h") return <h2 key={i}>{b.v}</h2>;
          if (b.t === "ul") return <ul key={i}>{b.v.map((li) => <li key={li}>{li}</li>)}</ul>;
          return <p key={i}>{b.v}</p>;
        })}
      </article>

      {related.length > 0 && (
        <div className="blog-related">
          <div className="section-tag">{t("blog.related")}</div>
          <ul>
            {related.map((p) => (
              <li key={p.id}>
                <span>{p.title}</span>
                <span>
                  {p.private && <em className="private-inline">🔒 {t("project.private")}</em>}
                  {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer">{t("project.demo")}</a>}
                  {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer">{t("project.code")}</a>}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {next && (
        <Link className="blog-next" to={`/blog/${next.slug}`}>
          <span>{t("blog.next")}</span>
          {next.title} →
        </Link>
      )}
    </BlogShell>
  );
}
