import { useEffect } from "react";

export default function LoginModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && event.target.id === "overlay") {
        onClose();
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault(); 
    onClose(); 
  };

  return (
    <div id="overlay" className="ovl fixed inset-0 flex items-center justify-center z-10 pr-4 pl-4 lg:pr-0 lg:pl-0">
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600">
          ✖
        </button>
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" className="w-full p-2 border mb-2" />
          <input type="password" placeholder="Password" className="w-full p-2 border mb-4" />
          <button className="bg-black text-white p-2 w-full cursor-pointer" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
