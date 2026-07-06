import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";
import { decodeJwtPayload } from "../utils/jwt";

// Trang bán sách (placeholder) — chỉ vào được sau khi đăng nhập.
// Token vẫn nằm trong cookie access_token (DevTools → Application → Cookies).

interface Book {
  id: number;
  cover: string;
  title: string;
  author: string;
  price: number;
  genre: string;
}

const BOOKS: Book[] = [
  { id: 1, cover: "📕", title: "Clean Code", author: "Robert C. Martin", price: 320000, genre: "Technology" },
  { id: 2, cover: "📗", title: "The Pragmatic Programmer", author: "Hunt & Thomas", price: 280000, genre: "Technology" },
  { id: 3, cover: "📘", title: "Dune", author: "Frank Herbert", price: 180000, genre: "Sci-Fi" },
  { id: 4, cover: "📙", title: "Atomic Habits", author: "James Clear", price: 150000, genre: "Self-help" },
  { id: 5, cover: "📔", title: "Design Patterns", author: "Gang of Four", price: 350000, genre: "Technology" },
  { id: 6, cover: "📒", title: "Sapiens", author: "Yuval Noah Harari", price: 210000, genre: "History" },
  { id: 7, cover: "📓", title: "The Hobbit", author: "J.R.R. Tolkien", price: 165000, genre: "Fantasy" },
  { id: 8, cover: "📚", title: "Thinking, Fast and Slow", author: "Daniel Kahneman", price: 230000, genre: "Psychology" },
];

export default function BookstorePage() {
  const { accessToken, logout } = useAuth();
  const claims = accessToken ? decodeJwtPayload(accessToken) : null;

  return (
    <>
      <Navbar claims={claims} onLogout={logout} />

      <main>
        <div className="shop-header">
          <div>
            <h2>Cửa hàng sách</h2>
            <p className="hint">Chào mừng quay lại! Hôm nay có {BOOKS.length} đầu sách đang bán.</p>
          </div>
        </div>

        <div className="book-grid">
          {BOOKS.map((b) => (
            <div className="book-card" key={b.id}>
              <div className="book-cover">{b.cover}</div>
              <div>
                <div className="book-title">{b.title}</div>
                <div className="book-author">{b.author}</div>
              </div>
              <span className="book-genre">{b.genre}</span>
              <div className="book-buy">
                <span className="book-price">{b.price.toLocaleString("vi-VN")}₫</span>
                <button className="btn btn-sm btn-blue">🛒 Mua</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
