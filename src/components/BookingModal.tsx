import { motion, AnimatePresence } from 'motion/react';
import { X, School, MapPin, User, Phone, Mail, Users, Calendar, Clock, Laptop, Monitor, Sparkles, Check, ChevronRight, Loader2 } from 'lucide-react';
import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Package = 'standard' | 'interactive';
type TimeSlot = 'morning' | 'afternoon' | 'evening';
type Setup = 'interative' | 'standard';

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  
  const [formData, setFormData] = useState({
    schoolName: '',
    address: '',
    contactName: '',
    phone: '',
    email: '',
    students: '',
    date: '',
    timeSlot: 'morning'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.schoolName) newErrors.schoolName = "School name is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.contactName) newErrors.contactName = "Contact name is required";
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Phone validation
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    // Students count validation
    const count = parseInt(formData.students);
    if (!formData.students) {
      newErrors.students = "Student count is required";
    } else if (isNaN(count) || count <= 0) {
      newErrors.students = "Must be at least 1 student";
    } else if (count > 500) {
      newErrors.students = "For large groups, please contact us directly";
    }

    if (!formData.date) newErrors.date = "Date is required";
    if (!selectedPackage) newErrors.package = "Please select a package";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  // Close on Escape & Body Scroll Lock
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      // Scroll top of form or show a general error
      const form = document.getElementById('booking-form-content');
      if (form) form.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setLoading(false);
    setSuccess(true);

    // Trigger confetti
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
    
    setTimeout(() => {
      setSuccess(false);
      onClose();
      // Reset form
      setFormData({
        schoolName: '',
        address: '',
        contactName: '',
        phone: '',
        email: '',
        students: '',
        date: '',
        timeSlot: 'morning'
      });
      setSelectedPackage(null);
    }, 4000);
  };

  const packages = [
    { id: 1, price: '₹499', title: 'Basic Package', limit: 'Up to 30 Students', duration: '90 Minute Workshop' },
    { id: 2, price: '₹799', title: 'Premium Package', limit: '40+ Students', duration: '120 Minute Workshop' },
  ];

  const [selectedWorkshopType, setSelectedWorkshopType] = useState('standard');
  const [selectedSetup, setSelectedSetup] = useState('smart');
  
  const blackHoleVariants = {
    initial: { 
      scale: 0, 
      opacity: 0, 
      rotate: -180,
      borderRadius: '100%',
      filter: "blur(20px) brightness(0) contrast(200%)",
    },
    animate: { 
      scale: 1, 
      opacity: 1, 
      rotate: 0,
      borderRadius: '16px',
      filter: "blur(0px) brightness(1) contrast(100%)",
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 20,
        restDelta: 0.001
      }
    },
    exit: { 
      scale: 0.5, 
      opacity: 0, 
      rotate: 180,
      borderRadius: '100%',
      filter: "blur(20px) brightness(0) contrast(200%)",
      transition: { 
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const floatingTransition = {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            variants={blackHoleVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative w-full max-w-4xl bg-cyber-bg border border-cyber-teal/30 rounded-2xl shadow-[0_0_100px_rgba(0,212,170,0.15)] overflow-hidden"
          >
            {/* Success Overlay */}
            <AnimatePresence>
              {success && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-50 bg-cyber-bg flex flex-col items-center justify-center text-center p-8"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                    className="w-24 h-24 bg-cyber-teal rounded-full flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(0,212,170,0.5)]"
                  >
                    <Check size={48} className="text-cyber-bg" />
                  </motion.div>
                  <h2 className="text-4xl font-bold mb-4">Booking Confirmed!</h2>
                  <p className="text-cyber-muted text-lg max-w-md">
                    We've received your request. A confirmation email has been sent to you, and we'll reach out shortly to finalize the details.
                  </p>
                  <div className="mt-12 text-cyber-teal font-mono text-sm animate-pulse">
                    Preparing your cinematic workshop experience...
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Header */}
            <div className="relative h-48 bg-gradient-to-br from-cyber-bg-alt to-cyber-bg flex items-center justify-center overflow-hidden border-b border-cyber-teal/20">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,170,0.3),transparent_70%)] animate-pulse" />
                <div className="particles-container h-full w-full opacity-30" />
              </div>
              
              <div className="relative text-center z-10 p-6">
                <button 
                  onClick={onClose}
                  className="absolute top-0 right-0 p-4 text-cyber-muted hover:text-cyber-teal transition-colors"
                >
                  <X size={24} />
                </button>
                <div className="flex justify-center mb-3">
                  <motion.div 
                    animate={{ rotate: 360, y: [0, -5, 0] }}
                    transition={{ 
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      y: floatingTransition
                    }}
                    className="p-3 bg-cyber-teal/10 rounded-full border border-cyber-teal/30 shadow-[0_0_20px_rgba(0,212,170,0.2)]"
                  >
                    <Sparkles className="text-cyber-teal" size={32} />
                  </motion.div>
                </div>
                <motion.h2 
                  animate={{ y: [0, -3, 0] }}
                  transition={floatingTransition}
                  className="text-3xl sm:text-4xl font-bold tracking-tight mb-2"
                >
                  Book a Workshop
                </motion.h2>
                <p className="text-cyber-muted">Schedule an interactive AI workshop session for your students.</p>
              </div>
            </div>

            {/* Body */}
            <form 
              onSubmit={handleSubmit} 
              id="booking-form-content" 
              data-lenis-prevent
              className="p-6 sm:p-10 max-h-[70vh] overflow-y-auto custom-scrollbar no-hover-flicker"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* School Details */}
                <div className="space-y-6">
                  <h3 className="text-sm font-mono text-cyber-teal uppercase tracking-widest flex items-center gap-2">
                    <School size={16} /> Institute Information
                  </h3>
                  
                  <div className="space-y-4">
                    <InputGroup 
                      name="schoolName"
                      label="School / Institute Name" 
                      icon={<School size={18} />} 
                      placeholder="Enter school name" 
                      value={formData.schoolName}
                      onChange={handleChange}
                      error={errors.schoolName}
                      required 
                    />
                    <InputGroup 
                      name="address"
                      label="School Address" 
                      icon={<MapPin size={18} />} 
                      placeholder="Enter full address" 
                      value={formData.address}
                      onChange={handleChange}
                      error={errors.address}
                      required 
                      isTextArea 
                    />
                  </div>

                  <h3 className="text-sm font-mono text-cyber-teal uppercase tracking-widest flex items-center gap-2 pt-4">
                    <User size={16} /> Contact Details
                  </h3>
                  
                  <div className="space-y-4">
                    <InputGroup 
                      name="contactName"
                      label="Contact Person Name" 
                      icon={<User size={18} />} 
                      placeholder="Who should we speak with?" 
                      value={formData.contactName}
                      onChange={handleChange}
                      error={errors.contactName}
                      required 
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <InputGroup 
                        name="phone"
                        label="Contact Number" 
                        icon={<Phone size={18} />} 
                        placeholder="+91" 
                        type="tel" 
                        value={formData.phone}
                        onChange={handleChange}
                        error={errors.phone}
                        required 
                      />
                      <InputGroup 
                        name="email"
                        label="Email Address" 
                        icon={<Mail size={18} />} 
                        placeholder="your@email.com" 
                        type="email" 
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        required 
                      />
                    </div>
                  </div>
                </div>

                {/* Workshop Details */}
                <div className="space-y-6">
                  <h3 className="text-sm font-mono text-cyber-teal uppercase tracking-widest flex items-center gap-2">
                    <Users size={16} /> Session Configuration
                  </h3>

                  <div className="space-y-4">
                    <InputGroup 
                      name="students"
                      label="Number of Students" 
                      icon={<Users size={18} />} 
                      placeholder="Approximate count" 
                      type="number" 
                      value={formData.students}
                      onChange={handleChange}
                      error={errors.students}
                      required 
                    />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <InputGroup 
                        name="date"
                        label="Preferred Workshop Date" 
                        icon={<Calendar size={18} />} 
                        type="date" 
                        value={formData.date}
                        onChange={handleChange}
                        error={errors.date}
                        required 
                      />
                      <div className="space-y-2">
                        <label className="text-xs font-mono text-cyber-muted uppercase block">Time Slot</label>
                        <div className="relative">
                          <select 
                            name="timeSlot"
                            value={formData.timeSlot}
                            onChange={handleChange}
                            className="w-full bg-cyber-bg-alt border border-cyber-border rounded-lg px-4 py-3 text-sm focus:border-cyber-teal outline-none transition-all appearance-none cursor-pointer"
                          >
                            <option value="morning">Morning (8 AM - 12 PM)</option>
                            <option value="afternoon">Afternoon (1 PM - 4 PM)</option>
                            <option value="evening">Evening (5 PM - 8 PM)</option>
                          </select>
                          <ChevronRight size={16} className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none text-cyber-muted" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-xs font-mono text-cyber-muted uppercase block">Workshop Type</label>
                      <div className="grid grid-cols-2 gap-3">
                        <SelectionCard 
                          label="Standard" 
                          desc="Educational & Demonstrative" 
                          active={selectedWorkshopType === 'standard'}
                          onClick={() => setSelectedWorkshopType('standard')}
                        />
                        <SelectionCard 
                          label="Interactive" 
                          desc="Hands-on Challenges" 
                          active={selectedWorkshopType === 'interactive'}
                          onClick={() => setSelectedWorkshopType('interactive')}
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-xs font-mono text-cyber-muted uppercase block flex items-center gap-2">
                        <Monitor size={14} /> Presentation Setup
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <SelectionCard 
                          label="Smart Setup" 
                          desc="Touch Screen / Board" 
                          active={selectedSetup === 'smart'}
                          onClick={() => setSelectedSetup('smart')}
                        />
                        <SelectionCard 
                          label="Classroom" 
                          desc="Standard Projection" 
                          active={selectedSetup === 'standard'}
                          onClick={() => setSelectedSetup('standard')}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Packages */}
              <div className="mt-12">
                <h3 className="text-sm font-mono text-cyber-teal uppercase tracking-widest flex items-center justify-center gap-2 mb-4">
                  <Sparkles size={16} /> Choose Your Package
                </h3>
                {errors.package && (
                  <p className="text-center text-red-500 text-xs font-mono uppercase mb-6 animate-pulse">
                    {errors.package}
                  </p>
                )}
                <div className="grid sm:grid-cols-2 gap-6">
                  {packages.map((pkg) => (
                    <motion.div
                      key={pkg.id}
                      whileHover={{ y: -5 }}
                      onClick={() => setSelectedPackage(pkg.id)}
                      className={`relative p-8 rounded-2xl border-2 transition-all cursor-pointer overflow-hidden group ${
                        selectedPackage === pkg.id 
                        ? 'border-cyber-teal bg-cyber-teal/5 shadow-[0_0_40px_rgba(0,212,170,0.1)]' 
                        : 'border-cyber-border bg-cyber-bg-alt/50 hover:border-cyber-teal/30'
                      }`}
                    >
                      {selectedPackage === pkg.id && (
                        <motion.div 
                          layoutId="activePkg"
                          className="absolute -top-12 -right-12 w-24 h-24 bg-cyber-teal opacity-10 rounded-full blur-3xl" 
                        />
                      )}
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="text-xl font-bold">{pkg.title}</h4>
                          <span className="text-2xl font-bold text-cyber-teal">{pkg.price}</span>
                        </div>
                        <ul className="space-y-3 mb-6">
                          <li className="flex items-center gap-2 text-sm text-cyber-muted">
                            <Users size={14} className="text-cyber-teal" /> {pkg.limit}
                          </li>
                          <li className="flex items-center gap-2 text-sm text-cyber-muted">
                            <Clock size={14} className="text-cyber-teal" /> {pkg.duration}
                          </li>
                        </ul>
                        <div className={`w-full py-2 rounded-lg border text-center text-xs font-mono uppercase tracking-widest transition-all ${
                          selectedPackage === pkg.id 
                          ? 'bg-cyber-teal text-cyber-bg border-cyber-teal' 
                          : 'border-cyber-border text-cyber-muted group-hover:border-cyber-teal group-hover:text-cyber-teal'
                        }`}>
                          {selectedPackage === pkg.id ? 'Selected' : 'Choose Package'}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer Button */}
              <div className="mt-12 flex flex-col items-center gap-4">
                <motion.button
                  type="submit"
                  disabled={loading || !selectedPackage}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-[300px] h-16 bg-cyber-teal text-cyber-bg font-bold rounded-xl shadow-[0_0_30px_rgba(0,212,170,0.2)] hover:shadow-[0_0_50px_rgba(0,212,170,0.4)] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden relative"
                >
                  <AnimatePresence mode="wait">
                    {loading ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <Loader2 className="animate-spin" size={24} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="normal"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        Confirm Booking
                        <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Magnetic / Ripple Effect Background */}
                  <motion.div 
                    className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 pointer-events-none" 
                  />
                </motion.button>
                <p className="text-[10px] font-mono text-cyber-muted uppercase tracking-[0.2em]">
                  Secure encrypted transmission to infrastructure
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function InputGroup({ name, label, icon, isTextArea = false, type = 'text', placeholder, value, onChange, error, required = false }: any) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-xs font-mono text-cyber-muted uppercase block">{label}</label>
        {error && (
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[10px] font-mono text-red-500 uppercase"
          >
            {error}
          </motion.span>
        )}
      </div>
      <div className="relative group">
        <div className={`absolute left-4 top-4 transition-colors ${error ? 'text-red-500' : 'text-cyber-muted group-focus-within:text-cyber-teal'}`}>
          {icon}
        </div>
        {isTextArea ? (
          <textarea 
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            className={`w-full bg-cyber-bg-alt border rounded-lg pl-12 pr-4 py-3 text-sm outline-none transition-all min-h-[100px] resize-none ${
              error ? 'border-red-500 focus:border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.1)]' : 'border-cyber-border focus:border-cyber-teal'
            }`}
          />
        ) : (
          <input 
            name={name}
            value={value}
            onChange={onChange}
            type={type}
            required={required}
            placeholder={placeholder}
            className={`w-full bg-cyber-bg-alt border rounded-lg pl-12 pr-4 py-3 text-sm outline-none transition-all ${
              error ? 'border-red-500 focus:border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.1)]' : 'border-cyber-border focus:border-cyber-teal'
            }`}
          />
        )}
      </div>
    </div>
  );
}

function SelectionCard({ label, desc, active, onClick }: { label: string; desc: string; active: boolean; onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
        active 
        ? 'border-cyber-teal bg-cyber-teal/5' 
        : 'border-cyber-border bg-cyber-bg-alt/50 hover:border-cyber-teal/30'
      }`}
    >
      <div className="flex items-center justify-between gap-2 mb-1">
        <span className={`font-bold text-sm ${active ? 'text-cyber-teal' : 'text-cyber-white'}`}>{label}</span>
        {active && <Check size={14} className="text-cyber-teal" />}
      </div>
      <p className="text-[10px] text-cyber-muted uppercase tracking-wider">{desc}</p>
    </div>
  );
}
