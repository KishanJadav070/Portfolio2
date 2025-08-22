import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ClipboardDocumentIcon, TrashIcon, ArrowDownTrayIcon, XMarkIcon } from "@heroicons/react/24/solid";

type Contact = {
  _id: string;
  name: string;
  email: string;
  message: string;
};

type Career = {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  position?: string;
  resumeName?: string;
  coverLetter?: string;
};

function getToken() {
  return localStorage.getItem("admin_token");
}

export default function AdminDashboard() {
  const [tab, setTab] = useState<"contacts" | "careers">("contacts");
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [careers, setCareers] = useState<Career[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);

  const navigate = useNavigate();

  const CONTACTS_URL = "http://localhost:5000/api/admin/contacts";
  const CAREERS_URL = "http://localhost:5000/api/admin/careers";

  useEffect(() => {
    fetchContacts();
  }, []);

  useEffect(() => {
    if (tab === "careers") fetchCareers();
  }, [tab]);

  const fetchContacts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(CONTACTS_URL, { headers: { Authorization: `Bearer ${getToken()}` } });
      setContacts(res.data);
    } catch (err) {
      console.error(err);
      alert("Error fetching contacts");
    } finally {
      setLoading(false);
    }
  };

  const fetchCareers = async () => {
    setLoading(true);
    try {
      const res = await axios.get(CAREERS_URL, { headers: { Authorization: `Bearer ${getToken()}` } });
      setCareers(res.data);
    } catch (err) {
      console.error(err);
      alert("Error fetching careers");
    } finally {
      setLoading(false);
    }
  };

  const deleteItem = async (id: string, type: "contacts" | "careers") => {
    try {
      const url = type === "contacts" ? `${CONTACTS_URL}/${id}` : `${CAREERS_URL}/${id}`;
      await axios.delete(url, { headers: { Authorization: `Bearer ${getToken()}` } });
      if (type === "contacts") setContacts(prev => prev.filter(c => c._id !== id));
      else setCareers(prev => prev.filter(c => c._id !== id));
    } catch (err) {
      console.error(err);
      alert("Error deleting item");
    }
  };

  const downloadResume = async (id: string, name: string) => {
    try {
      const res = await axios.get(`${CAREERS_URL}/resume/${id}`, {
        headers: { Authorization: `Bearer ${getToken()}` },
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const a = document.createElement("a");
      a.href = url;
      a.download = name;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert("Error downloading resume");
    }
  };

  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    alert("Email copied!");
  };

  const logout = () => {
    localStorage.removeItem("admin_token");
    navigate("/admin/login");
  };

  const filteredContacts = useMemo(
    () =>
      contacts.filter(
        c => c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase())
      ),
    [contacts, search]
  );

  const filteredCareers = useMemo(
    () =>
      careers.filter(
        c =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.email.toLowerCase().includes(search.toLowerCase()) ||
          (c.position && c.position.toLowerCase().includes(search.toLowerCase())) ||
          (c.phone && c.phone.includes(search)) ||
          (c.coverLetter && c.coverLetter.toLowerCase().includes(search.toLowerCase()))
      ),
    [careers, search]
  );

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>

      <div className="flex gap-4 mb-4 flex-wrap items-center">
        <button
          onClick={() => setTab("contacts")}
          className={`px-5 py-2 rounded-lg font-medium transition ${
            tab === "contacts" ? "bg-blue-600 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Contacts
        </button>
        <button
          onClick={() => setTab("careers")}
          className={`px-5 py-2 rounded-lg font-medium transition ${
            tab === "careers" ? "bg-blue-600 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Careers
        </button>
        <button
          onClick={logout}
          className="ml-auto px-4 py-2 rounded-lg bg-red-500 text-white font-medium shadow hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name, email, phone, position, or cover letter..."
          className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <p className="text-gray-500 animate-pulse">Loading data...</p>
      ) : tab === "contacts" ? (
        <DataTable data={filteredContacts} type="contacts" deleteItem={deleteItem} />
      ) : (
        <CareerCards
          data={filteredCareers}
          deleteItem={deleteItem}
          downloadResume={downloadResume}
          copyEmail={copyEmail}
          onCardClick={setSelectedCareer}
        />
      )}

      {/* Pop-up Modal for Career Details */}
      {selectedCareer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-6 relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedCareer(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 transition"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-blue-600">{selectedCareer.name}</h2>
            <p className="mb-2"><span className="font-medium">Email:</span> {selectedCareer.email}</p>
            {selectedCareer.phone && <p className="mb-2"><span className="font-medium">Phone:</span> {selectedCareer.phone}</p>}
            {selectedCareer.position && <p className="mb-2"><span className="font-medium">Position:</span> {selectedCareer.position}</p>}
            {selectedCareer.coverLetter && (
              <div className="mb-2">
                <span className="font-medium">Cover Letter:</span>
                <p className="mt-1 p-2 bg-gray-100 rounded-md whitespace-pre-wrap">{selectedCareer.coverLetter}</p>
              </div>
            )}
            <div className="flex gap-3 mt-4 flex-wrap">
              {selectedCareer._id && (
                <button
                  onClick={() => downloadResume!(selectedCareer._id, selectedCareer._id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition flex items-center gap-2"
                >
                  <ArrowDownTrayIcon className="w-4 h-4" /> Download Resume
                </button>
              )}
              <button
                onClick={() => deleteItem(selectedCareer._id, "careers")}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition flex items-center gap-2"
              >
                <TrashIcon className="w-4 h-4" /> Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ----------------- DataTable Component -----------------
function DataTable({ data, type, deleteItem }: { data: any[]; type: "contacts" | "careers"; deleteItem: (id: string, type: "contacts" | "careers") => void }) {
  if (!data || data.length === 0) return <p className="text-gray-500">No records found</p>;

  return (
    <div className="overflow-x-auto shadow-lg rounded-xl">
      <table className="min-w-full divide-y divide-gray-200 bg-white rounded-xl">
        <thead className="bg-gradient-to-r from-blue-500 to-blue-400 text-white">
          <tr>
            <th className="px-4 py-3 text-left font-medium">Full Name</th>
            <th className="px-4 py-3 text-left font-medium">Email</th>
            <th className="px-4 py-3 text-left font-medium">Message</th>
            <th className="px-4 py-3 text-left font-medium">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map(item => (
            <tr key={item._id} className="hover:bg-gray-50 transition">
              <td className="px-4 py-3">{item.name}</td>
              <td className="px-4 py-3">{item.email}</td>
              <td className="px-4 py-3">{item.message}</td>
              <td className="px-4 py-3 flex gap-2">
                <button
                  onClick={() => deleteItem(item._id, type)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition flex items-center gap-1"
                >
                  <TrashIcon className="w-4 h-4" /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ----------------- CareerCards Component -----------------
function CareerCards({ data, copyEmail, onCardClick }: { data: Career[]; deleteItem: (id: string, type: "contacts" | "careers") => void; downloadResume?: (id: string, name: string) => void; copyEmail?: (email: string) => void; onCardClick: (career: Career) => void }) {
  if (!data || data.length === 0) return <p className="text-gray-500">No career applications found</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map(item => (
        <div
          key={item._id}
          onClick={() => onCardClick(item)}
          className="bg-white rounded-xl shadow-lg p-5 flex flex-col justify-between hover:shadow-2xl transition duration-300 cursor-pointer relative"
        >
          <div className="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-t-xl"></div>
          <h2 className="text-xl font-bold mb-2 text-blue-600">{item.name}</h2>
          <p className="text-gray-700 mb-1 flex items-center gap-1">
            <span className="font-medium">Email:</span> {item.email}
            <button
              onClick={e => {
                e.stopPropagation();
                copyEmail!(item.email);
              }}
              className="ml-2 text-gray-500 hover:text-gray-700 transition"
            >
              <ClipboardDocumentIcon className="w-4 h-4 inline" />
            </button>
          </p>
          {item.phone && <p className="text-gray-700 mb-1"><span className="font-medium">Phone:</span> {item.phone}</p>}
          {item.position && <p className="text-gray-700 mb-1"><span className="font-medium">Position:</span> {item.position}</p>}
        </div>
      ))}
    </div>
  );
}
