import React, { useEffect, useState } from "react";
import axios from "axios";
import { Edit3, Trash, Save, Search } from "lucide-react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [editId, setEditId] = useState(null);
  const [edited, setEdited] = useState({});
  const [skip, setSkip] = useState(0);
  const limit = 10;

  const fetchProducts = async () => {
    const url = query
      ? `https://dummyjson.com/products/search?q=${encodeURIComponent(
          query
        )}&limit=${limit}&skip=${skip}`
      : `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
    const res = await axios.get(url);
    setProducts(res.data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, [query, skip]);

  const handleDelete = (id) =>
    setProducts((prev) => prev.filter((p) => p.id !== id));

  const handleEdit = (p) => {
    setEditId(p.id);
    setEdited({ title: p.title, price: p.price });
  };

  const handleSave = (id) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...edited } : p))
    );
    setEditId(null);
  };

  return (
    <div className="pt-20 min-h-screen text-white font-inter">
      {/* Заголовок */}
      <h1
        className="text-3xl font-bold mb-6 text-center"
        style={{
          textShadow: "0 2px 6px rgba(0,0,0,0.4)",
        }}
      >
          продукты
      </h1>

      {/* Поиск по центру */}
      <div className="flex justify-center mb-6">
        <div
          className="w-64 rounded-2xl p-[1px]"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.25), rgba(255,255,255,0.05))",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow:
              "0 4px 15px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)",
          }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Поиск..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSkip(0);
              }}
              className="w-full pl-8 pr-3 py-1 rounded-2xl bg-white/10 text-white outline-none text-sm"
            />
            <Search
              className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-300"
              size={14}
            />
          </div>
        </div>
      </div>

      {/* Таблица */}
      <div
        className="overflow-x-auto rounded-2xl animate-fade-in-up"
        style={{
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          boxShadow:
            "0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <table className="min-w-full text-sm text-gray-200 table-auto">
          <thead
            className="text-xs uppercase"
            style={{
              background: "rgba(255,255,255,0.05)",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <tr>
              <th className="px-6 py-3 text-left">Фото</th>
              <th className="px-6 py-3 text-left">Название</th>
              <th className="px-6 py-3 text-left">Цена</th>
              <th className="px-6 py-3 text-center">Действия</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr
                key={p.id}
                className="hover:bg-white/5 transition"
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <td className="px-6 py-3">
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    className="w-12 h-12 rounded-md object-cover"
                    onError={(e) =>
                      (e.target.src =
                        "https://placehold.co/64x64?text=No+Image")
                    }
                  />
                </td>
                <td className="px-6 py-3">
                  {editId === p.id ? (
                    <input
                      className="w-full bg-white/10 px-2 py-1 rounded text-white outline-none"
                      value={edited.title}
                      onChange={(e) =>
                        setEdited((prev) => ({
                          ...prev,
                          title: e.target.value,
                        }))
                      }
                    />
                  ) : (
                    p.title
                  )}
                </td>
                <td className="px-6 py-3">
                  {editId === p.id ? (
                    <input
                      type="number"
                      className="w-24 bg-white/10 px-2 py-1 rounded text-white outline-none"
                      value={edited.price}
                      onChange={(e) =>
                        setEdited((prev) => ({
                          ...prev,
                          price: e.target.value,
                        }))
                      }
                    />
                  ) : (
                    `$${p.price}`
                  )}
                </td>
                <td className="px-6 py-3 text-center space-x-2">
                  {editId === p.id ? (
                    <button
                      onClick={() => handleSave(p.id)}
                      className="text-green-400 hover:text-green-300"
                    >
                      <Save size={18} />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(p)}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <Edit3 size={18} />
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <Trash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Пагинация */}
      <div className="mt-6 flex gap-2 justify-center">
        <button
          disabled={skip === 0}
          onClick={() => setSkip((s) => Math.max(0, s - limit))}
          className="px-4 py-2 rounded bg-white/10 text-white hover:bg-white/20 transition disabled:opacity-40"
        >
          ‹‹
        </button>
        <button
          onClick={() => setSkip((s) => s + limit)}
          className="px-4 py-2 rounded bg-white/10 text-white hover:bg-white/20 transition"
        >
          ››
        </button>
      </div>
    </div>
  );
};

export default Products;
