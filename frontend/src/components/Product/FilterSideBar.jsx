import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

const FilterSidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const [priceRange, setPriceRange] = useState([0, 100]);

    const [filters, setFilters] = useState({
        category: "",
        gender: "",
        color: "",
        size: [],
        material: [],
        brand: [],
        minPrice: 0,
        maxPrice: 100,
    });

    useEffect(() => {
        const params = Object.fromEntries([...searchParams]);
        setFilters({
            category: params.category || "",
            gender: params.gender || "",
            color: params.color || "",
            size: params.size ? params.size.split(",") : [],
            material: params.material ? params.material.split(",") : [],
            brand: params.brand ? params.brand.split(",") : [],
            minPrice: params.minPrice || 0,
            maxPrice: params.maxPrice || 100,
        });
        setPriceRange([0, params.maxPrice || 100]);
    }, [searchParams]);

    const handleFilterChange = (e) => {
        const { name, value, checked, type } = e.target;
        let newFilters = { ...filters };

        if (type === "checkbox") {
            if (checked) {
                newFilters[name] = [...(newFilters[name] || []), value];
            } else {
                newFilters[name] = newFilters[name].filter((item) => item !== value);
            }
        } else {
            newFilters[name] = value;
        }

        setFilters(newFilters);
        updateURLParams(newFilters);
    };

    const handlePriceChange = (e) => {
        const newPrice = e.target.value;
        setPriceRange([0, newPrice]);
        const newFilters = { ...filters, minPrice: 0, maxPrice: newPrice };
        setFilters(newFilters);
        updateURLParams(newFilters);
    };

    const updateURLParams = (newFilters) => {
        const params = new URLSearchParams();
        Object.keys(newFilters).forEach((key) => {
            if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
                newFilters[key].forEach((value) => {
                    params.append(key, value);
                });
            } else if (newFilters[key]) {
                params.set(key, newFilters[key]);
            }
        });
        setSearchParams(params);
    };

    const handleClearFilters = () => {
        setFilters({
            category: "",
            gender: "",
            color: "",
            size: [],
            material: [],
            brand: [],
            minPrice: 0,
            maxPrice: 100,
        });
        setPriceRange([0, 100]);
        setSearchParams({});
    };

    const brands = [
        "Urban Threads",
        "Modern Fit",
        "Street Style",
        "Beach Breeze",
        "Fashionista",
        "ChicStyle",
    ];

    const genders = ["Men", "Women"];
    const categories = ["Top Wear", "Bottom Wear"];

    const colors = [
        { name: "Red", hex: "#FF0000" },
        { name: "Blue", hex: "#0000FF" },
        { name: "Black", hex: "#000000" },
        { name: "Green", hex: "#008000" },
        { name: "Yellow", hex: "#FFFF00" },
        { name: "Gray", hex: "#808080" },
        { name: "White", hex: "#FFFFFF" },
        { name: "Pink", hex: "#FFC0CB" },
        { name: "Beige", hex: "#F5F5DC" },
        { name: "Navy", hex: "#000080" },
    ];

    const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
    const materials = ["Cotton", "Wool", "Denim", "Polyester", "Silk", "Linen", "Viscose", "Fleece"];

    const Section = ({ title, children, color }) => (
        <div className={`mb-6 p-3 rounded-md shadow-md bg-gradient-to-br ${color}`}>
            <h4 className="text-lg font-bold text-white mb-3">{title}</h4>
            <div className="space-y-1">{children}</div>
        </div>
    );

    const CheckboxItem = ({ name, value, checked }) => (
        <label className="flex items-center gap-2 p-1 rounded hover:bg-white hover:bg-opacity-10 cursor-pointer text-white">
            <input
                type="checkbox"
                name={name}
                value={value}
                checked={checked}
                onChange={handleFilterChange}
            />
            <span>{value}</span>
        </label>
    );

    const RadioItem = ({ name, value, checked, extra }) => (
        <label className="flex items-center gap-2 p-1 rounded hover:bg-white hover:bg-opacity-10 cursor-pointer text-white">
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={handleFilterChange}
            />
            {extra}
            <span>{value}</span>
        </label>
    );

    return (
        <div className="p-4 w-full bg-gray-800 text-white max-w-sc max-h-screen overflow-y-auto rounded-lg shadow-lg flex flex-col justify-between">

            <div>
                <h3 className="text-2xl font-semibold text-cyan-400 mb-4">🎯 Filters</h3>

                <Section title="Category" color="from-purple-700 to-purple-500">
                    {categories.map((category) => (
                        <RadioItem
                            key={category}
                            name="category"
                            value={category}
                            checked={filters.category === category}
                        />
                    ))}
                </Section>

                <Section title="Gender" color="from-indigo-700 to-indigo-500">
                    {genders.map((gender) => (
                        <RadioItem
                            key={gender}
                            name="gender"
                            value={gender}
                            checked={filters.gender === gender}
                        />
                    ))}
                </Section>

                <Section title="Color" color="from-pink-600 to-yellow-400">
                    {colors.map((color) => (
                        <RadioItem
                            key={color.name}
                            name="color"
                            value={color.name}
                            checked={filters.color === color.name}
                            extra={
                                <span
                                    className="inline-block w-4 h-4 rounded-full border"
                                    style={{ backgroundColor: color.hex }}
                                />
                            }
                        />
                    ))}
                </Section>

                <Section title="Size" color="from-blue-600 to-teal-500">
                    {sizes.map((size) => (
                        <CheckboxItem
                            key={size}
                            name="size"
                            value={size}
                            checked={filters.size.includes(size)}
                        />
                    ))}
                </Section>

                <Section title="Material" color="from-green-600 to-lime-500">
                    {materials.map((material) => (
                        <CheckboxItem
                            key={material}
                            name="material"
                            value={material}
                            checked={filters.material.includes(material)}
                        />
                    ))}
                </Section>

                <Section title="Brand" color="from-yellow-500 to-orange-500">
                    {brands.map((brand) => (
                        <CheckboxItem
                            key={brand}
                            name="brand"
                            value={brand}
                            checked={filters.brand.includes(brand)}
                        />
                    ))}
                </Section>

                <Section title="Price Range" color="from-rose-500 to-pink-500">
                    <input
                        type="range"
                        name="maxPrice"
                        min="0"
                        max="100"
                        value={priceRange[1]}
                        onChange={handlePriceChange}
                        className="w-full accent-pink-300"
                    />
                    <div className="flex justify-between text-sm mt-1 text-white">
                        <span>$0</span>
                        <span>${priceRange[1]}</span>
                    </div>
                </Section>
            </div>

            {/* Footer: Clear All Filters */}
            <div className="mt-6 pt-4 border-t border-white border-opacity-10">
                <button
                    onClick={handleClearFilters}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition"
                >
                    ❌ Clear All Filters
                </button>
            </div>
        </div>
    );
};

export default FilterSidebar;
