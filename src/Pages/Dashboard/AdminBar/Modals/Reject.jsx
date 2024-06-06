
const Reject = ({ handleReject, title }) => {
    return (
        <dialog id="my_modal_2" className="modal ">
            <div className="modal-box bg-[#1B1616] text-white">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className="text-center">
                    <h3 className="font-bold text-xl">Rejection Reason & Feedback</h3>
                    <h3 className="font-bold mt-3">({title})</h3>
                    <form onSubmit={handleReject} className="mt-6 text-start space-y-4" >
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-white">Reason*</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="reason" placeholder="Type Rejection Reson" className=" text-white input input-bordered bg-gray-600 w-full" />
                                </label>
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text font-bold text-white">Feedback*</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="feedback" placeholder="type Your Feedback" className="input text-white  input-bordered font-sans bg-gray-600 w-full" />
                                </label>
                            </div>
                        </div>
                        <button className="relative w-full inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-[#c59d5f] via-[#1B1616] to-[#c59d5f] group-hover:opacity-100"></span>
                            {/* <!-- Top glass gradient --> */}
                            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                            {/* <!-- Bottom gradient --> */}
                            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                            {/* <!-- Left gradient --> */}
                            <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                            {/* <!-- Right gradient --> */}
                            <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                            <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                            <span className="relative">Submit</span>
                        </button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default Reject;