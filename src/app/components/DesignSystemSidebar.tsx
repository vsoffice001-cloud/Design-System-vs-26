/**
 * Design System Sidebar Navigation
 * 
 * Sticky sidebar with category grouping and active state
 */

import React from 'react';
import { Palette, Type, Square, Box, Grid3x3, Sparkles, Layout } from 'lucide-react';

export interface CategoryItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

export interface CategoryGroup {
  id: string;
  label: string;
  items: CategoryItem[];
}

interface DesignSystemSidebarProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
  categoryGroups: CategoryGroup[];
}

export function DesignSystemSidebar({
  activeCategory,
  onCategoryChange,
  categoryGroups,
}: DesignSystemSidebarProps) {
  return (
    <aside className="w-64 border-r border-black/10 bg-white sticky top-0 h-screen overflow-y-auto">
      {/* Header */}
      <div className="p-6 border-b border-black/10">
        <h1 className="text-xl font-bold text-black">Design System</h1>
        <p className="text-sm text-black/60 mt-1">Components & Guidelines</p>
      </div>

      {/* Navigation */}
      <nav className="p-4 pb-8">
        {categoryGroups.map((group) => (
          <div key={group.id} className="mb-6">
            {/* Group Label */}
            <div className="px-3 py-2 text-xs font-bold text-black/40 uppercase tracking-wider">
              {group.label}
            </div>

            {/* Category Items */}
            <ul className="space-y-1">
              {group.items.map((item) => {
                const isActive = activeCategory === item.id;
                
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => onCategoryChange(item.id)}
                      className={`
                        w-full flex items-center gap-3 px-3 py-2 rounded-[5px]
                        text-sm transition-all duration-200
                        ${isActive 
                          ? 'bg-black text-white font-medium shadow-sm' 
                          : 'text-black/70 hover:bg-black/5 hover:text-black'
                        }
                      `}
                    >
                      {item.icon && (
                        <span className={`flex-shrink-0 ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                          {item.icon}
                        </span>
                      )}
                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}