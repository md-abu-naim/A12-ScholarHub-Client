
const Approve = ({ handleApprove, title }) => {
    return (
        <dialog id="my_modal_3" className="modal ">
            <div className="modal-box bg-[#1B1616] text-white">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className="text-center">
                    <h3 className="font-bold text-xl">{title}</h3>
                    <form onSubmit={handleApprove} className="mt-6 text-start space-y-2" >
                    <span className="md:pl-11">Registration Free or Paid..?</span>
                        <label className="input bg-[#222222] input-bordered flex items-center md:max-w-sm md:mx-auto  gap-2">
                            <input type="text" name="registration_fee" className="grow text-white" placeholder="Registration Fee" />
                            <button className="btn bg-[#c59d5f] hover:bg-[#f7ce8c]  border-none text-black font-bold">Submit</button>
                        </label>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default Approve;