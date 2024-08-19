import React from "react";
import { CreateDiaryAction } from "@/actions/DiaryAction";

const CreateDiaryForm = (): React.ReactElement => {
  return (
    <div className="container max-w-xl mx-auto">
    <form
      action={CreateDiaryAction}
      className="flex flex-col gap-4"
    >
      <textarea
        placeholder="isi diary kamu disini..."
        className="h-52 p-4 text-lg border border-primary textarea"
        name="content"
      />
      <button className="btn btn-primary" type="submit">
        Create Now
      </button>
    </form>
    </div>
  );
};

export default CreateDiaryForm;
