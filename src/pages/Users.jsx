import React, { useEffect, useState } from "react";
import axios from "axios";
import { Edit3, Trash, Save, Search } from "lucide-react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [editId, setEditId] = useState(null);
  const [edited, setEdited] = useState({});
  const [skip, setSkip] = useState(0);
  const limit = 10;

  const fetchUsers = async () => {
    const res = await axios.get(
      `https://dummyjson.com/users?limit=${limit}&skip=${skip}`
    );
    setUsers(res.data.users);
  };

  useEffect(() => {
    fetchUsers();
  }, [skip]);

  const handleDelete = (id) =>
    setUsers((prev) => prev.filter((user) => user.id !== id));

  const handleEdit = (user) => {
    setEditId(user.id);
    setEdited({
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
    });
  };

  const handleSave = (id) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, ...edited } : u))
    );
    setEditId(null);
  };

  const filtered = users.filter((u) =>
    `${u.firstName} ${u.lastName} ${u.email}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <div className="pt-20  min-h-screen text-white font-inter">
      {/* Заголовок */}
      <h1
        className="text-3xl font-bold mb-6 text-center"
        style={{
          textShadow: "0 2px 6px rgba(0,0,0,0.4)",
        }}
      >
         Пользователи
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
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Имя</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Телефон</th>
              <th className="px-6 py-3">Пол</th>
              <th className="px-6 py-3 text-center">Действия</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((user, index) => (
              <tr
                key={user.id}
                className="hover:bg-white/5 transition"
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <td className="px-6 py-3">{skip + index + 1}</td>
                <td className="px-6 py-3">
                  {editId === user.id ? (
                    <input
                      className="bg-white/10 px-2 py-1 rounded text-white outline-none w-full"
                      value={`${edited.firstName} ${edited.lastName}`}
                      onChange={(e) => {
                        const [firstName, ...lastName] =
                          e.target.value.split(" ");
                        setEdited((prev) => ({
                          ...prev,
                          firstName: firstName || "",
                          lastName: lastName.join(" ") || "",
                        }));
                      }}
                    />
                  ) : (
                    `${user.firstName} ${user.lastName}`
                  )}
                </td>
                <td className="px-6 py-3">{user.email}</td>
                <td className="px-6 py-3">
                  {editId === user.id ? (
                    <input
                      className="bg-white/10 px-2 py-1 rounded text-white outline-none w-full"
                      value={edited.phone}
                      onChange={(e) =>
                        setEdited((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                    />
                  ) : (
                    user.phone
                  )}
                </td>
                <td className="px-6 py-3 capitalize">{user.gender}</td>
                <td className="px-6 py-3 text-center space-x-2">
                  {editId === user.id ? (
                    <button
                      onClick={() => handleSave(user.id)}
                      className="text-green-400 hover:text-green-300"
                    >
                      <Save size={18} />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(user)}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <Edit3 size={18} />
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <Trash size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="text-center py-4 text-gray-400"
                >
                  Ничего не найдено.
                </td>
              </tr>
            )}
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

export default Users;
