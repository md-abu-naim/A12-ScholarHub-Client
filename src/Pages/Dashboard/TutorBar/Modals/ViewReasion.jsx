
const ViewReasion = () => {
    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box bg-black text-white">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className="text-center">
                    <h3 className="font-bold text-xl">View Rejection <br /> Reason & Feedback..</h3>
                    <div className="bg-[#1B1616] mt-6 rounded-lg text-start p-3">
                        <p><span className="text-[#C39C5D] font-bold">Reason:</span></p>
                        <p><span className="text-[#C39C5D] font-bold">Feedback:</span></p>
                    </div>
                </div>
            </div>
        </dialog>
    );
};

export default ViewReasion;