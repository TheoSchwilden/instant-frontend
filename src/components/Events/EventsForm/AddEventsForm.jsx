function AddEventsForm() {
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <h2 className="text-2xl font-bold">Add Event</h2>
        <form action="" className="pt-3">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Event Title</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Event Description</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Event Location</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Featured Image</span>
            </div>
            <input
              type="file"
              className="file-input file-input-primary file-input-bordered file-input-sm w-full max-w-xs"
            />
          </label>
          <div className="flex justify-center">
            <details className="dropdown mt-3">
              <summary className="m-1 btn">Invite friends</summary>
              <div className="form-control mt-3 flex flex-row justify-center items-center gap-2">
                <input
                  type="checkbox"
                  checked="defaultChecked"
                  className="checkbox checkbox-sm checkbox-primary"
                  onChange={() => {}}
                />
                <div className="avatar">
                  <div className="w-6 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <p>Friends 1</p>
              </div>
            </details>
          </div>
          <div className="flex justify-center mt-3">
            <button className="btn btn-primary btn-sm mt-3">Add Event</button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default AddEventsForm;
