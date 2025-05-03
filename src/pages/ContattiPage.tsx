import React, { useState } from 'react';

const ContattiPage: React.FC = () => {
  const [formData, setFormData] = useState({ nome: '', email: '', messaggio: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Messaggio inviato! Ti contatteremo presto.');
    setFormData({ nome: '', email: '', messaggio: '' });
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contattaci</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="nome"
          placeholder="Il tuo nome"
          value={formData.nome}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="La tua email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="messaggio"
          placeholder="Scrivi il tuo messaggio"
          value={formData.messaggio}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Invia
        </button>
      </form>
    </div>
  );
};

export default ContattiPage;
