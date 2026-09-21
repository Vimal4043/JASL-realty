import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Property from "./Property.jsx";
import PropertiesFilters from "./PropertiesFilters.jsx";
import PropertiesGrid from "./PropertiesGrid.jsx";
import { PROPERTIES } from "../../data/properties.js";

export default function PropertiesPage() {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    type: searchParams.get("type") || "all",
    budget: searchParams.get("budget") || "all",
    location: searchParams.get("location") || "all",
    query: searchParams.get("query") || "",
  });

  const filteredProperties = PROPERTIES.filter((property) => {
    if (filters.type !== "all") {
      const propertyType = (property.type || "").toLowerCase();
      if (!propertyType.includes(filters.type.toLowerCase())) return false;
    }

    if (filters.budget !== "all") {
      const minPrice = Number(property.minPrice || 0);
      const budgetMatches = {
        "Under ₹30 Lakhs": minPrice < 3000000,
        "₹30 - ₹40 Lakhs": minPrice >= 3000000 && minPrice <= 4000000,
        "₹40 - ₹50 Lakhs": minPrice >= 4000000 && minPrice <= 5000000,
        "₹50 - ₹70 Lakhs": minPrice >= 5000000 && minPrice <= 7000000,
        "Above ₹70 Lakhs": minPrice > 7000000,
      };
      if (!budgetMatches[filters.budget]) return false;
    }

    if (filters.location !== "all") {
      const locationText = [property.location, property.city, property.state]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      if (!locationText.includes(filters.location.toLowerCase())) return false;
    }

    if (filters.query.trim()) {
      const query = filters.query.trim().toLowerCase();
      const searchableText = [
        property.title,
        property.location,
        property.city,
        property.state,
        property.type,
        property.area,
        property.price,
        property.description,
        ...(property.highlights || []),
        ...(property.features || []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      if (!searchableText.includes(query)) return false;
    }

    return true;
  });

  return (
    <main className="pt-10 md:pt-20">
      <Property />
      <PropertiesFilters filters={filters} onChange={setFilters} />
      <PropertiesGrid properties={filteredProperties} />
    </main>
  );
}
