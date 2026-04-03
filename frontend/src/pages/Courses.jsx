import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const API_BASE = "https://lms-imarticus.onrender.com";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/courses`)
      .then((res) => {
        if (Array.isArray(res.data)) {
          setCourses(res.data);
        } else if (res.data && Array.isArray(res.data.courses)) {
          setCourses(res.data.courses);
        } else {
          setCourses([]);
        }
      })
      .catch((err) => {
        console.error(err);
        setCourses([]);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2>Courses</h2>
      <div className="row">
        {Array.isArray(courses) ? (
          courses.map((course) => (
            <div className="col-md-4 mb-3" key={course._id}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <p>{course.description}</p>
                  <Link
                    to={`/course/${course._id}`}
                    className="btn btn-primary"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>no courses available at the moment.</p>
        )}
      </div>
    </div>
  );
}

export default Courses;
