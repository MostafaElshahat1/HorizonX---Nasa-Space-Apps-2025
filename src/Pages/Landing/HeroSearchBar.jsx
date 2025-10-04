// HeroSearchBar.jsx
import React from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';

export default function HeroSearchBar() {
  return (
    <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover Space Biology</h1>
        <p className="text-lg md:text-2xl mb-10">
          Explore summaries, trends, and knowledge of biology beyond Earth.
        </p>
        <div className="flex justify-center max-w-lg mx-auto gap-2">
          <Input placeholder="Search Space Biology Research…" className="flex-1"/>
          <Button>Search</Button>
        </div>
      </div>
    </section>
  );
}
