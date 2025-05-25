import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const faqCategories = [
    { id: 'all', name: 'All FAQs' },
    { id: 'orders', name: 'Orders & Shipping' },
    { id: 'returns', name: 'Returns & Refunds' },
    { id: 'products', name: 'Products & Stock' },
    { id: 'payment', name: 'Payment & Pricing' },
    { id: 'account', name: 'Account & Privacy' }
  ];
  
  const faqItems: FAQItem[] = [
    {
      id: 1,
      category: 'orders',
      question: 'How long does shipping take?',
      answer: 'Our standard shipping typically takes 2-5 business days for delivery across India. Metro cities usually receive orders within 2-3 business days. For express shipping options, please select the appropriate option during checkout.'
    },
    {
      id: 2,
      category: 'orders',
      question: 'How can I track my order?',
      answer: 'Once your order is shipped, you will receive a tracking number via email and SMS. You can use this tracking number on our website under "Track Order" or directly on the courier\'s website to check the status of your delivery.'
    },
    {
      id: 3,
      category: 'returns',
      question: 'What is your return policy?',
      answer: 'We accept returns within 7 days of delivery for most products, provided they are unused and in their original packaging with all accessories intact. Some items like sensors, microcontrollers, and other electronic components have specific return conditions. Please refer to the product page or contact our customer support for details.'
    },
    {
      id: 4,
      category: 'returns',
      question: 'How do I initiate a return or exchange?',
      answer: 'To initiate a return or exchange, please log in to your account, go to "My Orders," select the order containing the item you wish to return, and click on "Return/Exchange." Follow the instructions to complete the process. Alternatively, you can contact our customer support team for assistance.'
    },
    {
      id: 5,
      category: 'products',
      question: 'Do you provide product specifications and documentation?',
      answer: 'Yes, we provide detailed specifications, datasheets, and documentation for all our products. You can find these on the respective product pages. If you need additional information, please contact our technical support team.'
    },
    {
      id: 6,
      category: 'products',
      question: 'Do you offer bulk ordering for educational institutions?',
      answer: 'Yes, we offer special pricing and terms for educational institutions, workshops, and bulk orders. Please contact our sales team at bulk@robu.in with your requirements for a customized quote.'
    },
    {
      id: 7,
      category: 'payment',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit and debit cards, net banking, UPI payments (Google Pay, PhonePe, etc.), and cash on delivery (for orders below ₹5000). For international orders, we accept PayPal and international credit cards.'
    },
    {
      id: 8,
      category: 'payment',
      question: 'Do you offer any discounts for students?',
      answer: 'Yes, we offer a 10% discount for students with valid ID. Please contact our customer support with your student ID details to receive your discount code. We also run special promotions for educational projects from time to time.'
    },
    {
      id: 9,
      category: 'account',
      question: 'How do I create an account?',
      answer: 'You can create an account by clicking on the "Account" icon in the top right corner of our website and selecting "Register." Fill in your details, verify your email address, and your account will be created. You can also register during the checkout process.'
    },
    {
      id: 10,
      category: 'account',
      question: 'How do you protect my personal information?',
      answer: 'We take data privacy seriously. Your personal information is encrypted and stored securely. We never share your data with third parties without your consent. You can review our complete Privacy Policy for detailed information on how we collect, use, and protect your data.'
    }
  ];
  
  const toggleFaq = (id: number) => {
    if (activeFaq === id) {
      setActiveFaq(null);
    } else {
      setActiveFaq(id);
    }
  };
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setActiveFaq(null);
  };
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setActiveFaq(null);
  };
  
  // Filter FAQs based on category and search query
  const filteredFaqs = faqItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && (searchQuery === '' || matchesSearch);
  });
  
  return (
    <div className="py-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            Find answers to common questions about our products, ordering, shipping, and more.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-8 relative">
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full py-3 px-5 pr-12 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-primary-300 text-neutral-800"
            />
            <Search className="absolute right-4 top-3.5 h-5 w-5 text-neutral-400" />
          </div>
        </div>
      </div>
      
      {/* FAQ Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Categories Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-sm p-4 sticky top-24">
                <h2 className="font-bold text-lg text-neutral-800 mb-4">Categories</h2>
                <ul className="space-y-2">
                  {faqCategories.map(category => (
                    <li key={category.id}>
                      <button
                        onClick={() => handleCategoryChange(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          activeCategory === category.id
                            ? 'bg-primary-50 text-primary-600 font-medium'
                            : 'text-neutral-600 hover:bg-neutral-50'
                        }`}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 p-4 bg-secondary-50 rounded-lg">
                  <h3 className="font-medium text-neutral-800 mb-2">Need More Help?</h3>
                  <p className="text-sm text-neutral-600 mb-4">
                    Can't find what you're looking for? Our support team is ready to assist you.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block bg-secondary-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-secondary-600 transition-colors"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>
            
            {/* FAQ Accordion */}
            <div className="lg:w-3/4">
              {activeCategory !== 'all' && (
                <h2 className="text-xl font-bold text-neutral-800 mb-6">
                  {faqCategories.find(c => c.id === activeCategory)?.name}
                </h2>
              )}
              
              {searchQuery && (
                <p className="mb-6 text-neutral-600">
                  {filteredFaqs.length} {filteredFaqs.length === 1 ? 'result' : 'results'} found for "{searchQuery}"
                </p>
              )}
              
              {filteredFaqs.length === 0 ? (
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <h3 className="text-lg font-medium text-neutral-800 mb-2">No results found</h3>
                  <p className="text-neutral-600 mb-4">
                    We couldn't find any FAQs matching your criteria. Please try a different search or category.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('all');
                    }}
                    className="text-primary-500 font-medium hover:text-primary-600 transition-colors"
                  >
                    View all FAQs
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredFaqs.map(item => (
                    <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <button
                        onClick={() => toggleFaq(item.id)}
                        className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none"
                      >
                        <span className="font-medium text-neutral-800">{item.question}</span>
                        {activeFaq === item.id ? (
                          <ChevronUp className="h-5 w-5 text-primary-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-neutral-400" />
                        )}
                      </button>
                      
                      {activeFaq === item.id && (
                        <div className="px-6 py-4 border-t border-neutral-100 bg-neutral-50">
                          <p className="text-neutral-600">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              
              <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                <h3 className="font-medium text-lg text-neutral-800 mb-2">Still have questions?</h3>
                <p className="text-neutral-600 mb-4">
                  If you couldn't find the answer you were looking for, please don't hesitate to reach out to our customer service team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="bg-primary-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors inline-flex items-center justify-center"
                  >
                    Contact Us
                  </Link>
                  <a
                    href="mailto:support@robu.in"
                    className="bg-white text-neutral-700 border border-neutral-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-neutral-50 transition-colors inline-flex items-center justify-center"
                  >
                    Email Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;