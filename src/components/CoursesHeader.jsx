import SearchBar from "./SearchBar";

const CoursesHeader = () => {

    return (
        <header className="bg-white border-b border-slate-200 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
                    Explore Our{' '}
                    <span className="bg-clip-text text-transparent bg-green-600">Premium Sports</span>{' '}
                        Facilities
                </h1>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                    Discover world-class sports venues, book your favorite facilities,
    and enjoy a seamless booking experience with SportNest.
                </p>

                <div className="max-w-2xl mx-auto pt-4">
                    <SearchBar />
                </div>
            </div>
        </header>
    );
};

export default CoursesHeader;