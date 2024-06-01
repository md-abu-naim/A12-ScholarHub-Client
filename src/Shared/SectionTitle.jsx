const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-white italic mb-2">--- {subHeading} ---</p>
            <h3 className="text-3xl text-white uppercase border-y-4 border-[#C39C5D] py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle; 