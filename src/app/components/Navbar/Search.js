"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Search, X, Send } from 'lucide-react';

const SearchPage = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchInputRef = useRef(null);

  // Sample search data - replace with your actual search API
  const searchData = [
    {
      title: "Shariah Views on Zakat Financing and Its Implementations",
      category: "Islamic Finance",
      type: "Article"
    },
    {
      title: "The alignment of Shariah and sustainable investing",
      category: "Investment",
      type: "Research"
    },
    {
      title: "A Shariah Compliance Review on Investment Linked Takaful in Malaysia",
      category: "Takaful",
      type: "Report"
    },
    {
      title: "Shariah-Compliant Banking Products and Services",
      category: "Banking",
      type: "Guide"
    },
    {
      title: "Understanding Shariah Principles in Modern Finance",
      category: "Education",
      type: "Article"
    },
    {
      title: "Shariah Advisory Board Guidelines",
      category: "Governance",
      type: "Guidelines"
    }
  ];

  // Focus input when search page opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  // Handle search input changes
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim()) {
      setIsSearching(true);
      // Simulate search delay
      setTimeout(() => {
        const filtered = searchData.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filtered);
        setIsSearching(false);
      }, 300);
    } else {
      setSearchResults([]);
      setIsSearching(false);
    }
  };

  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Add your search logic here
    }
  };

  // Handle result click
  const handleResultClick = (result) => {
    console.log('Clicked result:', result);
    // Add your navigation logic here
    onClose();
  };

  // Handle "Show all results" click
  const handleShowAllResults = () => {
    console.log('Show all results for:', searchQuery);
    // Add your navigation logic here
    onClose();
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-95 backdrop-blur-sm">
      <div className="min-h-screen flex flex-col">
        {/* Header with close button */}
        <div className="flex justify-end p-6">
          <button
            onClick={onClose}
            className="text-white hover:text-yellow-400 transition-colors p-2"
            aria-label="Close search"
          >
            <X size={24} />
          </button>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col items-center justify-start pt-16 px-6">
          {/* Greeting */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-4">
              Hello,
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400">
              How can I help you today?
            </h2>
          </div>

          {/* Search input */}
          <div className="w-full max-w-4xl mx-auto mb-8">
            <div className="relative">
              <div className="relative flex items-center">
                <div className="absolute left-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSearchSubmit(e);
                    }
                  }}
                  placeholder="Shariah"
                  className="w-full py-4 pl-12 pr-16 text-lg bg-white rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg"
                />
                
                {searchQuery && (
                  <button
                    type="button"
                    onClick={handleSearchSubmit}
                    className="absolute right-2 p-3 bg-yellow-400 hover:bg-yellow-500 rounded-full transition-colors"
                    aria-label="Search"
                  >
                    <Send className="h-5 w-5 text-gray-900" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Search results */}
          {searchQuery && (
            <div className="w-full max-w-4xl mx-auto">
              {isSearching ? (
                <div className="text-center py-8">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400"></div>
                  <p className="text-white mt-4">Searching...</p>
                </div>
              ) : searchResults.length > 0 ? (
                <div className="bg-gray-800 bg-opacity-50 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="space-y-4">
                    {searchResults.slice(0, 4).map((result, index) => (
                      <button
                        key={index}
                        onClick={() => handleResultClick(result)}
                        className="w-full text-left p-4 rounded-lg hover:bg-gray-700 hover:bg-opacity-50 transition-colors group"
                      >
                        <h3 className="text-white font-medium mb-2 group-hover:text-yellow-400 transition-colors">
                          {result.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-400">
                          <span className="px-2 py-1 bg-gray-600 rounded-full text-xs mr-2">
                            {result.type}
                          </span>
                          <span>{result.category}</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  {searchResults.length > 4 && (
                    <button
                      onClick={handleShowAllResults}
                      className="w-full mt-6 p-4 text-center text-yellow-400 hover:text-yellow-300 font-medium transition-colors border-t border-gray-600"
                    >
                      Show all results ({searchResults.length})
                    </button>
                  )}
                </div>
              ) : searchQuery.length > 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-400 text-lg">
                    No results found for "{searchQuery}"
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    Try different keywords or check your spelling
                  </p>
                </div>
              ) : null}
            </div>
          )}

          {/* Suggested searches when no input
          {!searchQuery && (
            <div className="w-full max-w-4xl mx-auto">
              <div className="space-y-3">
                {['Shariah Views on Zakat Financing and Its Implementations', 
                  'The alignment of Shariah and sustainable investing', 
                  'A Shariah Compliance Review on Investment Linked Takaful in Malaysia'].map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="block w-full text-left p-4 text-gray-300 hover:text-yellow-400 hover:bg-gray-800 hover:bg-opacity-30 rounded-lg transition-all duration-200"
                  >
                    {suggestion}
                  </button>
                ))}
                
                <button
                  onClick={handleShowAllResults}
                  className="block w-full text-left p-4 text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Show all results
                </button>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;