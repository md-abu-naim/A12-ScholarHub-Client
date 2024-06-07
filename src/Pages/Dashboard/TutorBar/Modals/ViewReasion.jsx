
const ViewReasion = ({ reason, feedback, handleNewRequest }) => {
    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box bg-black text-white">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className="text-center">
                    <h3 className="font-bold text-xl">View Rejection <br /> Reason & Feedback..</h3>
                    <div className="bg-[#1B1616] space-y-2 mt-6 rounded-lg text-start p-3">
                        <p><span className="text-[#C39C5D] font-bold">Reason: </span>{reason}</p>
                        <p><span className="text-[#C39C5D] font-bold">Feedback: </span>{feedback}</p>
                    </div>
                    <button onClick={handleNewRequest} className="relative mt-3 w-full inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-[#c59d5f] via-[#1B1616] to-[#c59d5f] group-hover:opacity-100"></span>
                        <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                        <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                        <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                        <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                        <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                        <span className="relative">New Request</span>
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default ViewReasion;