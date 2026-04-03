import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URI;

export default function CourseDetail() {
  const { id } = useParams();
  const [lessons, setLessons] = useState([]);
  const [active, setActive] = useState(null);

  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState("");

  useEffect(() => {
    axios
      .get(`${API_BASE}/documents/${id}`)
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : [];
        setLessons(data);
        if (data.length > 0) setActive(data[0]);
      })
      .catch(() => setLessons([]));
  }, [id]);
  const handleSummarize = async () => {
    if (!active?.contextText) return alert("No text to summarize!");

    setLoading(true);
    try {
      const res = await axios.post(`${API_BASE}/ai/summarize`, {
        text: active.contextText,
      });
      setSummary(res.data.summary);
    } catch (err) {
      console.error(err);
      setSummary("Error generating summary. Check console.");
    } finally {
      setLoading(false);
    }
  };

  const getEmbed = (url) => {
    if (!url) return "";
    const videoId = url.includes("v=")
      ? url.split("v=")[1].split("&")[0]
      : url.split("/").pop();
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="list-group shadow-sm">
            {lessons.map((l) => (
              <button
                key={l._id}
                onClick={() => {
                  setActive(l);
                  setSummary("");
                }}
                className={`list-group-item list-group-item-action ${active?._id === l._id ? "active" : ""}`}
              >
                {l.title}
              </button>
            ))}
          </div>
        </div>

        <div className="col-md-8">
          {active ? (
            <div className="card shadow-sm p-4">
              <h2 className="mb-3">{active.title}</h2>

              {active.content && (
                <div className="ratio ratio-16x9 mb-4">
                  <iframe
                    src={getEmbed(active.content)}
                    title="Lesson Video"
                    allowFullScreen
                    className="rounded shadow-sm"
                  ></iframe>
                </div>
              )}

              <div className="bg-light p-3 rounded mb-4">
                <h5 className="text-secondary">Lesson Details</h5>
                <p>{active.contextText || "No description provided."}</p>
              </div>

              <div className="border-top pt-3">
                <button
                  className="btn btn-primary"
                  onClick={handleSummarize}
                  disabled={loading || !active.contextText}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      Summarizing...
                    </>
                  ) : (
                    "Summarise with AI"
                  )}
                </button>

                {summary && (
                  <div className="mt-3 alert alert-info shadow-sm">
                    <strong>AI Summary:</strong>
                    <p className="mb-0 mt-2">{summary}</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="alert alert-light border">
              Select a lesson to begin.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
