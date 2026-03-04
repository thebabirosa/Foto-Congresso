import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-brand-silver">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
              Solicite um orçamento para o seu evento
            </h2>
            <p className="text-lg text-brand-grey mb-10">
              Se você está organizando um congresso, feira ou evento corporativo, conte com uma equipe especializada em registrar cada momento com qualidade e profissionalismo.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-purple shadow-sm shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-dark text-lg">Email</h3>
                  <p className="text-brand-grey">contato@fotocongresso.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-purple shadow-sm shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-dark text-lg">Telefone / WhatsApp</h3>
                  <p className="text-brand-grey">(48) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-purple shadow-sm shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-dark text-lg">Atendimento</h3>
                  <p className="text-brand-grey">Sul, Sudeste e principais capitais do Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-brand-grey mb-2">Nome</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-purple focus:ring-2 focus:ring-purple-100 outline-none transition-all" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-grey mb-2">Empresa</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-purple focus:ring-2 focus:ring-purple-100 outline-none transition-all" placeholder="Nome da empresa" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-brand-grey mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-purple focus:ring-2 focus:ring-purple-100 outline-none transition-all" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-grey mb-2">Telefone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-purple focus:ring-2 focus:ring-purple-100 outline-none transition-all" placeholder="(00) 00000-0000" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-brand-grey mb-2">Tipo de Evento</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-purple focus:ring-2 focus:ring-purple-100 outline-none transition-all bg-white">
                    <option>Congresso</option>
                    <option>Feira / Exposição</option>
                    <option>Evento Corporativo</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-grey mb-2">Data do Evento</label>
                  <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-purple focus:ring-2 focus:ring-purple-100 outline-none transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-grey mb-2">Mensagem</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-purple focus:ring-2 focus:ring-purple-100 outline-none transition-all" placeholder="Conte mais sobre o evento..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-brand-dark text-white rounded-lg font-semibold hover:bg-brand-grey transition-colors flex items-center justify-center gap-2">
                Enviar Solicitação
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
