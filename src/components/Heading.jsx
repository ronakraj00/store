function Heading({ title }) {
    return (
        <div className="font-mono flex justify-center text-center text-2xl font-bold">
            <p className="bg-white text-center w-max rounded-lg border-2 p-3 my-2 shadow-lg capitalize">
                {title}
            </p>
        </div>
    );
}

export default Heading;
