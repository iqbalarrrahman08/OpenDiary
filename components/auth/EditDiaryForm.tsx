"use client"
import React from 'react'
import { EditDiaryAction } from '../../actions/DiaryAction';
import { IDiary } from '../../utils/supabase';

type Props = {
  diary_id?: number 
  content?: string | undefined
}

const EditDiaryForm = ({diary_id, content}: Props) => {
  const id = {diary_id}
  const handleOpen = () => {
    const dialog = document.getElementById('modal') as HTMLDialogElement
    dialog.showModal()
  }
  console.log("🚀 ~ EditDiaryForm ~ id:", id)


  const handleClose = () => {
    const dialog = document.getElementById('modal') as HTMLDialogElement
    dialog.close()
  }

  return (
    <>
    <button className="btn btn-primary" onClick={(e) => {handleOpen(), e.preventDefault()}}>edit</button>
    <dialog id='modal' className="modal">
  <div className="modal-box px-auto">
    <form method="dialog" action={EditDiaryAction}>
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" type='reset' onClick={(e) => {e.preventDefault(), handleClose()}}>✕</button>
    </form>
    <div className='flex flex-col px-10 gap-5'>
    <input type="text" name="diary_id" defaultValue={diary_id} />
    <textarea
        placeholder="isi diary kamu disini..."
        className="h-72 p-4 text-lg border border-primary textarea"
        name="content"
        defaultValue={content}
      />
      <button className="btn btn-primary" type="submit">
        Editing Now
      </button>
    </div>
  </div>
</dialog>
    </>
  )
}

export default EditDiaryForm