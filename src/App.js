import { useState } from "react";
import "./styles.css";

export default function App() {
  const [slug, setSlug] = useState("");

  return (
    <div className="App">
      <table style={{ margin: "auto" }}>
        <tr>
          <td style={{ textAlign: "right" }}>
            <label>Name: </label>
          </td>
          <td>
            <input
              onChange={(e) =>
                setSlug(
                  e.target.value
                    .replace(/[^-a-zA-Z0-9\s+]+/gi, "")
                    .replace(/\s+/gi, "-")
                    .toLowerCase()
                )
              }
            />
          </td>
        </tr>
        <tr>
          <td style={{ textAlign: "right" }}>
            <label>Slug: </label>
          </td>
          <td>
            <input value={slug} />
          </td>
        </tr>
      </table>
    </div>
  );
}
